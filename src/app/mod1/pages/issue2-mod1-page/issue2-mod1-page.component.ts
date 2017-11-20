import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod1GridComponent } from './components/issue2-mod1-grid/issue2-mod1-grid.component';
import { Issue2Mod1 } from './../../models/issue2-mod1';

import { Project2Mod1Service } from './../../services/project2-mod1.service';
import { Category2Mod1Service } from './../../services/category2-mod1.service';
import { Status2Mod1Service } from './../../services/status2-mod1.service';
import { Severity2Mod1Service } from './../../services/severity2-mod1.service';
import { Issue2Mod1Service } from './../../services/issue2-mod1.service';

@Component({
  selector: 'app-mod1-issue2-mod1-page',
  templateUrl: './issue2-mod1-page.component.html',
  providers: [
    Project2Mod1Service,
    Category2Mod1Service,
    Status2Mod1Service,
    Severity2Mod1Service,
    Issue2Mod1Service
  ]
})
export class Issue2Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod1;

  @ViewChild('grid') grid: Issue2Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod1Service: Project2Mod1Service,
    private category2Mod1Service: Category2Mod1Service,
    private status2Mod1Service: Status2Mod1Service,
    private severity2Mod1Service: Severity2Mod1Service,
    private issue2Mod1Service: Issue2Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue2Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod1;
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
    this.router.navigate(['/mod1/issue2-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod1 = items;
      });

    this.category2Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod1 = items;
      });

    this.status2Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod1 = items;
      });

    this.severity2Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod1 = items;
      });
  }

}
