import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod10GridComponent } from './components/issue1-mod10-grid/issue1-mod10-grid.component';
import { Issue1Mod10 } from './../../models/issue1-mod10';

import { Project1Mod10Service } from './../../services/project1-mod10.service';
import { Category1Mod10Service } from './../../services/category1-mod10.service';
import { Status1Mod10Service } from './../../services/status1-mod10.service';
import { Severity1Mod10Service } from './../../services/severity1-mod10.service';
import { Issue1Mod10Service } from './../../services/issue1-mod10.service';

@Component({
  selector: 'app-mod10-issue1-mod10-page',
  templateUrl: './issue1-mod10-page.component.html',
  providers: [
    Project1Mod10Service,
    Category1Mod10Service,
    Status1Mod10Service,
    Severity1Mod10Service,
    Issue1Mod10Service
  ]
})
export class Issue1Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod10;

  @ViewChild('grid') grid: Issue1Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod10Service: Project1Mod10Service,
    private category1Mod10Service: Category1Mod10Service,
    private status1Mod10Service: Status1Mod10Service,
    private severity1Mod10Service: Severity1Mod10Service,
    private issue1Mod10Service: Issue1Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue1Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod10;
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
    this.router.navigate(['/mod10/issue1-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod10 = items;
      });

    this.category1Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod10 = items;
      });

    this.status1Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod10 = items;
      });

    this.severity1Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod10 = items;
      });
  }

}
