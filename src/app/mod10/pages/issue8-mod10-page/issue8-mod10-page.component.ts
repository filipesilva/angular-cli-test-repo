import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod10GridComponent } from './components/issue8-mod10-grid/issue8-mod10-grid.component';
import { Issue8Mod10 } from './../../models/issue8-mod10';

import { Project8Mod10Service } from './../../services/project8-mod10.service';
import { Category8Mod10Service } from './../../services/category8-mod10.service';
import { Status8Mod10Service } from './../../services/status8-mod10.service';
import { Severity8Mod10Service } from './../../services/severity8-mod10.service';
import { Issue8Mod10Service } from './../../services/issue8-mod10.service';

@Component({
  selector: 'app-mod10-issue8-mod10-page',
  templateUrl: './issue8-mod10-page.component.html',
  providers: [
    Project8Mod10Service,
    Category8Mod10Service,
    Status8Mod10Service,
    Severity8Mod10Service,
    Issue8Mod10Service
  ]
})
export class Issue8Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod10;

  @ViewChild('grid') grid: Issue8Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod10Service: Project8Mod10Service,
    private category8Mod10Service: Category8Mod10Service,
    private status8Mod10Service: Status8Mod10Service,
    private severity8Mod10Service: Severity8Mod10Service,
    private issue8Mod10Service: Issue8Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue8Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod10;
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
    this.router.navigate(['/mod10/issue8-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod10 = items;
      });

    this.category8Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod10 = items;
      });

    this.status8Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod10 = items;
      });

    this.severity8Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod10 = items;
      });
  }

}
