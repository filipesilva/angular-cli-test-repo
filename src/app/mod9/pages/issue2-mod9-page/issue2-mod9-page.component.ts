import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod9GridComponent } from './components/issue2-mod9-grid/issue2-mod9-grid.component';
import { Issue2Mod9 } from './../../models/issue2-mod9';

import { Project2Mod9Service } from './../../services/project2-mod9.service';
import { Category2Mod9Service } from './../../services/category2-mod9.service';
import { Status2Mod9Service } from './../../services/status2-mod9.service';
import { Severity2Mod9Service } from './../../services/severity2-mod9.service';
import { Issue2Mod9Service } from './../../services/issue2-mod9.service';

@Component({
  selector: 'app-mod9-issue2-mod9-page',
  templateUrl: './issue2-mod9-page.component.html',
  providers: [
    Project2Mod9Service,
    Category2Mod9Service,
    Status2Mod9Service,
    Severity2Mod9Service,
    Issue2Mod9Service
  ]
})
export class Issue2Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod9;

  @ViewChild('grid') grid: Issue2Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod9Service: Project2Mod9Service,
    private category2Mod9Service: Category2Mod9Service,
    private status2Mod9Service: Status2Mod9Service,
    private severity2Mod9Service: Severity2Mod9Service,
    private issue2Mod9Service: Issue2Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue2Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod9;
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
    this.router.navigate(['/mod9/issue2-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod9 = items;
      });

    this.category2Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod9 = items;
      });

    this.status2Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod9 = items;
      });

    this.severity2Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod9 = items;
      });
  }

}
