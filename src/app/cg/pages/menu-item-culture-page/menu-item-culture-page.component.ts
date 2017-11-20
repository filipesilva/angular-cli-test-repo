import { Component, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { MenuItemCultureGridComponent } from './components/menu-item-culture-grid/menu-item-culture-grid.component';
import { MenuItemCulture } from './../../models/menu-item-culture';

import { CultureService as cgCultureService } from './../../../cg/services/culture.service';
import { MenuItemCultureService } from './../../services/menu-item-culture.service';

@Component({
  selector: 'app-cg-menu-item-culture-page',
  templateUrl: './menu-item-culture-page.component.html',
  providers: [
    cgCultureService,
    MenuItemCultureService
  ]
})
export class MenuItemCulturePageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: MenuItemCulture;

  @Input() parentId: string;

  @ViewChild('grid') grid: MenuItemCultureGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private menuItemCultureService: MenuItemCultureService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.menuItem.select');
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public new(): void {
    this.newRecord = true;
    this.item = {} as MenuItemCulture;
    this.item.idMenuItem = this.parentId;
  }

  public back(): void {
    this.item = null;
  }

  public edit(id: string): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.menuItemCultureService
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
