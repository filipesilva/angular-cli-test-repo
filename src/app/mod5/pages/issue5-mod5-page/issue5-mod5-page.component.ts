import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod5GridComponent } from './components/issue5-mod5-grid/issue5-mod5-grid.component';
import { Issue5Mod5 } from './../../models/issue5-mod5';

import { Project5Mod5Service } from './../../services/project5-mod5.service';
import { Category5Mod5Service } from './../../services/category5-mod5.service';
import { Status5Mod5Service } from './../../services/status5-mod5.service';
import { Severity5Mod5Service } from './../../services/severity5-mod5.service';
import { Issue5Mod5Service } from './../../services/issue5-mod5.service';

@Component({
  selector: 'app-mod5-issue5-mod5-page',
  templateUrl: './issue5-mod5-page.component.html',
  providers: [
    Project5Mod5Service,
    Category5Mod5Service,
    Status5Mod5Service,
    Severity5Mod5Service,
    Issue5Mod5Service
  ]
})
export class Issue5Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod5;

  @ViewChild('grid') grid: Issue5Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod5Service: Project5Mod5Service,
    private category5Mod5Service: Category5Mod5Service,
    private status5Mod5Service: Status5Mod5Service,
    private severity5Mod5Service: Severity5Mod5Service,
    private issue5Mod5Service: Issue5Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue5Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod5;
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
    this.router.navigate(['/mod5/issue5-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod5 = items;
      });

    this.category5Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod5 = items;
      });

    this.status5Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod5 = items;
      });

    this.severity5Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod5 = items;
      });
  }

}
