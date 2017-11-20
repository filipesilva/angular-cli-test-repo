import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod4GridComponent } from './components/issue1-mod4-grid/issue1-mod4-grid.component';
import { Issue1Mod4 } from './../../models/issue1-mod4';

import { Project1Mod4Service } from './../../services/project1-mod4.service';
import { Category1Mod4Service } from './../../services/category1-mod4.service';
import { Status1Mod4Service } from './../../services/status1-mod4.service';
import { Severity1Mod4Service } from './../../services/severity1-mod4.service';
import { Issue1Mod4Service } from './../../services/issue1-mod4.service';

@Component({
  selector: 'app-mod4-issue1-mod4-page',
  templateUrl: './issue1-mod4-page.component.html',
  providers: [
    Project1Mod4Service,
    Category1Mod4Service,
    Status1Mod4Service,
    Severity1Mod4Service,
    Issue1Mod4Service
  ]
})
export class Issue1Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod4;

  @ViewChild('grid') grid: Issue1Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod4Service: Project1Mod4Service,
    private category1Mod4Service: Category1Mod4Service,
    private status1Mod4Service: Status1Mod4Service,
    private severity1Mod4Service: Severity1Mod4Service,
    private issue1Mod4Service: Issue1Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue1Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod4;
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
    this.router.navigate(['/mod4/issue1-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod4 = items;
      });

    this.category1Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod4 = items;
      });

    this.status1Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod4 = items;
      });

    this.severity1Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod4 = items;
      });
  }

}
