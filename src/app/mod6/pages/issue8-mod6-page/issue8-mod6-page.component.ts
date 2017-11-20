import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod6GridComponent } from './components/issue8-mod6-grid/issue8-mod6-grid.component';
import { Issue8Mod6 } from './../../models/issue8-mod6';

import { Project8Mod6Service } from './../../services/project8-mod6.service';
import { Category8Mod6Service } from './../../services/category8-mod6.service';
import { Status8Mod6Service } from './../../services/status8-mod6.service';
import { Severity8Mod6Service } from './../../services/severity8-mod6.service';
import { Issue8Mod6Service } from './../../services/issue8-mod6.service';

@Component({
  selector: 'app-mod6-issue8-mod6-page',
  templateUrl: './issue8-mod6-page.component.html',
  providers: [
    Project8Mod6Service,
    Category8Mod6Service,
    Status8Mod6Service,
    Severity8Mod6Service,
    Issue8Mod6Service
  ]
})
export class Issue8Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod6;

  @ViewChild('grid') grid: Issue8Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod6Service: Project8Mod6Service,
    private category8Mod6Service: Category8Mod6Service,
    private status8Mod6Service: Status8Mod6Service,
    private severity8Mod6Service: Severity8Mod6Service,
    private issue8Mod6Service: Issue8Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue8Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod6;
        } else {
          this.item = null;
        }
      });

    this.modalFilter.init(() => this.filter());
    this.loadSelects();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public filter(): void {
    this.grid.newSearch();
    this.modalFilter.close();
  }

  public new(): void {
    this.newRecord = true;
    this.router.navigate(['/mod6/issue8-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod6 = items;
      });

    this.category8Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod6 = items;
      });

    this.status8Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod6 = items;
      });

    this.severity8Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod6 = items;
      });
  }

}
