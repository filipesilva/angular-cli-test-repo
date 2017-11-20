import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod5GridComponent } from './components/issue8-mod5-grid/issue8-mod5-grid.component';
import { Issue8Mod5 } from './../../models/issue8-mod5';

import { Project8Mod5Service } from './../../services/project8-mod5.service';
import { Category8Mod5Service } from './../../services/category8-mod5.service';
import { Status8Mod5Service } from './../../services/status8-mod5.service';
import { Severity8Mod5Service } from './../../services/severity8-mod5.service';
import { Issue8Mod5Service } from './../../services/issue8-mod5.service';

@Component({
  selector: 'app-mod5-issue8-mod5-page',
  templateUrl: './issue8-mod5-page.component.html',
  providers: [
    Project8Mod5Service,
    Category8Mod5Service,
    Status8Mod5Service,
    Severity8Mod5Service,
    Issue8Mod5Service
  ]
})
export class Issue8Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod5;

  @ViewChild('grid') grid: Issue8Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod5Service: Project8Mod5Service,
    private category8Mod5Service: Category8Mod5Service,
    private status8Mod5Service: Status8Mod5Service,
    private severity8Mod5Service: Severity8Mod5Service,
    private issue8Mod5Service: Issue8Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue8Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod5;
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
    this.router.navigate(['/mod5/issue8-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod5 = items;
      });

    this.category8Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod5 = items;
      });

    this.status8Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod5 = items;
      });

    this.severity8Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod5 = items;
      });
  }

}
