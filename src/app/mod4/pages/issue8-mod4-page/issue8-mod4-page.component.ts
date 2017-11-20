import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod4GridComponent } from './components/issue8-mod4-grid/issue8-mod4-grid.component';
import { Issue8Mod4 } from './../../models/issue8-mod4';

import { Project8Mod4Service } from './../../services/project8-mod4.service';
import { Category8Mod4Service } from './../../services/category8-mod4.service';
import { Status8Mod4Service } from './../../services/status8-mod4.service';
import { Severity8Mod4Service } from './../../services/severity8-mod4.service';
import { Issue8Mod4Service } from './../../services/issue8-mod4.service';

@Component({
  selector: 'app-mod4-issue8-mod4-page',
  templateUrl: './issue8-mod4-page.component.html',
  providers: [
    Project8Mod4Service,
    Category8Mod4Service,
    Status8Mod4Service,
    Severity8Mod4Service,
    Issue8Mod4Service
  ]
})
export class Issue8Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod4;

  @ViewChild('grid') grid: Issue8Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod4Service: Project8Mod4Service,
    private category8Mod4Service: Category8Mod4Service,
    private status8Mod4Service: Status8Mod4Service,
    private severity8Mod4Service: Severity8Mod4Service,
    private issue8Mod4Service: Issue8Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue8Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod4;
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
    this.router.navigate(['/mod4/issue8-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod4 = items;
      });

    this.category8Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod4 = items;
      });

    this.status8Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod4 = items;
      });

    this.severity8Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod4 = items;
      });
  }

}
