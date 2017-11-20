import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod6GridComponent } from './components/issue7-mod6-grid/issue7-mod6-grid.component';
import { Issue7Mod6 } from './../../models/issue7-mod6';

import { Project7Mod6Service } from './../../services/project7-mod6.service';
import { Category7Mod6Service } from './../../services/category7-mod6.service';
import { Status7Mod6Service } from './../../services/status7-mod6.service';
import { Severity7Mod6Service } from './../../services/severity7-mod6.service';
import { Issue7Mod6Service } from './../../services/issue7-mod6.service';

@Component({
  selector: 'app-mod6-issue7-mod6-page',
  templateUrl: './issue7-mod6-page.component.html',
  providers: [
    Project7Mod6Service,
    Category7Mod6Service,
    Status7Mod6Service,
    Severity7Mod6Service,
    Issue7Mod6Service
  ]
})
export class Issue7Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod6;

  @ViewChild('grid') grid: Issue7Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod6Service: Project7Mod6Service,
    private category7Mod6Service: Category7Mod6Service,
    private status7Mod6Service: Status7Mod6Service,
    private severity7Mod6Service: Severity7Mod6Service,
    private issue7Mod6Service: Issue7Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue7Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod6;
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
    this.router.navigate(['/mod6/issue7-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod6 = items;
      });

    this.category7Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod6 = items;
      });

    this.status7Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod6 = items;
      });

    this.severity7Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod6 = items;
      });
  }

}
