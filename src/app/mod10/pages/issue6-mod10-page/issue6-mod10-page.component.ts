import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod10GridComponent } from './components/issue6-mod10-grid/issue6-mod10-grid.component';
import { Issue6Mod10 } from './../../models/issue6-mod10';

import { Project6Mod10Service } from './../../services/project6-mod10.service';
import { Category6Mod10Service } from './../../services/category6-mod10.service';
import { Status6Mod10Service } from './../../services/status6-mod10.service';
import { Severity6Mod10Service } from './../../services/severity6-mod10.service';
import { Issue6Mod10Service } from './../../services/issue6-mod10.service';

@Component({
  selector: 'app-mod10-issue6-mod10-page',
  templateUrl: './issue6-mod10-page.component.html',
  providers: [
    Project6Mod10Service,
    Category6Mod10Service,
    Status6Mod10Service,
    Severity6Mod10Service,
    Issue6Mod10Service
  ]
})
export class Issue6Mod10PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod10;

  @ViewChild('grid') grid: Issue6Mod10GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod10Service: Project6Mod10Service,
    private category6Mod10Service: Category6Mod10Service,
    private status6Mod10Service: Status6Mod10Service,
    private severity6Mod10Service: Severity6Mod10Service,
    private issue6Mod10Service: Issue6Mod10Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod10.issue6Mod10.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod10;
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
    this.router.navigate(['/mod10/issue6-mod10', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod10Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod10 = items;
      });

    this.category6Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod10 = items;
      });

    this.status6Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod10 = items;
      });

    this.severity6Mod10Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod10 = items;
      });
  }

}
