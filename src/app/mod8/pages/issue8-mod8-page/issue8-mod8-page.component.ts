import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod8GridComponent } from './components/issue8-mod8-grid/issue8-mod8-grid.component';
import { Issue8Mod8 } from './../../models/issue8-mod8';

import { Project8Mod8Service } from './../../services/project8-mod8.service';
import { Category8Mod8Service } from './../../services/category8-mod8.service';
import { Status8Mod8Service } from './../../services/status8-mod8.service';
import { Severity8Mod8Service } from './../../services/severity8-mod8.service';
import { Issue8Mod8Service } from './../../services/issue8-mod8.service';

@Component({
  selector: 'app-mod8-issue8-mod8-page',
  templateUrl: './issue8-mod8-page.component.html',
  providers: [
    Project8Mod8Service,
    Category8Mod8Service,
    Status8Mod8Service,
    Severity8Mod8Service,
    Issue8Mod8Service
  ]
})
export class Issue8Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod8;

  @ViewChild('grid') grid: Issue8Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod8Service: Project8Mod8Service,
    private category8Mod8Service: Category8Mod8Service,
    private status8Mod8Service: Status8Mod8Service,
    private severity8Mod8Service: Severity8Mod8Service,
    private issue8Mod8Service: Issue8Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue8Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod8;
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
    this.router.navigate(['/mod8/issue8-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod8 = items;
      });

    this.category8Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod8 = items;
      });

    this.status8Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod8 = items;
      });

    this.severity8Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod8 = items;
      });
  }

}
