import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod6GridComponent } from './components/issue6-mod6-grid/issue6-mod6-grid.component';
import { Issue6Mod6 } from './../../models/issue6-mod6';

import { Project6Mod6Service } from './../../services/project6-mod6.service';
import { Category6Mod6Service } from './../../services/category6-mod6.service';
import { Status6Mod6Service } from './../../services/status6-mod6.service';
import { Severity6Mod6Service } from './../../services/severity6-mod6.service';
import { Issue6Mod6Service } from './../../services/issue6-mod6.service';

@Component({
  selector: 'app-mod6-issue6-mod6-page',
  templateUrl: './issue6-mod6-page.component.html',
  providers: [
    Project6Mod6Service,
    Category6Mod6Service,
    Status6Mod6Service,
    Severity6Mod6Service,
    Issue6Mod6Service
  ]
})
export class Issue6Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod6;

  @ViewChild('grid') grid: Issue6Mod6GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod6Service: Project6Mod6Service,
    private category6Mod6Service: Category6Mod6Service,
    private status6Mod6Service: Status6Mod6Service,
    private severity6Mod6Service: Severity6Mod6Service,
    private issue6Mod6Service: Issue6Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.issue6Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod6;
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
    this.router.navigate(['/mod6/issue6-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod6 = items;
      });

    this.category6Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod6 = items;
      });

    this.status6Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod6 = items;
      });

    this.severity6Mod6Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod6 = items;
      });
  }

}
