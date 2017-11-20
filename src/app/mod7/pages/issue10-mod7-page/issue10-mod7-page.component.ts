import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod7GridComponent } from './components/issue10-mod7-grid/issue10-mod7-grid.component';
import { Issue10Mod7 } from './../../models/issue10-mod7';

import { Project10Mod7Service } from './../../services/project10-mod7.service';
import { Category10Mod7Service } from './../../services/category10-mod7.service';
import { Status10Mod7Service } from './../../services/status10-mod7.service';
import { Severity10Mod7Service } from './../../services/severity10-mod7.service';
import { Issue10Mod7Service } from './../../services/issue10-mod7.service';

@Component({
  selector: 'app-mod7-issue10-mod7-page',
  templateUrl: './issue10-mod7-page.component.html',
  providers: [
    Project10Mod7Service,
    Category10Mod7Service,
    Status10Mod7Service,
    Severity10Mod7Service,
    Issue10Mod7Service
  ]
})
export class Issue10Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod7;

  @ViewChild('grid') grid: Issue10Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod7Service: Project10Mod7Service,
    private category10Mod7Service: Category10Mod7Service,
    private status10Mod7Service: Status10Mod7Service,
    private severity10Mod7Service: Severity10Mod7Service,
    private issue10Mod7Service: Issue10Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue10Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod7;
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
    this.router.navigate(['/mod7/issue10-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod7 = items;
      });

    this.category10Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod7 = items;
      });

    this.status10Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod7 = items;
      });

    this.severity10Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod7 = items;
      });
  }

}
