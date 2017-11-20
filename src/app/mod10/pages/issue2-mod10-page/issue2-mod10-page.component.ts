import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod10GridComponent } from './components/issue2-mod10-grid/issue2-mod10-grid.component';
import { Issue2Mod10 } from './../../models/issue2-mod10';

import { Project2Mod10Service } from './../../services/project2-mod10.service';
import { Category2Mod10Service } from './../../services/category2-mod10.service';
import { Status2Mod10Service } from './../../services/status2-mod10.service';
import { Severity2Mod10Service } from './../../services/severity2-mod10.service';
import { Issue2Mod10Service } from './../../services/issue2-mod10.service';

@Component({
  selector: 'app-mod10-issue2-mod10-page',
  templateUrl: './issue2-mod10-page.component.html',
  providers: [
    Project2Mod10Service,
    Category2Mod10Service,
    Status2Mod10Service,
    Severity2Mod10Service,
    Issue2Mod10Service
  ]
})
export class Issue2Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod10;

  @ViewChild('grid') grid: Issue2Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod10Service: Project2Mod10Service,
    private category2Mod10Service: Category2Mod10Service,
    private status2Mod10Service: Status2Mod10Service,
    private severity2Mod10Service: Severity2Mod10Service,
    private issue2Mod10Service: Issue2Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue2Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod10;
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
    this.router.navigate(['/mod10/issue2-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod10 = items;
      });

    this.category2Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod10 = items;
      });

    this.status2Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod10 = items;
      });

    this.severity2Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod10 = items;
      });
  }

}
