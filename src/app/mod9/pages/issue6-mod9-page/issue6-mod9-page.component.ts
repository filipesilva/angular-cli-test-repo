import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod9GridComponent } from './components/issue6-mod9-grid/issue6-mod9-grid.component';
import { Issue6Mod9 } from './../../models/issue6-mod9';

import { Project6Mod9Service } from './../../services/project6-mod9.service';
import { Category6Mod9Service } from './../../services/category6-mod9.service';
import { Status6Mod9Service } from './../../services/status6-mod9.service';
import { Severity6Mod9Service } from './../../services/severity6-mod9.service';
import { Issue6Mod9Service } from './../../services/issue6-mod9.service';

@Component({
  selector: 'app-mod9-issue6-mod9-page',
  templateUrl: './issue6-mod9-page.component.html',
  providers: [
    Project6Mod9Service,
    Category6Mod9Service,
    Status6Mod9Service,
    Severity6Mod9Service,
    Issue6Mod9Service
  ]
})
export class Issue6Mod9PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod9;

  @ViewChild('grid') grid: Issue6Mod9GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod9Service: Project6Mod9Service,
    private category6Mod9Service: Category6Mod9Service,
    private status6Mod9Service: Status6Mod9Service,
    private severity6Mod9Service: Severity6Mod9Service,
    private issue6Mod9Service: Issue6Mod9Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod9.issue6Mod9.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod9;
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
    this.router.navigate(['/mod9/issue6-mod9', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod9Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod9 = items;
      });

    this.category6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod9 = items;
      });

    this.status6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod9 = items;
      });

    this.severity6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod9 = items;
      });
  }

}
