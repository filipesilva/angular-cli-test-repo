import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod1GridComponent } from './components/issue10-mod1-grid/issue10-mod1-grid.component';
import { Issue10Mod1 } from './../../models/issue10-mod1';

import { Project10Mod1Service } from './../../services/project10-mod1.service';
import { Category10Mod1Service } from './../../services/category10-mod1.service';
import { Status10Mod1Service } from './../../services/status10-mod1.service';
import { Severity10Mod1Service } from './../../services/severity10-mod1.service';
import { Issue10Mod1Service } from './../../services/issue10-mod1.service';

@Component({
  selector: 'app-mod1-issue10-mod1-page',
  templateUrl: './issue10-mod1-page.component.html',
  providers: [
    Project10Mod1Service,
    Category10Mod1Service,
    Status10Mod1Service,
    Severity10Mod1Service,
    Issue10Mod1Service
  ]
})
export class Issue10Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod1;

  @ViewChild('grid') grid: Issue10Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod1Service: Project10Mod1Service,
    private category10Mod1Service: Category10Mod1Service,
    private status10Mod1Service: Status10Mod1Service,
    private severity10Mod1Service: Severity10Mod1Service,
    private issue10Mod1Service: Issue10Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue10Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod1;
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
    this.router.navigate(['/mod1/issue10-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod1 = items;
      });

    this.category10Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod1 = items;
      });

    this.status10Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod1 = items;
      });

    this.severity10Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod1 = items;
      });
  }

}
