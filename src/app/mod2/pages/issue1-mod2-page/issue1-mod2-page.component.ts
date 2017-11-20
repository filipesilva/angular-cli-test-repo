import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod2GridComponent } from './components/issue1-mod2-grid/issue1-mod2-grid.component';
import { Issue1Mod2 } from './../../models/issue1-mod2';

import { Project1Mod2Service } from './../../services/project1-mod2.service';
import { Category1Mod2Service } from './../../services/category1-mod2.service';
import { Status1Mod2Service } from './../../services/status1-mod2.service';
import { Severity1Mod2Service } from './../../services/severity1-mod2.service';
import { Issue1Mod2Service } from './../../services/issue1-mod2.service';

@Component({
  selector: 'app-mod2-issue1-mod2-page',
  templateUrl: './issue1-mod2-page.component.html',
  providers: [
    Project1Mod2Service,
    Category1Mod2Service,
    Status1Mod2Service,
    Severity1Mod2Service,
    Issue1Mod2Service
  ]
})
export class Issue1Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod2;

  @ViewChild('grid') grid: Issue1Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod2Service: Project1Mod2Service,
    private category1Mod2Service: Category1Mod2Service,
    private status1Mod2Service: Status1Mod2Service,
    private severity1Mod2Service: Severity1Mod2Service,
    private issue1Mod2Service: Issue1Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue1Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod2;
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
    this.router.navigate(['/mod2/issue1-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod2 = items;
      });

    this.category1Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod2 = items;
      });

    this.status1Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod2 = items;
      });

    this.severity1Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod2 = items;
      });
  }

}
