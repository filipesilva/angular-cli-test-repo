import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/catch';

import { BaseService } from './base.service';
import { HelperService } from './helper.service';
import { SettingsService } from './settings.service';
import { NotificationResult } from './../models/notification-result';

import { User } from './../models/user';
import { Permission } from './../models/permission';
import { TokenAuthentication } from './../models/token-authentication';

@Injectable()
export class AuthService extends BaseService implements OnDestroy {

  public authenticated: boolean;
  public user: any;
  private permissions: Permission[];
  private ngUnsubscribe: Subject<void>;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    helperService: HelperService,
    settingsService: SettingsService
  ) {
    super(helperService, settingsService);
    this.authenticated = false;
    this.ngUnsubscribe = new Subject<void>();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public logon(user: User): Observable<NotificationResult> {
    this.authenticated = false;
    const url = `${this.urlApi}/account/login`;
    const data = { username: user.username, password: user.password };
    const login$ = this.httpClient.post<NotificationResult>(url, data, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err))
      .takeUntil(this.ngUnsubscribe);

    login$.subscribe(result => {
      this.authentication(result, user.remember);
      if (result.isValid) {
        this.loadUser(true);
        this.loadPermissions(true);
      }
    });

    return login$;
  }

  public startupTokenAuthentication(): void {
    this.authenticated = false;
    const authentication = super.getAuthentication();
    if (authentication) {
      if (+authentication.expiration_date > new Date().getTime()) {
        this.authenticated = true;
        this.refreshTokens();
        this.loadUser();
        this.loadPermissions(true);
      } else {
        this.logout();
      }
    }
  }

  public logout() {
    const key = 'authentication';
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
    this.permissions = null;
    this.authenticated = false;
    this.router.navigate(['/account/login']);
  }

  private getUser(): Observable<any> {
    const url = `${this.urlApi}/account/getUser`;
    return this.httpClient.get<any>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  private loadUser(redirect = false): void {
    this.getUser()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(user => {
        this.user = user;
        if (redirect) {
          setTimeout(() => { this.router.navigate(['/']); }, 0);
        }
      });
  }

  private refreshTokens(): void {
    const url = `${this.urlApi}/account/refreshToken`;
    const authentication = super.getAuthentication();
    const data = { refresh_token: authentication.refresh_token };
    this.httpClient.post<NotificationResult>(url, data, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err))
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        this.authentication(result, authentication.remember);
      });
  }

  private scheduleRefreshToken(expires_in: number): void {
    const interval = (expires_in / 2) * 1000;
    setTimeout(() => {
      this.refreshTokens();
    }, interval);
  }

  private authentication(result: NotificationResult, remember: boolean): void {
    if (result.isValid) {
      const authentication = result.data as TokenAuthentication;
      const now = new Date();
      authentication.expiration_date = new Date(now.getTime() + authentication.expires_in * 1000).getTime().toString();
      authentication.remember = remember;
      this.authenticated = true;
      super.setAuthentication(authentication, remember);
      this.scheduleRefreshToken(authentication.expires_in);
    }
  }

  public hasPermission(featureKey: string): boolean {
    let has = false;
    if (this.permissions) {
      has = this.permissions.find(x => x.featureKey.toLowerCase() === featureKey.toLowerCase()) !== undefined;
    }
    return has;
  }

  private loadPermissions(force = false): void {
    if (force || !this.permissions) {
      const url = `${this.urlApi}/cg/authorization/permissions`;
      this.httpClient.get<Permission[]>(url, { headers: this.getAuthHeaders() })
        .catch(err => this.handleError(err))
        .takeUntil(this.ngUnsubscribe)
        .subscribe(items => {
          this.permissions = items;
        });
    }
  }

  public getPermissions(): Observable<Permission[]> {
    if (this.permissions && this.permissions.length > 0) {
      return new Observable<Permission[]>(observer => {
        observer.next(this.permissions);
        observer.complete();
      });
    } else {
      const url = `${this.urlApi}/cg/authorization/permissions`;
      const permissions$ = this.httpClient.get<Permission[]>(url, { headers: this.getAuthHeaders() })
        .catch(err => this.handleError(err))
        .takeUntil(this.ngUnsubscribe);

      permissions$.subscribe(items => {
        this.permissions = items;
      });

      return permissions$;
    }
  }

}
