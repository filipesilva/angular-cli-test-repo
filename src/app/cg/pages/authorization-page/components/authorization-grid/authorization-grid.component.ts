import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { AuthService } from './../../../../../shared/services/auth.service';
import { HelperService } from './../../../../../shared/services/helper.service';

import { AuthorizationService } from './../../../../services/authorization.service';

@Component({
  selector: 'app-cg-authorization-grid',
  templateUrl: './authorization-grid.component.html',
  styleUrls: ['./authorization-grid.component.scss']
})
export class AuthorizationGridComponent extends BaseComponent implements OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public isLoading = false;
  public items = [];

  @Input() idRole;

  constructor(
    private router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private authorizationService: AuthorizationService) {
    super(authService);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public get(idRole): void {
    this.items = [];
    if (idRole) {
      this.authorizationService
        .getPermissionsByRole(idRole)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(items => {
          this.items = items;
          this.isLoading = false;
        });
    }
  }

  public check(item): void {
    item.authorized = !item.authorized;
    this.recursiveCheck(item);
  }

  private recursiveCheck(item): void {
    for (const _item of this.items) {
      if (_item.idFeatureParent === item.idFeature) {
        _item.authorized = item.authorized;
        this.recursiveCheck(_item);
      }
    }
  }

  public save(): void {
    this.isLoading = true;
    this.authorizationService
      .savePermissionsByRole(this.idRole, this.items)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        if (result.isValid) {
          this.helperService.message.success(result);
          this.isLoading = false;
        }
      });
  }

}
