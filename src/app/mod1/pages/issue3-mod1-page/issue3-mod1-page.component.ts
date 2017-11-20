import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod1GridComponent } from './components/issue3-mod1-grid/issue3-mod1-grid.component';
import { Issue3Mod1 } from './../../models/issue3-mod1';

import { Project3Mod1Service } from './../../services/project3-mod1.service';
import { Category3Mod1Service } from './../../services/category3-mod1.service';
import { Status3Mod1Service } from './../../services/status3-mod1.service';
import { Severity3Mod1Service } from './../../services/severity3-mod1.service';
import { Issue3Mod1Service } from './../../services/issue3-mod1.service';

@Component({
  selector: 'app-mod1-issue3-mod1-page',
  templateUrl: './issue3-mod1-page.component.html',
  providers: [
    Project3Mod1Service,
    Category3Mod1Service,
    Status3Mod1Service,
    Severity3Mod1Service,
    Issue3Mod1Service
  ]
})
export class Issue3Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod1;

  @ViewChild('grid') grid: Issue3Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod1Service: Project3Mod1Service,
    private category3Mod1Service: Category3Mod1Service,
    private status3Mod1Service: Status3Mod1Service,
    private severity3Mod1Service: Severity3Mod1Service,
    private issue3Mod1Service: Issue3Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue3Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod1;
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
    this.router.navigate(['/mod1/issue3-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod1 = items;
      });

    this.category3Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod1 = items;
      });

    this.status3Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod1 = items;
      });

    this.severity3Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod1 = items;
      });
  }

}
