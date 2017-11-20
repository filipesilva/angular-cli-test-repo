import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod4GridComponent } from './components/issue2-mod4-grid/issue2-mod4-grid.component';
import { Issue2Mod4 } from './../../models/issue2-mod4';

import { Project2Mod4Service } from './../../services/project2-mod4.service';
import { Category2Mod4Service } from './../../services/category2-mod4.service';
import { Status2Mod4Service } from './../../services/status2-mod4.service';
import { Severity2Mod4Service } from './../../services/severity2-mod4.service';
import { Issue2Mod4Service } from './../../services/issue2-mod4.service';

@Component({
  selector: 'app-mod4-issue2-mod4-page',
  templateUrl: './issue2-mod4-page.component.html',
  providers: [
    Project2Mod4Service,
    Category2Mod4Service,
    Status2Mod4Service,
    Severity2Mod4Service,
    Issue2Mod4Service
  ]
})
export class Issue2Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod4;

  @ViewChild('grid') grid: Issue2Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod4Service: Project2Mod4Service,
    private category2Mod4Service: Category2Mod4Service,
    private status2Mod4Service: Status2Mod4Service,
    private severity2Mod4Service: Severity2Mod4Service,
    private issue2Mod4Service: Issue2Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue2Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod4;
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
    this.router.navigate(['/mod4/issue2-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod4 = items;
      });

    this.category2Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod4 = items;
      });

    this.status2Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod4 = items;
      });

    this.severity2Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod4 = items;
      });
  }

}
