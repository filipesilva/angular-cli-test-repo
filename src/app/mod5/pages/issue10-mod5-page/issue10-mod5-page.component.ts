import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod5GridComponent } from './components/issue10-mod5-grid/issue10-mod5-grid.component';
import { Issue10Mod5 } from './../../models/issue10-mod5';

import { Project10Mod5Service } from './../../services/project10-mod5.service';
import { Category10Mod5Service } from './../../services/category10-mod5.service';
import { Status10Mod5Service } from './../../services/status10-mod5.service';
import { Severity10Mod5Service } from './../../services/severity10-mod5.service';
import { Issue10Mod5Service } from './../../services/issue10-mod5.service';

@Component({
  selector: 'app-mod5-issue10-mod5-page',
  templateUrl: './issue10-mod5-page.component.html',
  providers: [
    Project10Mod5Service,
    Category10Mod5Service,
    Status10Mod5Service,
    Severity10Mod5Service,
    Issue10Mod5Service
  ]
})
export class Issue10Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod5;

  @ViewChild('grid') grid: Issue10Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod5Service: Project10Mod5Service,
    private category10Mod5Service: Category10Mod5Service,
    private status10Mod5Service: Status10Mod5Service,
    private severity10Mod5Service: Severity10Mod5Service,
    private issue10Mod5Service: Issue10Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue10Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod5;
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
    this.router.navigate(['/mod5/issue10-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod5 = items;
      });

    this.category10Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod5 = items;
      });

    this.status10Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod5 = items;
      });

    this.severity10Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod5 = items;
      });
  }

}
