﻿import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Status4Mod3GridComponent } from './components/status4-mod3-grid/status4-mod3-grid.component';
import { Status4Mod3 } from './../../models/status4-mod3';

import { Status4Mod3Service } from './../../services/status4-mod3.service';

@Component({
  selector: 'app-mod3-status4-mod3-page',
  templateUrl: './status4-mod3-page.component.html',
  providers: [
    Status4Mod3Service
  ]
})
export class Status4Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Status4Mod3;

  @ViewChild('grid') grid: Status4Mod3GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private status4Mod3Service: Status4Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.status4Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Status4Mod3;
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
    this.router.navigate(['/mod3/status4-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.status4Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
