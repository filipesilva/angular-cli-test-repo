import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod8GridComponent } from './components/issue7-mod8-grid/issue7-mod8-grid.component';
import { Issue7Mod8 } from './../../models/issue7-mod8';

import { Project7Mod8Service } from './../../services/project7-mod8.service';
import { Category7Mod8Service } from './../../services/category7-mod8.service';
import { Status7Mod8Service } from './../../services/status7-mod8.service';
import { Severity7Mod8Service } from './../../services/severity7-mod8.service';
import { Issue7Mod8Service } from './../../services/issue7-mod8.service';

@Component({
  selector: 'app-mod8-issue7-mod8-page',
  templateUrl: './issue7-mod8-page.component.html',
  providers: [
    Project7Mod8Service,
    Category7Mod8Service,
    Status7Mod8Service,
    Severity7Mod8Service,
    Issue7Mod8Service
  ]
})
export class Issue7Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod8;

  @ViewChild('grid') grid: Issue7Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod8Service: Project7Mod8Service,
    private category7Mod8Service: Category7Mod8Service,
    private status7Mod8Service: Status7Mod8Service,
    private severity7Mod8Service: Severity7Mod8Service,
    private issue7Mod8Service: Issue7Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue7Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod8;
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
    this.router.navigate(['/mod8/issue7-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod8 = items;
      });

    this.category7Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod8 = items;
      });

    this.status7Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod8 = items;
      });

    this.severity7Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod8 = items;
      });
  }

}
