import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';
import { environment } from './../../../environments/environment';

import { HelperService } from './helper.service';
import { SettingsService } from './settings.service';
import { TokenAuthentication } from './../models/token-authentication';

@Injectable()
export class BaseService {

  public urlApi = environment.urlApi;

  constructor(
    private helperService: HelperService,
    private settingsService: SettingsService) { }

  protected getHeaders(apiVersion = '1.0'): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Accept-Language', this.settingsService.locale)
      .set('x-api-version', apiVersion);
    return headers;
  }

  protected getAuthHeaders(apiVersion = '1.0'): HttpHeaders {
    let headers = this.getHeaders(apiVersion);
    const authentication = this.getAuthentication();

    if (authentication) {
      headers = headers.set('Authorization', `Bearer ${authentication.access_token}`);
    }

    return headers;
  }

  protected getAuthentication(): TokenAuthentication {
    const key = 'authentication';
    let authentication: TokenAuthentication = JSON.parse(sessionStorage.getItem(key));

    if (!authentication) {
      authentication = JSON.parse(localStorage.getItem(key));
    }

    return authentication;
  }

  protected setAuthentication(authentication: TokenAuthentication, remember: boolean) {
    const key = 'authentication';

    if (remember) {
      localStorage.setItem(key, JSON.stringify(authentication));
    } else {
      sessionStorage.setItem(key, JSON.stringify(authentication));
    }
  }

  public handleError(error): ErrorObservable {
    this.helperService.message.errorMessage(error.message);
    throw error;
  }

}
