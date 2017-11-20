import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod5GridComponent } from './components/issue1-mod5-grid/issue1-mod5-grid.component';
import { Issue1Mod5 } from './../../models/issue1-mod5';

import { Project1Mod5Service } from './../../services/project1-mod5.service';
import { Category1Mod5Service } from './../../services/category1-mod5.service';
import { Status1Mod5Service } from './../../services/status1-mod5.service';
import { Severity1Mod5Service } from './../../services/severity1-mod5.service';
import { Issue1Mod5Service } from './../../services/issue1-mod5.service';

@Component({
  selector: 'app-mod5-issue1-mod5-page',
  templateUrl: './issue1-mod5-page.component.html',
  providers: [
    Project1Mod5Service,
    Category1Mod5Service,
    Status1Mod5Service,
    Severity1Mod5Service,
    Issue1Mod5Service
  ]
})
export class Issue1Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod5;

  @ViewChild('grid') grid: Issue1Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod5Service: Project1Mod5Service,
    private category1Mod5Service: Category1Mod5Service,
    private status1Mod5Service: Status1Mod5Service,
    private severity1Mod5Service: Severity1Mod5Service,
    private issue1Mod5Service: Issue1Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue1Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod5;
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
    this.router.navigate(['/mod5/issue1-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod5 = items;
      });

    this.category1Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod5 = items;
      });

    this.status1Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod5 = items;
      });

    this.severity1Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod5 = items;
      });
  }

}
