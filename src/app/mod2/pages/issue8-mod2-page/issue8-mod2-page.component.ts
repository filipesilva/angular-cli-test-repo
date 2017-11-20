import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod2GridComponent } from './components/issue8-mod2-grid/issue8-mod2-grid.component';
import { Issue8Mod2 } from './../../models/issue8-mod2';

import { Project8Mod2Service } from './../../services/project8-mod2.service';
import { Category8Mod2Service } from './../../services/category8-mod2.service';
import { Status8Mod2Service } from './../../services/status8-mod2.service';
import { Severity8Mod2Service } from './../../services/severity8-mod2.service';
import { Issue8Mod2Service } from './../../services/issue8-mod2.service';

@Component({
  selector: 'app-mod2-issue8-mod2-page',
  templateUrl: './issue8-mod2-page.component.html',
  providers: [
    Project8Mod2Service,
    Category8Mod2Service,
    Status8Mod2Service,
    Severity8Mod2Service,
    Issue8Mod2Service
  ]
})
export class Issue8Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod2;

  @ViewChild('grid') grid: Issue8Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod2Service: Project8Mod2Service,
    private category8Mod2Service: Category8Mod2Service,
    private status8Mod2Service: Status8Mod2Service,
    private severity8Mod2Service: Severity8Mod2Service,
    private issue8Mod2Service: Issue8Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue8Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod2;
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
    this.router.navigate(['/mod2/issue8-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod2 = items;
      });

    this.category8Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod2 = items;
      });

    this.status8Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod2 = items;
      });

    this.severity8Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod2 = items;
      });
  }

}
