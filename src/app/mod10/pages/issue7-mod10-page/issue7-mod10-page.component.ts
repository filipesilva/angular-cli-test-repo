import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod10GridComponent } from './components/issue7-mod10-grid/issue7-mod10-grid.component';
import { Issue7Mod10 } from './../../models/issue7-mod10';

import { Project7Mod10Service } from './../../services/project7-mod10.service';
import { Category7Mod10Service } from './../../services/category7-mod10.service';
import { Status7Mod10Service } from './../../services/status7-mod10.service';
import { Severity7Mod10Service } from './../../services/severity7-mod10.service';
import { Issue7Mod10Service } from './../../services/issue7-mod10.service';

@Component({
  selector: 'app-mod10-issue7-mod10-page',
  templateUrl: './issue7-mod10-page.component.html',
  providers: [
    Project7Mod10Service,
    Category7Mod10Service,
    Status7Mod10Service,
    Severity7Mod10Service,
    Issue7Mod10Service
  ]
})
export class Issue7Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod10;

  @ViewChild('grid') grid: Issue7Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod10Service: Project7Mod10Service,
    private category7Mod10Service: Category7Mod10Service,
    private status7Mod10Service: Status7Mod10Service,
    private severity7Mod10Service: Severity7Mod10Service,
    private issue7Mod10Service: Issue7Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue7Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod10;
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
    this.router.navigate(['/mod10/issue7-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod10 = items;
      });

    this.category7Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod10 = items;
      });

    this.status7Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod10 = items;
      });

    this.severity7Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod10 = items;
      });
  }

}
