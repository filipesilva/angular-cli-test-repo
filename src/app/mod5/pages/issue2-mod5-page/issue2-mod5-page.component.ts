import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod5GridComponent } from './components/issue2-mod5-grid/issue2-mod5-grid.component';
import { Issue2Mod5 } from './../../models/issue2-mod5';

import { Project2Mod5Service } from './../../services/project2-mod5.service';
import { Category2Mod5Service } from './../../services/category2-mod5.service';
import { Status2Mod5Service } from './../../services/status2-mod5.service';
import { Severity2Mod5Service } from './../../services/severity2-mod5.service';
import { Issue2Mod5Service } from './../../services/issue2-mod5.service';

@Component({
  selector: 'app-mod5-issue2-mod5-page',
  templateUrl: './issue2-mod5-page.component.html',
  providers: [
    Project2Mod5Service,
    Category2Mod5Service,
    Status2Mod5Service,
    Severity2Mod5Service,
    Issue2Mod5Service
  ]
})
export class Issue2Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod5;

  @ViewChild('grid') grid: Issue2Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod5Service: Project2Mod5Service,
    private category2Mod5Service: Category2Mod5Service,
    private status2Mod5Service: Status2Mod5Service,
    private severity2Mod5Service: Severity2Mod5Service,
    private issue2Mod5Service: Issue2Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue2Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod5;
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
    this.router.navigate(['/mod5/issue2-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod5 = items;
      });

    this.category2Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod5 = items;
      });

    this.status2Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod5 = items;
      });

    this.severity2Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod5 = items;
      });
  }

}
