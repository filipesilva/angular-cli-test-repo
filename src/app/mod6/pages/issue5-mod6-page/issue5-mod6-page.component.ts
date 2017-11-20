import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod6GridComponent } from './components/issue5-mod6-grid/issue5-mod6-grid.component';
import { Issue5Mod6 } from './../../models/issue5-mod6';

import { Project5Mod6Service } from './../../services/project5-mod6.service';
import { Category5Mod6Service } from './../../services/category5-mod6.service';
import { Status5Mod6Service } from './../../services/status5-mod6.service';
import { Severity5Mod6Service } from './../../services/severity5-mod6.service';
import { Issue5Mod6Service } from './../../services/issue5-mod6.service';

@Component({
  selector: 'app-mod6-issue5-mod6-page',
  templateUrl: './issue5-mod6-page.component.html',
  providers: [
    Project5Mod6Service,
    Category5Mod6Service,
    Status5Mod6Service,
    Severity5Mod6Service,
    Issue5Mod6Service
  ]
})
export class Issue5Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod6;

  @ViewChild('grid') grid: Issue5Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod6Service: Project5Mod6Service,
    private category5Mod6Service: Category5Mod6Service,
    private status5Mod6Service: Status5Mod6Service,
    private severity5Mod6Service: Severity5Mod6Service,
    private issue5Mod6Service: Issue5Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue5Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod6;
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
    this.router.navigate(['/mod6/issue5-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod6 = items;
      });

    this.category5Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod6 = items;
      });

    this.status5Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod6 = items;
      });

    this.severity5Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod6 = items;
      });
  }

}
