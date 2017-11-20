import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod8GridComponent } from './components/issue10-mod8-grid/issue10-mod8-grid.component';
import { Issue10Mod8 } from './../../models/issue10-mod8';

import { Project10Mod8Service } from './../../services/project10-mod8.service';
import { Category10Mod8Service } from './../../services/category10-mod8.service';
import { Status10Mod8Service } from './../../services/status10-mod8.service';
import { Severity10Mod8Service } from './../../services/severity10-mod8.service';
import { Issue10Mod8Service } from './../../services/issue10-mod8.service';

@Component({
  selector: 'app-mod8-issue10-mod8-page',
  templateUrl: './issue10-mod8-page.component.html',
  providers: [
    Project10Mod8Service,
    Category10Mod8Service,
    Status10Mod8Service,
    Severity10Mod8Service,
    Issue10Mod8Service
  ]
})
export class Issue10Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod8;

  @ViewChild('grid') grid: Issue10Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod8Service: Project10Mod8Service,
    private category10Mod8Service: Category10Mod8Service,
    private status10Mod8Service: Status10Mod8Service,
    private severity10Mod8Service: Severity10Mod8Service,
    private issue10Mod8Service: Issue10Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue10Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod8;
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
    this.router.navigate(['/mod8/issue10-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod8 = items;
      });

    this.category10Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod8 = items;
      });

    this.status10Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod8 = items;
      });

    this.severity10Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod8 = items;
      });
  }

}
