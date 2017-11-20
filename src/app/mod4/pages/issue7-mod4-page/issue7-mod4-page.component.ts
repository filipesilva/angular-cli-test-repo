import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod4GridComponent } from './components/issue7-mod4-grid/issue7-mod4-grid.component';
import { Issue7Mod4 } from './../../models/issue7-mod4';

import { Project7Mod4Service } from './../../services/project7-mod4.service';
import { Category7Mod4Service } from './../../services/category7-mod4.service';
import { Status7Mod4Service } from './../../services/status7-mod4.service';
import { Severity7Mod4Service } from './../../services/severity7-mod4.service';
import { Issue7Mod4Service } from './../../services/issue7-mod4.service';

@Component({
  selector: 'app-mod4-issue7-mod4-page',
  templateUrl: './issue7-mod4-page.component.html',
  providers: [
    Project7Mod4Service,
    Category7Mod4Service,
    Status7Mod4Service,
    Severity7Mod4Service,
    Issue7Mod4Service
  ]
})
export class Issue7Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod4;

  @ViewChild('grid') grid: Issue7Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod4Service: Project7Mod4Service,
    private category7Mod4Service: Category7Mod4Service,
    private status7Mod4Service: Status7Mod4Service,
    private severity7Mod4Service: Severity7Mod4Service,
    private issue7Mod4Service: Issue7Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue7Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod4;
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
    this.router.navigate(['/mod4/issue7-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod4 = items;
      });

    this.category7Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod4 = items;
      });

    this.status7Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod4 = items;
      });

    this.severity7Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod4 = items;
      });
  }

}
