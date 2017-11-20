import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod10GridComponent } from './components/issue5-mod10-grid/issue5-mod10-grid.component';
import { Issue5Mod10 } from './../../models/issue5-mod10';

import { Project5Mod10Service } from './../../services/project5-mod10.service';
import { Category5Mod10Service } from './../../services/category5-mod10.service';
import { Status5Mod10Service } from './../../services/status5-mod10.service';
import { Severity5Mod10Service } from './../../services/severity5-mod10.service';
import { Issue5Mod10Service } from './../../services/issue5-mod10.service';

@Component({
  selector: 'app-mod10-issue5-mod10-page',
  templateUrl: './issue5-mod10-page.component.html',
  providers: [
    Project5Mod10Service,
    Category5Mod10Service,
    Status5Mod10Service,
    Severity5Mod10Service,
    Issue5Mod10Service
  ]
})
export class Issue5Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod10;

  @ViewChild('grid') grid: Issue5Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod10Service: Project5Mod10Service,
    private category5Mod10Service: Category5Mod10Service,
    private status5Mod10Service: Status5Mod10Service,
    private severity5Mod10Service: Severity5Mod10Service,
    private issue5Mod10Service: Issue5Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue5Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod10;
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
    this.router.navigate(['/mod10/issue5-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod10 = items;
      });

    this.category5Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod10 = items;
      });

    this.status5Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod10 = items;
      });

    this.severity5Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod10 = items;
      });
  }

}
