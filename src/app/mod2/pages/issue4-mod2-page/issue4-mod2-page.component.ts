import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod2GridComponent } from './components/issue4-mod2-grid/issue4-mod2-grid.component';
import { Issue4Mod2 } from './../../models/issue4-mod2';

import { Project4Mod2Service } from './../../services/project4-mod2.service';
import { Category4Mod2Service } from './../../services/category4-mod2.service';
import { Status4Mod2Service } from './../../services/status4-mod2.service';
import { Severity4Mod2Service } from './../../services/severity4-mod2.service';
import { Issue4Mod2Service } from './../../services/issue4-mod2.service';

@Component({
  selector: 'app-mod2-issue4-mod2-page',
  templateUrl: './issue4-mod2-page.component.html',
  providers: [
    Project4Mod2Service,
    Category4Mod2Service,
    Status4Mod2Service,
    Severity4Mod2Service,
    Issue4Mod2Service
  ]
})
export class Issue4Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod2;

  @ViewChild('grid') grid: Issue4Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod2Service: Project4Mod2Service,
    private category4Mod2Service: Category4Mod2Service,
    private status4Mod2Service: Status4Mod2Service,
    private severity4Mod2Service: Severity4Mod2Service,
    private issue4Mod2Service: Issue4Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue4Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod2;
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
    this.router.navigate(['/mod2/issue4-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod2 = items;
      });

    this.category4Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod2 = items;
      });

    this.status4Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod2 = items;
      });

    this.severity4Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod2 = items;
      });
  }

}
