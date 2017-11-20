import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { AuthorizationGridComponent } from './components/authorization-grid/authorization-grid.component';
import { Authorization } from './../../models/authorization';

import { RoleService } from './../../services/role.service';
import { AuthorizationService } from './../../services/authorization.service';

@Component({
  selector: 'app-cg-authorization-page',
  templateUrl: './authorization-page.component.html',
  providers: [
    RoleService,
    AuthorizationService
  ]
})
export class AuthorizationPageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public idRole = '';
  public itemsRole = [];

  @ViewChild('grid') grid: AuthorizationGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private roleService: RoleService,
    private authorizationService: AuthorizationService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.authorization.select');
    this.loadSelects();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadSelects(): void {
    this.roleService
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.itemsRole = items;
      });
  }

  public refresh(): void {
    this.grid.get(this.idRole);
  }

}
