import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod1GridComponent } from './components/issue8-mod1-grid/issue8-mod1-grid.component';
import { Issue8Mod1 } from './../../models/issue8-mod1';

import { Project8Mod1Service } from './../../services/project8-mod1.service';
import { Category8Mod1Service } from './../../services/category8-mod1.service';
import { Status8Mod1Service } from './../../services/status8-mod1.service';
import { Severity8Mod1Service } from './../../services/severity8-mod1.service';
import { Issue8Mod1Service } from './../../services/issue8-mod1.service';

@Component({
  selector: 'app-mod1-issue8-mod1-page',
  templateUrl: './issue8-mod1-page.component.html',
  providers: [
    Project8Mod1Service,
    Category8Mod1Service,
    Status8Mod1Service,
    Severity8Mod1Service,
    Issue8Mod1Service
  ]
})
export class Issue8Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod1;

  @ViewChild('grid') grid: Issue8Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod1Service: Project8Mod1Service,
    private category8Mod1Service: Category8Mod1Service,
    private status8Mod1Service: Status8Mod1Service,
    private severity8Mod1Service: Severity8Mod1Service,
    private issue8Mod1Service: Issue8Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue8Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod1;
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
    this.router.navigate(['/mod1/issue8-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod1 = items;
      });

    this.category8Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod1 = items;
      });

    this.status8Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod1 = items;
      });

    this.severity8Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod1 = items;
      });
  }

}
