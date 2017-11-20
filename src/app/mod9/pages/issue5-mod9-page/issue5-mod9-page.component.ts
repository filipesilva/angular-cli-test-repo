import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod9GridComponent } from './components/issue5-mod9-grid/issue5-mod9-grid.component';
import { Issue5Mod9 } from './../../models/issue5-mod9';

import { Project5Mod9Service } from './../../services/project5-mod9.service';
import { Category5Mod9Service } from './../../services/category5-mod9.service';
import { Status5Mod9Service } from './../../services/status5-mod9.service';
import { Severity5Mod9Service } from './../../services/severity5-mod9.service';
import { Issue5Mod9Service } from './../../services/issue5-mod9.service';

@Component({
  selector: 'app-mod9-issue5-mod9-page',
  templateUrl: './issue5-mod9-page.component.html',
  providers: [
    Project5Mod9Service,
    Category5Mod9Service,
    Status5Mod9Service,
    Severity5Mod9Service,
    Issue5Mod9Service
  ]
})
export class Issue5Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod9;

  @ViewChild('grid') grid: Issue5Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod9Service: Project5Mod9Service,
    private category5Mod9Service: Category5Mod9Service,
    private status5Mod9Service: Status5Mod9Service,
    private severity5Mod9Service: Severity5Mod9Service,
    private issue5Mod9Service: Issue5Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue5Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod9;
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
    this.router.navigate(['/mod9/issue5-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod9 = items;
      });

    this.category5Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod9 = items;
      });

    this.status5Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod9 = items;
      });

    this.severity5Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod9 = items;
      });
  }

}
