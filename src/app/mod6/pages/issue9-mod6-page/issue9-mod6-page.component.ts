import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod6GridComponent } from './components/issue9-mod6-grid/issue9-mod6-grid.component';
import { Issue9Mod6 } from './../../models/issue9-mod6';

import { Project9Mod6Service } from './../../services/project9-mod6.service';
import { Category9Mod6Service } from './../../services/category9-mod6.service';
import { Status9Mod6Service } from './../../services/status9-mod6.service';
import { Severity9Mod6Service } from './../../services/severity9-mod6.service';
import { Issue9Mod6Service } from './../../services/issue9-mod6.service';

@Component({
  selector: 'app-mod6-issue9-mod6-page',
  templateUrl: './issue9-mod6-page.component.html',
  providers: [
    Project9Mod6Service,
    Category9Mod6Service,
    Status9Mod6Service,
    Severity9Mod6Service,
    Issue9Mod6Service
  ]
})
export class Issue9Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod6;

  @ViewChild('grid') grid: Issue9Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod6Service: Project9Mod6Service,
    private category9Mod6Service: Category9Mod6Service,
    private status9Mod6Service: Status9Mod6Service,
    private severity9Mod6Service: Severity9Mod6Service,
    private issue9Mod6Service: Issue9Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue9Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod6;
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
    this.router.navigate(['/mod6/issue9-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod6 = items;
      });

    this.category9Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod6 = items;
      });

    this.status9Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod6 = items;
      });

    this.severity9Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod6 = items;
      });
  }

}
