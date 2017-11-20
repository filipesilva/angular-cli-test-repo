import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod9GridComponent } from './components/issue8-mod9-grid/issue8-mod9-grid.component';
import { Issue8Mod9 } from './../../models/issue8-mod9';

import { Project8Mod9Service } from './../../services/project8-mod9.service';
import { Category8Mod9Service } from './../../services/category8-mod9.service';
import { Status8Mod9Service } from './../../services/status8-mod9.service';
import { Severity8Mod9Service } from './../../services/severity8-mod9.service';
import { Issue8Mod9Service } from './../../services/issue8-mod9.service';

@Component({
  selector: 'app-mod9-issue8-mod9-page',
  templateUrl: './issue8-mod9-page.component.html',
  providers: [
    Project8Mod9Service,
    Category8Mod9Service,
    Status8Mod9Service,
    Severity8Mod9Service,
    Issue8Mod9Service
  ]
})
export class Issue8Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod9;

  @ViewChild('grid') grid: Issue8Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod9Service: Project8Mod9Service,
    private category8Mod9Service: Category8Mod9Service,
    private status8Mod9Service: Status8Mod9Service,
    private severity8Mod9Service: Severity8Mod9Service,
    private issue8Mod9Service: Issue8Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue8Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod9;
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
    this.router.navigate(['/mod9/issue8-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod9 = items;
      });

    this.category8Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod9 = items;
      });

    this.status8Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod9 = items;
      });

    this.severity8Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod9 = items;
      });
  }

}
