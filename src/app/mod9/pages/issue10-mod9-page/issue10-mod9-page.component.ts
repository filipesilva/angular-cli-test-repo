import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod9GridComponent } from './components/issue10-mod9-grid/issue10-mod9-grid.component';
import { Issue10Mod9 } from './../../models/issue10-mod9';

import { Project10Mod9Service } from './../../services/project10-mod9.service';
import { Category10Mod9Service } from './../../services/category10-mod9.service';
import { Status10Mod9Service } from './../../services/status10-mod9.service';
import { Severity10Mod9Service } from './../../services/severity10-mod9.service';
import { Issue10Mod9Service } from './../../services/issue10-mod9.service';

@Component({
  selector: 'app-mod9-issue10-mod9-page',
  templateUrl: './issue10-mod9-page.component.html',
  providers: [
    Project10Mod9Service,
    Category10Mod9Service,
    Status10Mod9Service,
    Severity10Mod9Service,
    Issue10Mod9Service
  ]
})
export class Issue10Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod9;

  @ViewChild('grid') grid: Issue10Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod9Service: Project10Mod9Service,
    private category10Mod9Service: Category10Mod9Service,
    private status10Mod9Service: Status10Mod9Service,
    private severity10Mod9Service: Severity10Mod9Service,
    private issue10Mod9Service: Issue10Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue10Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod9;
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
    this.router.navigate(['/mod9/issue10-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod9 = items;
      });

    this.category10Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod9 = items;
      });

    this.status10Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod9 = items;
      });

    this.severity10Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod9 = items;
      });
  }

}
