import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod9GridComponent } from './components/issue4-mod9-grid/issue4-mod9-grid.component';
import { Issue4Mod9 } from './../../models/issue4-mod9';

import { Project4Mod9Service } from './../../services/project4-mod9.service';
import { Category4Mod9Service } from './../../services/category4-mod9.service';
import { Status4Mod9Service } from './../../services/status4-mod9.service';
import { Severity4Mod9Service } from './../../services/severity4-mod9.service';
import { Issue4Mod9Service } from './../../services/issue4-mod9.service';

@Component({
  selector: 'app-mod9-issue4-mod9-page',
  templateUrl: './issue4-mod9-page.component.html',
  providers: [
    Project4Mod9Service,
    Category4Mod9Service,
    Status4Mod9Service,
    Severity4Mod9Service,
    Issue4Mod9Service
  ]
})
export class Issue4Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod9;

  @ViewChild('grid') grid: Issue4Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod9Service: Project4Mod9Service,
    private category4Mod9Service: Category4Mod9Service,
    private status4Mod9Service: Status4Mod9Service,
    private severity4Mod9Service: Severity4Mod9Service,
    private issue4Mod9Service: Issue4Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue4Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod9;
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
    this.router.navigate(['/mod9/issue4-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod9 = items;
      });

    this.category4Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod9 = items;
      });

    this.status4Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod9 = items;
      });

    this.severity4Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod9 = items;
      });
  }

}
