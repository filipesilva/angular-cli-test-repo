import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod6GridComponent } from './components/issue1-mod6-grid/issue1-mod6-grid.component';
import { Issue1Mod6 } from './../../models/issue1-mod6';

import { Project1Mod6Service } from './../../services/project1-mod6.service';
import { Category1Mod6Service } from './../../services/category1-mod6.service';
import { Status1Mod6Service } from './../../services/status1-mod6.service';
import { Severity1Mod6Service } from './../../services/severity1-mod6.service';
import { Issue1Mod6Service } from './../../services/issue1-mod6.service';

@Component({
  selector: 'app-mod6-issue1-mod6-page',
  templateUrl: './issue1-mod6-page.component.html',
  providers: [
    Project1Mod6Service,
    Category1Mod6Service,
    Status1Mod6Service,
    Severity1Mod6Service,
    Issue1Mod6Service
  ]
})
export class Issue1Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod6;

  @ViewChild('grid') grid: Issue1Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod6Service: Project1Mod6Service,
    private category1Mod6Service: Category1Mod6Service,
    private status1Mod6Service: Status1Mod6Service,
    private severity1Mod6Service: Severity1Mod6Service,
    private issue1Mod6Service: Issue1Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue1Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod6;
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
    this.router.navigate(['/mod6/issue1-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod6 = items;
      });

    this.category1Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod6 = items;
      });

    this.status1Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod6 = items;
      });

    this.severity1Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod6 = items;
      });
  }

}
