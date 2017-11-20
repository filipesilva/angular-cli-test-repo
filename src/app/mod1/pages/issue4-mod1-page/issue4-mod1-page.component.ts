import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod1GridComponent } from './components/issue4-mod1-grid/issue4-mod1-grid.component';
import { Issue4Mod1 } from './../../models/issue4-mod1';

import { Project4Mod1Service } from './../../services/project4-mod1.service';
import { Category4Mod1Service } from './../../services/category4-mod1.service';
import { Status4Mod1Service } from './../../services/status4-mod1.service';
import { Severity4Mod1Service } from './../../services/severity4-mod1.service';
import { Issue4Mod1Service } from './../../services/issue4-mod1.service';

@Component({
  selector: 'app-mod1-issue4-mod1-page',
  templateUrl: './issue4-mod1-page.component.html',
  providers: [
    Project4Mod1Service,
    Category4Mod1Service,
    Status4Mod1Service,
    Severity4Mod1Service,
    Issue4Mod1Service
  ]
})
export class Issue4Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod1;

  @ViewChild('grid') grid: Issue4Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod1Service: Project4Mod1Service,
    private category4Mod1Service: Category4Mod1Service,
    private status4Mod1Service: Status4Mod1Service,
    private severity4Mod1Service: Severity4Mod1Service,
    private issue4Mod1Service: Issue4Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue4Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod1;
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
    this.router.navigate(['/mod1/issue4-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod1 = items;
      });

    this.category4Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod1 = items;
      });

    this.status4Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod1 = items;
      });

    this.severity4Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod1 = items;
      });
  }

}
