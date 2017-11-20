import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod6GridComponent } from './components/issue2-mod6-grid/issue2-mod6-grid.component';
import { Issue2Mod6 } from './../../models/issue2-mod6';

import { Project2Mod6Service } from './../../services/project2-mod6.service';
import { Category2Mod6Service } from './../../services/category2-mod6.service';
import { Status2Mod6Service } from './../../services/status2-mod6.service';
import { Severity2Mod6Service } from './../../services/severity2-mod6.service';
import { Issue2Mod6Service } from './../../services/issue2-mod6.service';

@Component({
  selector: 'app-mod6-issue2-mod6-page',
  templateUrl: './issue2-mod6-page.component.html',
  providers: [
    Project2Mod6Service,
    Category2Mod6Service,
    Status2Mod6Service,
    Severity2Mod6Service,
    Issue2Mod6Service
  ]
})
export class Issue2Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod6;

  @ViewChild('grid') grid: Issue2Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod6Service: Project2Mod6Service,
    private category2Mod6Service: Category2Mod6Service,
    private status2Mod6Service: Status2Mod6Service,
    private severity2Mod6Service: Severity2Mod6Service,
    private issue2Mod6Service: Issue2Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue2Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod6;
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
    this.router.navigate(['/mod6/issue2-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod6 = items;
      });

    this.category2Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod6 = items;
      });

    this.status2Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod6 = items;
      });

    this.severity2Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod6 = items;
      });
  }

}
