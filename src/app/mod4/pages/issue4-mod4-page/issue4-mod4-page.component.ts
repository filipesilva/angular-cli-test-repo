import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod4GridComponent } from './components/issue4-mod4-grid/issue4-mod4-grid.component';
import { Issue4Mod4 } from './../../models/issue4-mod4';

import { Project4Mod4Service } from './../../services/project4-mod4.service';
import { Category4Mod4Service } from './../../services/category4-mod4.service';
import { Status4Mod4Service } from './../../services/status4-mod4.service';
import { Severity4Mod4Service } from './../../services/severity4-mod4.service';
import { Issue4Mod4Service } from './../../services/issue4-mod4.service';

@Component({
  selector: 'app-mod4-issue4-mod4-page',
  templateUrl: './issue4-mod4-page.component.html',
  providers: [
    Project4Mod4Service,
    Category4Mod4Service,
    Status4Mod4Service,
    Severity4Mod4Service,
    Issue4Mod4Service
  ]
})
export class Issue4Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod4;

  @ViewChild('grid') grid: Issue4Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod4Service: Project4Mod4Service,
    private category4Mod4Service: Category4Mod4Service,
    private status4Mod4Service: Status4Mod4Service,
    private severity4Mod4Service: Severity4Mod4Service,
    private issue4Mod4Service: Issue4Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue4Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod4;
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
    this.router.navigate(['/mod4/issue4-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod4 = items;
      });

    this.category4Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod4 = items;
      });

    this.status4Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod4 = items;
      });

    this.severity4Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod4 = items;
      });
  }

}
