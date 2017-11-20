import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod6GridComponent } from './components/issue4-mod6-grid/issue4-mod6-grid.component';
import { Issue4Mod6 } from './../../models/issue4-mod6';

import { Project4Mod6Service } from './../../services/project4-mod6.service';
import { Category4Mod6Service } from './../../services/category4-mod6.service';
import { Status4Mod6Service } from './../../services/status4-mod6.service';
import { Severity4Mod6Service } from './../../services/severity4-mod6.service';
import { Issue4Mod6Service } from './../../services/issue4-mod6.service';

@Component({
  selector: 'app-mod6-issue4-mod6-page',
  templateUrl: './issue4-mod6-page.component.html',
  providers: [
    Project4Mod6Service,
    Category4Mod6Service,
    Status4Mod6Service,
    Severity4Mod6Service,
    Issue4Mod6Service
  ]
})
export class Issue4Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod6;

  @ViewChild('grid') grid: Issue4Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod6Service: Project4Mod6Service,
    private category4Mod6Service: Category4Mod6Service,
    private status4Mod6Service: Status4Mod6Service,
    private severity4Mod6Service: Severity4Mod6Service,
    private issue4Mod6Service: Issue4Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue4Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod6;
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
    this.router.navigate(['/mod6/issue4-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod6 = items;
      });

    this.category4Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod6 = items;
      });

    this.status4Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod6 = items;
      });

    this.severity4Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod6 = items;
      });
  }

}
