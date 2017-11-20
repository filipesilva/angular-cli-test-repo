import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod2GridComponent } from './components/issue2-mod2-grid/issue2-mod2-grid.component';
import { Issue2Mod2 } from './../../models/issue2-mod2';

import { Project2Mod2Service } from './../../services/project2-mod2.service';
import { Category2Mod2Service } from './../../services/category2-mod2.service';
import { Status2Mod2Service } from './../../services/status2-mod2.service';
import { Severity2Mod2Service } from './../../services/severity2-mod2.service';
import { Issue2Mod2Service } from './../../services/issue2-mod2.service';

@Component({
  selector: 'app-mod2-issue2-mod2-page',
  templateUrl: './issue2-mod2-page.component.html',
  providers: [
    Project2Mod2Service,
    Category2Mod2Service,
    Status2Mod2Service,
    Severity2Mod2Service,
    Issue2Mod2Service
  ]
})
export class Issue2Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod2;

  @ViewChild('grid') grid: Issue2Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod2Service: Project2Mod2Service,
    private category2Mod2Service: Category2Mod2Service,
    private status2Mod2Service: Status2Mod2Service,
    private severity2Mod2Service: Severity2Mod2Service,
    private issue2Mod2Service: Issue2Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue2Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod2;
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
    this.router.navigate(['/mod2/issue2-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod2 = items;
      });

    this.category2Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod2 = items;
      });

    this.status2Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod2 = items;
      });

    this.severity2Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod2 = items;
      });
  }

}
