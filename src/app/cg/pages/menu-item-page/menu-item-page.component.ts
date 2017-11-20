import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { MenuItemGridComponent } from './components/menu-item-grid/menu-item-grid.component';
import { MenuItem } from './../../models/menu-item';

import { MenuItemService } from './../../services/menu-item.service';

@Component({
  selector: 'app-cg-menu-item-page',
  templateUrl: './menu-item-page.component.html',
  providers: [
    MenuItemService
  ]
})
export class MenuItemPageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: MenuItem;

  @ViewChild('grid') grid: MenuItemGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private menuItemService: MenuItemService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.menuItem.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as MenuItem;
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
    this.router.navigate(['/cg/menu-item', { id: '' }]);
  }

  private edit(id: string): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.menuItemService
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
