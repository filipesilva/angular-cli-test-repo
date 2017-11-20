import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod8GridComponent } from './components/issue4-mod8-grid/issue4-mod8-grid.component';
import { Issue4Mod8 } from './../../models/issue4-mod8';

import { Project4Mod8Service } from './../../services/project4-mod8.service';
import { Category4Mod8Service } from './../../services/category4-mod8.service';
import { Status4Mod8Service } from './../../services/status4-mod8.service';
import { Severity4Mod8Service } from './../../services/severity4-mod8.service';
import { Issue4Mod8Service } from './../../services/issue4-mod8.service';

@Component({
  selector: 'app-mod8-issue4-mod8-page',
  templateUrl: './issue4-mod8-page.component.html',
  providers: [
    Project4Mod8Service,
    Category4Mod8Service,
    Status4Mod8Service,
    Severity4Mod8Service,
    Issue4Mod8Service
  ]
})
export class Issue4Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod8;

  @ViewChild('grid') grid: Issue4Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod8Service: Project4Mod8Service,
    private category4Mod8Service: Category4Mod8Service,
    private status4Mod8Service: Status4Mod8Service,
    private severity4Mod8Service: Severity4Mod8Service,
    private issue4Mod8Service: Issue4Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue4Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod8;
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
    this.router.navigate(['/mod8/issue4-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod8 = items;
      });

    this.category4Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod8 = items;
      });

    this.status4Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod8 = items;
      });

    this.severity4Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod8 = items;
      });
  }

}
