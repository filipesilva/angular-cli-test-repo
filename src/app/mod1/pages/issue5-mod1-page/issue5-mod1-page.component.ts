import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod1GridComponent } from './components/issue5-mod1-grid/issue5-mod1-grid.component';
import { Issue5Mod1 } from './../../models/issue5-mod1';

import { Project5Mod1Service } from './../../services/project5-mod1.service';
import { Category5Mod1Service } from './../../services/category5-mod1.service';
import { Status5Mod1Service } from './../../services/status5-mod1.service';
import { Severity5Mod1Service } from './../../services/severity5-mod1.service';
import { Issue5Mod1Service } from './../../services/issue5-mod1.service';

@Component({
  selector: 'app-mod1-issue5-mod1-page',
  templateUrl: './issue5-mod1-page.component.html',
  providers: [
    Project5Mod1Service,
    Category5Mod1Service,
    Status5Mod1Service,
    Severity5Mod1Service,
    Issue5Mod1Service
  ]
})
export class Issue5Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod1;

  @ViewChild('grid') grid: Issue5Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod1Service: Project5Mod1Service,
    private category5Mod1Service: Category5Mod1Service,
    private status5Mod1Service: Status5Mod1Service,
    private severity5Mod1Service: Severity5Mod1Service,
    private issue5Mod1Service: Issue5Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue5Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod1;
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
    this.router.navigate(['/mod1/issue5-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod1 = items;
      });

    this.category5Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod1 = items;
      });

    this.status5Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod1 = items;
      });

    this.severity5Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod1 = items;
      });
  }

}
