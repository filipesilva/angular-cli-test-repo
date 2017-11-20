import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod9GridComponent } from './components/issue9-mod9-grid/issue9-mod9-grid.component';
import { Issue9Mod9 } from './../../models/issue9-mod9';

import { Project9Mod9Service } from './../../services/project9-mod9.service';
import { Category9Mod9Service } from './../../services/category9-mod9.service';
import { Status9Mod9Service } from './../../services/status9-mod9.service';
import { Severity9Mod9Service } from './../../services/severity9-mod9.service';
import { Issue9Mod9Service } from './../../services/issue9-mod9.service';

@Component({
  selector: 'app-mod9-issue9-mod9-page',
  templateUrl: './issue9-mod9-page.component.html',
  providers: [
    Project9Mod9Service,
    Category9Mod9Service,
    Status9Mod9Service,
    Severity9Mod9Service,
    Issue9Mod9Service
  ]
})
export class Issue9Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod9;

  @ViewChild('grid') grid: Issue9Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod9Service: Project9Mod9Service,
    private category9Mod9Service: Category9Mod9Service,
    private status9Mod9Service: Status9Mod9Service,
    private severity9Mod9Service: Severity9Mod9Service,
    private issue9Mod9Service: Issue9Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue9Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod9;
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
    this.router.navigate(['/mod9/issue9-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod9 = items;
      });

    this.category9Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod9 = items;
      });

    this.status9Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod9 = items;
      });

    this.severity9Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod9 = items;
      });
  }

}
