import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod10GridComponent } from './components/issue9-mod10-grid/issue9-mod10-grid.component';
import { Issue9Mod10 } from './../../models/issue9-mod10';

import { Project9Mod10Service } from './../../services/project9-mod10.service';
import { Category9Mod10Service } from './../../services/category9-mod10.service';
import { Status9Mod10Service } from './../../services/status9-mod10.service';
import { Severity9Mod10Service } from './../../services/severity9-mod10.service';
import { Issue9Mod10Service } from './../../services/issue9-mod10.service';

@Component({
  selector: 'app-mod10-issue9-mod10-page',
  templateUrl: './issue9-mod10-page.component.html',
  providers: [
    Project9Mod10Service,
    Category9Mod10Service,
    Status9Mod10Service,
    Severity9Mod10Service,
    Issue9Mod10Service
  ]
})
export class Issue9Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod10;

  @ViewChild('grid') grid: Issue9Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod10Service: Project9Mod10Service,
    private category9Mod10Service: Category9Mod10Service,
    private status9Mod10Service: Status9Mod10Service,
    private severity9Mod10Service: Severity9Mod10Service,
    private issue9Mod10Service: Issue9Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue9Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod10;
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
    this.router.navigate(['/mod10/issue9-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod10 = items;
      });

    this.category9Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod10 = items;
      });

    this.status9Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod10 = items;
      });

    this.severity9Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod10 = items;
      });
  }

}
