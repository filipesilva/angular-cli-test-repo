﻿import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Category7Mod6GridComponent } from './components/category7-mod6-grid/category7-mod6-grid.component';
import { Category7Mod6 } from './../../models/category7-mod6';

import { Category7Mod6Service } from './../../services/category7-mod6.service';

@Component({
  selector: 'app-mod6-category7-mod6-page',
  templateUrl: './category7-mod6-page.component.html',
  providers: [
    Category7Mod6Service
  ]
})
export class Category7Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Category7Mod6;

  @ViewChild('grid') grid: Category7Mod6GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private category7Mod6Service: Category7Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.category7Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Category7Mod6;
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
    this.router.navigate(['/mod6/category7-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.category7Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
