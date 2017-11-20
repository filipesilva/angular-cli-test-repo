import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod2GridComponent } from './components/issue10-mod2-grid/issue10-mod2-grid.component';
import { Issue10Mod2 } from './../../models/issue10-mod2';

import { Project10Mod2Service } from './../../services/project10-mod2.service';
import { Category10Mod2Service } from './../../services/category10-mod2.service';
import { Status10Mod2Service } from './../../services/status10-mod2.service';
import { Severity10Mod2Service } from './../../services/severity10-mod2.service';
import { Issue10Mod2Service } from './../../services/issue10-mod2.service';

@Component({
  selector: 'app-mod2-issue10-mod2-page',
  templateUrl: './issue10-mod2-page.component.html',
  providers: [
    Project10Mod2Service,
    Category10Mod2Service,
    Status10Mod2Service,
    Severity10Mod2Service,
    Issue10Mod2Service
  ]
})
export class Issue10Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod2;

  @ViewChild('grid') grid: Issue10Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod2Service: Project10Mod2Service,
    private category10Mod2Service: Category10Mod2Service,
    private status10Mod2Service: Status10Mod2Service,
    private severity10Mod2Service: Severity10Mod2Service,
    private issue10Mod2Service: Issue10Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue10Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod2;
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
    this.router.navigate(['/mod2/issue10-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod2 = items;
      });

    this.category10Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod2 = items;
      });

    this.status10Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod2 = items;
      });

    this.severity10Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod2 = items;
      });
  }

}
