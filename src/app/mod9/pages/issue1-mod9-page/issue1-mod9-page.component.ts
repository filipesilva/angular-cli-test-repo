import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod9GridComponent } from './components/issue1-mod9-grid/issue1-mod9-grid.component';
import { Issue1Mod9 } from './../../models/issue1-mod9';

import { Project1Mod9Service } from './../../services/project1-mod9.service';
import { Category1Mod9Service } from './../../services/category1-mod9.service';
import { Status1Mod9Service } from './../../services/status1-mod9.service';
import { Severity1Mod9Service } from './../../services/severity1-mod9.service';
import { Issue1Mod9Service } from './../../services/issue1-mod9.service';

@Component({
  selector: 'app-mod9-issue1-mod9-page',
  templateUrl: './issue1-mod9-page.component.html',
  providers: [
    Project1Mod9Service,
    Category1Mod9Service,
    Status1Mod9Service,
    Severity1Mod9Service,
    Issue1Mod9Service
  ]
})
export class Issue1Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod9;

  @ViewChild('grid') grid: Issue1Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod9Service: Project1Mod9Service,
    private category1Mod9Service: Category1Mod9Service,
    private status1Mod9Service: Status1Mod9Service,
    private severity1Mod9Service: Severity1Mod9Service,
    private issue1Mod9Service: Issue1Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue1Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod9;
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
    this.router.navigate(['/mod9/issue1-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod9 = items;
      });

    this.category1Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod9 = items;
      });

    this.status1Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod9 = items;
      });

    this.severity1Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod9 = items;
      });
  }

}
