import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod10GridComponent } from './components/issue3-mod10-grid/issue3-mod10-grid.component';
import { Issue3Mod10 } from './../../models/issue3-mod10';

import { Project3Mod10Service } from './../../services/project3-mod10.service';
import { Category3Mod10Service } from './../../services/category3-mod10.service';
import { Status3Mod10Service } from './../../services/status3-mod10.service';
import { Severity3Mod10Service } from './../../services/severity3-mod10.service';
import { Issue3Mod10Service } from './../../services/issue3-mod10.service';

@Component({
  selector: 'app-mod10-issue3-mod10-page',
  templateUrl: './issue3-mod10-page.component.html',
  providers: [
    Project3Mod10Service,
    Category3Mod10Service,
    Status3Mod10Service,
    Severity3Mod10Service,
    Issue3Mod10Service
  ]
})
export class Issue3Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod10;

  @ViewChild('grid') grid: Issue3Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod10Service: Project3Mod10Service,
    private category3Mod10Service: Category3Mod10Service,
    private status3Mod10Service: Status3Mod10Service,
    private severity3Mod10Service: Severity3Mod10Service,
    private issue3Mod10Service: Issue3Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue3Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod10;
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
    this.router.navigate(['/mod10/issue3-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod10 = items;
      });

    this.category3Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod10 = items;
      });

    this.status3Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod10 = items;
      });

    this.severity3Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod10 = items;
      });
  }

}
