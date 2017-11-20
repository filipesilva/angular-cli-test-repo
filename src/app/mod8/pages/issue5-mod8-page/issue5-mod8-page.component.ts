import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod8GridComponent } from './components/issue5-mod8-grid/issue5-mod8-grid.component';
import { Issue5Mod8 } from './../../models/issue5-mod8';

import { Project5Mod8Service } from './../../services/project5-mod8.service';
import { Category5Mod8Service } from './../../services/category5-mod8.service';
import { Status5Mod8Service } from './../../services/status5-mod8.service';
import { Severity5Mod8Service } from './../../services/severity5-mod8.service';
import { Issue5Mod8Service } from './../../services/issue5-mod8.service';

@Component({
  selector: 'app-mod8-issue5-mod8-page',
  templateUrl: './issue5-mod8-page.component.html',
  providers: [
    Project5Mod8Service,
    Category5Mod8Service,
    Status5Mod8Service,
    Severity5Mod8Service,
    Issue5Mod8Service
  ]
})
export class Issue5Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod8;

  @ViewChild('grid') grid: Issue5Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod8Service: Project5Mod8Service,
    private category5Mod8Service: Category5Mod8Service,
    private status5Mod8Service: Status5Mod8Service,
    private severity5Mod8Service: Severity5Mod8Service,
    private issue5Mod8Service: Issue5Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue5Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod8;
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
    this.router.navigate(['/mod8/issue5-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod8 = items;
      });

    this.category5Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod8 = items;
      });

    this.status5Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod8 = items;
      });

    this.severity5Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod8 = items;
      });
  }

}
