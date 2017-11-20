import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod10GridComponent } from './components/issue10-mod10-grid/issue10-mod10-grid.component';
import { Issue10Mod10 } from './../../models/issue10-mod10';

import { Project10Mod10Service } from './../../services/project10-mod10.service';
import { Category10Mod10Service } from './../../services/category10-mod10.service';
import { Status10Mod10Service } from './../../services/status10-mod10.service';
import { Severity10Mod10Service } from './../../services/severity10-mod10.service';
import { Issue10Mod10Service } from './../../services/issue10-mod10.service';

@Component({
  selector: 'app-mod10-issue10-mod10-page',
  templateUrl: './issue10-mod10-page.component.html',
  providers: [
    Project10Mod10Service,
    Category10Mod10Service,
    Status10Mod10Service,
    Severity10Mod10Service,
    Issue10Mod10Service
  ]
})
export class Issue10Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod10;

  @ViewChild('grid') grid: Issue10Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod10Service: Project10Mod10Service,
    private category10Mod10Service: Category10Mod10Service,
    private status10Mod10Service: Status10Mod10Service,
    private severity10Mod10Service: Severity10Mod10Service,
    private issue10Mod10Service: Issue10Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue10Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod10;
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
    this.router.navigate(['/mod10/issue10-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod10 = items;
      });

    this.category10Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod10 = items;
      });

    this.status10Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod10 = items;
      });

    this.severity10Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod10 = items;
      });
  }

}
