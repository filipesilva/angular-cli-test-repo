import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod8GridComponent } from './components/issue1-mod8-grid/issue1-mod8-grid.component';
import { Issue1Mod8 } from './../../models/issue1-mod8';

import { Project1Mod8Service } from './../../services/project1-mod8.service';
import { Category1Mod8Service } from './../../services/category1-mod8.service';
import { Status1Mod8Service } from './../../services/status1-mod8.service';
import { Severity1Mod8Service } from './../../services/severity1-mod8.service';
import { Issue1Mod8Service } from './../../services/issue1-mod8.service';

@Component({
  selector: 'app-mod8-issue1-mod8-page',
  templateUrl: './issue1-mod8-page.component.html',
  providers: [
    Project1Mod8Service,
    Category1Mod8Service,
    Status1Mod8Service,
    Severity1Mod8Service,
    Issue1Mod8Service
  ]
})
export class Issue1Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod8;

  @ViewChild('grid') grid: Issue1Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod8Service: Project1Mod8Service,
    private category1Mod8Service: Category1Mod8Service,
    private status1Mod8Service: Status1Mod8Service,
    private severity1Mod8Service: Severity1Mod8Service,
    private issue1Mod8Service: Issue1Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue1Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod8;
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
    this.router.navigate(['/mod8/issue1-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod8 = items;
      });

    this.category1Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod8 = items;
      });

    this.status1Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod8 = items;
      });

    this.severity1Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod8 = items;
      });
  }

}
