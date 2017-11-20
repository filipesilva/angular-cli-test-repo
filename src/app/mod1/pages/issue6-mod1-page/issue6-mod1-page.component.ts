import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod1GridComponent } from './components/issue6-mod1-grid/issue6-mod1-grid.component';
import { Issue6Mod1 } from './../../models/issue6-mod1';

import { Project6Mod1Service } from './../../services/project6-mod1.service';
import { Category6Mod1Service } from './../../services/category6-mod1.service';
import { Status6Mod1Service } from './../../services/status6-mod1.service';
import { Severity6Mod1Service } from './../../services/severity6-mod1.service';
import { Issue6Mod1Service } from './../../services/issue6-mod1.service';

@Component({
  selector: 'app-mod1-issue6-mod1-page',
  templateUrl: './issue6-mod1-page.component.html',
  providers: [
    Project6Mod1Service,
    Category6Mod1Service,
    Status6Mod1Service,
    Severity6Mod1Service,
    Issue6Mod1Service
  ]
})
export class Issue6Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod1;

  @ViewChild('grid') grid: Issue6Mod1GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod1Service: Project6Mod1Service,
    private category6Mod1Service: Category6Mod1Service,
    private status6Mod1Service: Status6Mod1Service,
    private severity6Mod1Service: Severity6Mod1Service,
    private issue6Mod1Service: Issue6Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.issue6Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod1;
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
    this.router.navigate(['/mod1/issue6-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod1 = items;
      });

    this.category6Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod1 = items;
      });

    this.status6Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod1 = items;
      });

    this.severity6Mod1Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod1 = items;
      });
  }

}
