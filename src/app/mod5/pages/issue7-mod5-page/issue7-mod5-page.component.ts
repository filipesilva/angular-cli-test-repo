import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod5GridComponent } from './components/issue7-mod5-grid/issue7-mod5-grid.component';
import { Issue7Mod5 } from './../../models/issue7-mod5';

import { Project7Mod5Service } from './../../services/project7-mod5.service';
import { Category7Mod5Service } from './../../services/category7-mod5.service';
import { Status7Mod5Service } from './../../services/status7-mod5.service';
import { Severity7Mod5Service } from './../../services/severity7-mod5.service';
import { Issue7Mod5Service } from './../../services/issue7-mod5.service';

@Component({
  selector: 'app-mod5-issue7-mod5-page',
  templateUrl: './issue7-mod5-page.component.html',
  providers: [
    Project7Mod5Service,
    Category7Mod5Service,
    Status7Mod5Service,
    Severity7Mod5Service,
    Issue7Mod5Service
  ]
})
export class Issue7Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod5;

  @ViewChild('grid') grid: Issue7Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod5Service: Project7Mod5Service,
    private category7Mod5Service: Category7Mod5Service,
    private status7Mod5Service: Status7Mod5Service,
    private severity7Mod5Service: Severity7Mod5Service,
    private issue7Mod5Service: Issue7Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue7Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod5;
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
    this.router.navigate(['/mod5/issue7-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod5 = items;
      });

    this.category7Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod5 = items;
      });

    this.status7Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod5 = items;
      });

    this.severity7Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod5 = items;
      });
  }

}
