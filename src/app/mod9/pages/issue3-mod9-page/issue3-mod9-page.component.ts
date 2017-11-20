import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod9GridComponent } from './components/issue3-mod9-grid/issue3-mod9-grid.component';
import { Issue3Mod9 } from './../../models/issue3-mod9';

import { Project3Mod9Service } from './../../services/project3-mod9.service';
import { Category3Mod9Service } from './../../services/category3-mod9.service';
import { Status3Mod9Service } from './../../services/status3-mod9.service';
import { Severity3Mod9Service } from './../../services/severity3-mod9.service';
import { Issue3Mod9Service } from './../../services/issue3-mod9.service';

@Component({
  selector: 'app-mod9-issue3-mod9-page',
  templateUrl: './issue3-mod9-page.component.html',
  providers: [
    Project3Mod9Service,
    Category3Mod9Service,
    Status3Mod9Service,
    Severity3Mod9Service,
    Issue3Mod9Service
  ]
})
export class Issue3Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod9;

  @ViewChild('grid') grid: Issue3Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod9Service: Project3Mod9Service,
    private category3Mod9Service: Category3Mod9Service,
    private status3Mod9Service: Status3Mod9Service,
    private severity3Mod9Service: Severity3Mod9Service,
    private issue3Mod9Service: Issue3Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue3Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod9;
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
    this.router.navigate(['/mod9/issue3-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod9 = items;
      });

    this.category3Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod9 = items;
      });

    this.status3Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod9 = items;
      });

    this.severity3Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod9 = items;
      });
  }

}
