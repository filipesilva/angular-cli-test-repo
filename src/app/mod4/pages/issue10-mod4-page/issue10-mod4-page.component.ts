import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod4GridComponent } from './components/issue10-mod4-grid/issue10-mod4-grid.component';
import { Issue10Mod4 } from './../../models/issue10-mod4';

import { Project10Mod4Service } from './../../services/project10-mod4.service';
import { Category10Mod4Service } from './../../services/category10-mod4.service';
import { Status10Mod4Service } from './../../services/status10-mod4.service';
import { Severity10Mod4Service } from './../../services/severity10-mod4.service';
import { Issue10Mod4Service } from './../../services/issue10-mod4.service';

@Component({
  selector: 'app-mod4-issue10-mod4-page',
  templateUrl: './issue10-mod4-page.component.html',
  providers: [
    Project10Mod4Service,
    Category10Mod4Service,
    Status10Mod4Service,
    Severity10Mod4Service,
    Issue10Mod4Service
  ]
})
export class Issue10Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod4;

  @ViewChild('grid') grid: Issue10Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod4Service: Project10Mod4Service,
    private category10Mod4Service: Category10Mod4Service,
    private status10Mod4Service: Status10Mod4Service,
    private severity10Mod4Service: Severity10Mod4Service,
    private issue10Mod4Service: Issue10Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue10Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod4;
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
    this.router.navigate(['/mod4/issue10-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod4 = items;
      });

    this.category10Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod4 = items;
      });

    this.status10Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod4 = items;
      });

    this.severity10Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod4 = items;
      });
  }

}
