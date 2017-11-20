import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod1GridComponent } from './components/issue1-mod1-grid/issue1-mod1-grid.component';
import { Issue1Mod1 } from './../../models/issue1-mod1';

import { Project1Mod1Service } from './../../services/project1-mod1.service';
import { Category1Mod1Service } from './../../services/category1-mod1.service';
import { Status1Mod1Service } from './../../services/status1-mod1.service';
import { Severity1Mod1Service } from './../../services/severity1-mod1.service';
import { Issue1Mod1Service } from './../../services/issue1-mod1.service';

@Component({
  selector: 'app-mod1-issue1-mod1-page',
  templateUrl: './issue1-mod1-page.component.html',
  providers: [
    Project1Mod1Service,
    Category1Mod1Service,
    Status1Mod1Service,
    Severity1Mod1Service,
    Issue1Mod1Service
  ]
})
export class Issue1Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod1;

  @ViewChild('grid') grid: Issue1Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod1Service: Project1Mod1Service,
    private category1Mod1Service: Category1Mod1Service,
    private status1Mod1Service: Status1Mod1Service,
    private severity1Mod1Service: Severity1Mod1Service,
    private issue1Mod1Service: Issue1Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue1Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod1;
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
    this.router.navigate(['/mod1/issue1-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod1 = items;
      });

    this.category1Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod1 = items;
      });

    this.status1Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod1 = items;
      });

    this.severity1Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod1 = items;
      });
  }

}
