﻿import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Project6Mod4GridComponent } from './components/project6-mod4-grid/project6-mod4-grid.component';
import { Project6Mod4 } from './../../models/project6-mod4';

import { Project6Mod4Service } from './../../services/project6-mod4.service';

@Component({
  selector: 'app-mod4-project6-mod4-page',
  templateUrl: './project6-mod4-page.component.html',
  providers: [
    Project6Mod4Service
  ]
})
export class Project6Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Project6Mod4;

  @ViewChild('grid') grid: Project6Mod4GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod4Service: Project6Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.project6Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Project6Mod4;
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
    this.router.navigate(['/mod4/project6-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.project6Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
