import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod2GridComponent } from './components/issue7-mod2-grid/issue7-mod2-grid.component';
import { Issue7Mod2 } from './../../models/issue7-mod2';

import { Project7Mod2Service } from './../../services/project7-mod2.service';
import { Category7Mod2Service } from './../../services/category7-mod2.service';
import { Status7Mod2Service } from './../../services/status7-mod2.service';
import { Severity7Mod2Service } from './../../services/severity7-mod2.service';
import { Issue7Mod2Service } from './../../services/issue7-mod2.service';

@Component({
  selector: 'app-mod2-issue7-mod2-page',
  templateUrl: './issue7-mod2-page.component.html',
  providers: [
    Project7Mod2Service,
    Category7Mod2Service,
    Status7Mod2Service,
    Severity7Mod2Service,
    Issue7Mod2Service
  ]
})
export class Issue7Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod2;

  @ViewChild('grid') grid: Issue7Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod2Service: Project7Mod2Service,
    private category7Mod2Service: Category7Mod2Service,
    private status7Mod2Service: Status7Mod2Service,
    private severity7Mod2Service: Severity7Mod2Service,
    private issue7Mod2Service: Issue7Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue7Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod2;
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
    this.router.navigate(['/mod2/issue7-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod2 = items;
      });

    this.category7Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod2 = items;
      });

    this.status7Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod2 = items;
      });

    this.severity7Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod2 = items;
      });
  }

}
