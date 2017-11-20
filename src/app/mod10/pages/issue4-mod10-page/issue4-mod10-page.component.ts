import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod10GridComponent } from './components/issue4-mod10-grid/issue4-mod10-grid.component';
import { Issue4Mod10 } from './../../models/issue4-mod10';

import { Project4Mod10Service } from './../../services/project4-mod10.service';
import { Category4Mod10Service } from './../../services/category4-mod10.service';
import { Status4Mod10Service } from './../../services/status4-mod10.service';
import { Severity4Mod10Service } from './../../services/severity4-mod10.service';
import { Issue4Mod10Service } from './../../services/issue4-mod10.service';

@Component({
  selector: 'app-mod10-issue4-mod10-page',
  templateUrl: './issue4-mod10-page.component.html',
  providers: [
    Project4Mod10Service,
    Category4Mod10Service,
    Status4Mod10Service,
    Severity4Mod10Service,
    Issue4Mod10Service
  ]
})
export class Issue4Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod10;

  @ViewChild('grid') grid: Issue4Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod10Service: Project4Mod10Service,
    private category4Mod10Service: Category4Mod10Service,
    private status4Mod10Service: Status4Mod10Service,
    private severity4Mod10Service: Severity4Mod10Service,
    private issue4Mod10Service: Issue4Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue4Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod10;
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
    this.router.navigate(['/mod10/issue4-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod10 = items;
      });

    this.category4Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod10 = items;
      });

    this.status4Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod10 = items;
      });

    this.severity4Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod10 = items;
      });
  }

}
