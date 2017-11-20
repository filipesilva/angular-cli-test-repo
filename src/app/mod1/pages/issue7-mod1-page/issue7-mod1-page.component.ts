import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod1GridComponent } from './components/issue7-mod1-grid/issue7-mod1-grid.component';
import { Issue7Mod1 } from './../../models/issue7-mod1';

import { Project7Mod1Service } from './../../services/project7-mod1.service';
import { Category7Mod1Service } from './../../services/category7-mod1.service';
import { Status7Mod1Service } from './../../services/status7-mod1.service';
import { Severity7Mod1Service } from './../../services/severity7-mod1.service';
import { Issue7Mod1Service } from './../../services/issue7-mod1.service';

@Component({
  selector: 'app-mod1-issue7-mod1-page',
  templateUrl: './issue7-mod1-page.component.html',
  providers: [
    Project7Mod1Service,
    Category7Mod1Service,
    Status7Mod1Service,
    Severity7Mod1Service,
    Issue7Mod1Service
  ]
})
export class Issue7Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod1;

  @ViewChild('grid') grid: Issue7Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod1Service: Project7Mod1Service,
    private category7Mod1Service: Category7Mod1Service,
    private status7Mod1Service: Status7Mod1Service,
    private severity7Mod1Service: Severity7Mod1Service,
    private issue7Mod1Service: Issue7Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue7Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod1;
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
    this.router.navigate(['/mod1/issue7-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod1 = items;
      });

    this.category7Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod1 = items;
      });

    this.status7Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod1 = items;
      });

    this.severity7Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod1 = items;
      });
  }

}
