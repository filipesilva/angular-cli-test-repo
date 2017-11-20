import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod8GridComponent } from './components/issue2-mod8-grid/issue2-mod8-grid.component';
import { Issue2Mod8 } from './../../models/issue2-mod8';

import { Project2Mod8Service } from './../../services/project2-mod8.service';
import { Category2Mod8Service } from './../../services/category2-mod8.service';
import { Status2Mod8Service } from './../../services/status2-mod8.service';
import { Severity2Mod8Service } from './../../services/severity2-mod8.service';
import { Issue2Mod8Service } from './../../services/issue2-mod8.service';

@Component({
  selector: 'app-mod8-issue2-mod8-page',
  templateUrl: './issue2-mod8-page.component.html',
  providers: [
    Project2Mod8Service,
    Category2Mod8Service,
    Status2Mod8Service,
    Severity2Mod8Service,
    Issue2Mod8Service
  ]
})
export class Issue2Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod8;

  @ViewChild('grid') grid: Issue2Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod8Service: Project2Mod8Service,
    private category2Mod8Service: Category2Mod8Service,
    private status2Mod8Service: Status2Mod8Service,
    private severity2Mod8Service: Severity2Mod8Service,
    private issue2Mod8Service: Issue2Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue2Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod8;
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
    this.router.navigate(['/mod8/issue2-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod8 = items;
      });

    this.category2Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod8 = items;
      });

    this.status2Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod8 = items;
      });

    this.severity2Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod8 = items;
      });
  }

}
