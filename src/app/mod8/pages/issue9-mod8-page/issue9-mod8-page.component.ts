import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod8GridComponent } from './components/issue9-mod8-grid/issue9-mod8-grid.component';
import { Issue9Mod8 } from './../../models/issue9-mod8';

import { Project9Mod8Service } from './../../services/project9-mod8.service';
import { Category9Mod8Service } from './../../services/category9-mod8.service';
import { Status9Mod8Service } from './../../services/status9-mod8.service';
import { Severity9Mod8Service } from './../../services/severity9-mod8.service';
import { Issue9Mod8Service } from './../../services/issue9-mod8.service';

@Component({
  selector: 'app-mod8-issue9-mod8-page',
  templateUrl: './issue9-mod8-page.component.html',
  providers: [
    Project9Mod8Service,
    Category9Mod8Service,
    Status9Mod8Service,
    Severity9Mod8Service,
    Issue9Mod8Service
  ]
})
export class Issue9Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod8;

  @ViewChild('grid') grid: Issue9Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod8Service: Project9Mod8Service,
    private category9Mod8Service: Category9Mod8Service,
    private status9Mod8Service: Status9Mod8Service,
    private severity9Mod8Service: Severity9Mod8Service,
    private issue9Mod8Service: Issue9Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue9Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod8;
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
    this.router.navigate(['/mod8/issue9-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod8 = items;
      });

    this.category9Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod8 = items;
      });

    this.status9Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod8 = items;
      });

    this.severity9Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod8 = items;
      });
  }

}
