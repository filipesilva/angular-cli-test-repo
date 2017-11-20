import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod6GridComponent } from './components/issue3-mod6-grid/issue3-mod6-grid.component';
import { Issue3Mod6 } from './../../models/issue3-mod6';

import { Project3Mod6Service } from './../../services/project3-mod6.service';
import { Category3Mod6Service } from './../../services/category3-mod6.service';
import { Status3Mod6Service } from './../../services/status3-mod6.service';
import { Severity3Mod6Service } from './../../services/severity3-mod6.service';
import { Issue3Mod6Service } from './../../services/issue3-mod6.service';

@Component({
  selector: 'app-mod6-issue3-mod6-page',
  templateUrl: './issue3-mod6-page.component.html',
  providers: [
    Project3Mod6Service,
    Category3Mod6Service,
    Status3Mod6Service,
    Severity3Mod6Service,
    Issue3Mod6Service
  ]
})
export class Issue3Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod6;

  @ViewChild('grid') grid: Issue3Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod6Service: Project3Mod6Service,
    private category3Mod6Service: Category3Mod6Service,
    private status3Mod6Service: Status3Mod6Service,
    private severity3Mod6Service: Severity3Mod6Service,
    private issue3Mod6Service: Issue3Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue3Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod6;
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
    this.router.navigate(['/mod6/issue3-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod6 = items;
      });

    this.category3Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod6 = items;
      });

    this.status3Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod6 = items;
      });

    this.severity3Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod6 = items;
      });
  }

}
