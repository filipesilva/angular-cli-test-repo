import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod9GridComponent } from './components/issue7-mod9-grid/issue7-mod9-grid.component';
import { Issue7Mod9 } from './../../models/issue7-mod9';

import { Project7Mod9Service } from './../../services/project7-mod9.service';
import { Category7Mod9Service } from './../../services/category7-mod9.service';
import { Status7Mod9Service } from './../../services/status7-mod9.service';
import { Severity7Mod9Service } from './../../services/severity7-mod9.service';
import { Issue7Mod9Service } from './../../services/issue7-mod9.service';

@Component({
  selector: 'app-mod9-issue7-mod9-page',
  templateUrl: './issue7-mod9-page.component.html',
  providers: [
    Project7Mod9Service,
    Category7Mod9Service,
    Status7Mod9Service,
    Severity7Mod9Service,
    Issue7Mod9Service
  ]
})
export class Issue7Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod9;

  @ViewChild('grid') grid: Issue7Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod9Service: Project7Mod9Service,
    private category7Mod9Service: Category7Mod9Service,
    private status7Mod9Service: Status7Mod9Service,
    private severity7Mod9Service: Severity7Mod9Service,
    private issue7Mod9Service: Issue7Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue7Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod9;
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
    this.router.navigate(['/mod9/issue7-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod9 = items;
      });

    this.category7Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod9 = items;
      });

    this.status7Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod9 = items;
      });

    this.severity7Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod9 = items;
      });
  }

}
