import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod5GridComponent } from './components/issue4-mod5-grid/issue4-mod5-grid.component';
import { Issue4Mod5 } from './../../models/issue4-mod5';

import { Project4Mod5Service } from './../../services/project4-mod5.service';
import { Category4Mod5Service } from './../../services/category4-mod5.service';
import { Status4Mod5Service } from './../../services/status4-mod5.service';
import { Severity4Mod5Service } from './../../services/severity4-mod5.service';
import { Issue4Mod5Service } from './../../services/issue4-mod5.service';

@Component({
  selector: 'app-mod5-issue4-mod5-page',
  templateUrl: './issue4-mod5-page.component.html',
  providers: [
    Project4Mod5Service,
    Category4Mod5Service,
    Status4Mod5Service,
    Severity4Mod5Service,
    Issue4Mod5Service
  ]
})
export class Issue4Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod5;

  @ViewChild('grid') grid: Issue4Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod5Service: Project4Mod5Service,
    private category4Mod5Service: Category4Mod5Service,
    private status4Mod5Service: Status4Mod5Service,
    private severity4Mod5Service: Severity4Mod5Service,
    private issue4Mod5Service: Issue4Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue4Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod5;
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
    this.router.navigate(['/mod5/issue4-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod5 = items;
      });

    this.category4Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod5 = items;
      });

    this.status4Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod5 = items;
      });

    this.severity4Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod5 = items;
      });
  }

}
