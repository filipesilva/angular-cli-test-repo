import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { RoleGridComponent } from './components/role-grid/role-grid.component';
import { Role } from './../../models/role';

import { UserService } from './../../services/user.service';
import { RoleService } from './../../services/role.service';

@Component({
  selector: 'app-cg-role-page',
  templateUrl: './role-page.component.html',
  providers: [
    UserService,
    RoleService
  ]
})
export class RolePageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Role;

  @ViewChild('grid') grid: RoleGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private roleService: RoleService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.role.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Role;
        } else {
          this.item = null;
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public new(): void {
    this.newRecord = true;
    this.router.navigate(['/cg/role', { id: '' }]);
  }

  private edit(id: string): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.roleService
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
