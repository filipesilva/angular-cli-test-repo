import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod8GridComponent } from './components/issue3-mod8-grid/issue3-mod8-grid.component';
import { Issue3Mod8 } from './../../models/issue3-mod8';

import { Project3Mod8Service } from './../../services/project3-mod8.service';
import { Category3Mod8Service } from './../../services/category3-mod8.service';
import { Status3Mod8Service } from './../../services/status3-mod8.service';
import { Severity3Mod8Service } from './../../services/severity3-mod8.service';
import { Issue3Mod8Service } from './../../services/issue3-mod8.service';

@Component({
  selector: 'app-mod8-issue3-mod8-page',
  templateUrl: './issue3-mod8-page.component.html',
  providers: [
    Project3Mod8Service,
    Category3Mod8Service,
    Status3Mod8Service,
    Severity3Mod8Service,
    Issue3Mod8Service
  ]
})
export class Issue3Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod8;

  @ViewChild('grid') grid: Issue3Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod8Service: Project3Mod8Service,
    private category3Mod8Service: Category3Mod8Service,
    private status3Mod8Service: Status3Mod8Service,
    private severity3Mod8Service: Severity3Mod8Service,
    private issue3Mod8Service: Issue3Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue3Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod8;
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
    this.router.navigate(['/mod8/issue3-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod8 = items;
      });

    this.category3Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod8 = items;
      });

    this.status3Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod8 = items;
      });

    this.severity3Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod8 = items;
      });
  }

}
