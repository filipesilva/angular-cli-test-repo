import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod8GridComponent } from './components/issue6-mod8-grid/issue6-mod8-grid.component';
import { Issue6Mod8 } from './../../models/issue6-mod8';

import { Project6Mod8Service } from './../../services/project6-mod8.service';
import { Category6Mod8Service } from './../../services/category6-mod8.service';
import { Status6Mod8Service } from './../../services/status6-mod8.service';
import { Severity6Mod8Service } from './../../services/severity6-mod8.service';
import { Issue6Mod8Service } from './../../services/issue6-mod8.service';

@Component({
  selector: 'app-mod8-issue6-mod8-page',
  templateUrl: './issue6-mod8-page.component.html',
  providers: [
    Project6Mod8Service,
    Category6Mod8Service,
    Status6Mod8Service,
    Severity6Mod8Service,
    Issue6Mod8Service
  ]
})
export class Issue6Mod8PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod8;

  @ViewChild('grid') grid: Issue6Mod8GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod8Service: Project6Mod8Service,
    private category6Mod8Service: Category6Mod8Service,
    private status6Mod8Service: Status6Mod8Service,
    private severity6Mod8Service: Severity6Mod8Service,
    private issue6Mod8Service: Issue6Mod8Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod8.issue6Mod8.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod8;
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
    this.router.navigate(['/mod8/issue6-mod8', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod8Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod8 = items;
      });

    this.category6Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod8 = items;
      });

    this.status6Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod8 = items;
      });

    this.severity6Mod8Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod8 = items;
      });
  }

}
