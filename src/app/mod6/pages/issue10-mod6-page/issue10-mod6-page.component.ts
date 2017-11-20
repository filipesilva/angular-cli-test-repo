import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod6GridComponent } from './components/issue10-mod6-grid/issue10-mod6-grid.component';
import { Issue10Mod6 } from './../../models/issue10-mod6';

import { Project10Mod6Service } from './../../services/project10-mod6.service';
import { Category10Mod6Service } from './../../services/category10-mod6.service';
import { Status10Mod6Service } from './../../services/status10-mod6.service';
import { Severity10Mod6Service } from './../../services/severity10-mod6.service';
import { Issue10Mod6Service } from './../../services/issue10-mod6.service';

@Component({
  selector: 'app-mod6-issue10-mod6-page',
  templateUrl: './issue10-mod6-page.component.html',
  providers: [
    Project10Mod6Service,
    Category10Mod6Service,
    Status10Mod6Service,
    Severity10Mod6Service,
    Issue10Mod6Service
  ]
})
export class Issue10Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod6;

  @ViewChild('grid') grid: Issue10Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod6Service: Project10Mod6Service,
    private category10Mod6Service: Category10Mod6Service,
    private status10Mod6Service: Status10Mod6Service,
    private severity10Mod6Service: Severity10Mod6Service,
    private issue10Mod6Service: Issue10Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue10Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod6;
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
    this.router.navigate(['/mod6/issue10-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod6 = items;
      });

    this.category10Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod6 = items;
      });

    this.status10Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod6 = items;
      });

    this.severity10Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod6 = items;
      });
  }

}
