import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod4GridComponent } from './components/issue5-mod4-grid/issue5-mod4-grid.component';
import { Issue5Mod4 } from './../../models/issue5-mod4';

import { Project5Mod4Service } from './../../services/project5-mod4.service';
import { Category5Mod4Service } from './../../services/category5-mod4.service';
import { Status5Mod4Service } from './../../services/status5-mod4.service';
import { Severity5Mod4Service } from './../../services/severity5-mod4.service';
import { Issue5Mod4Service } from './../../services/issue5-mod4.service';

@Component({
  selector: 'app-mod4-issue5-mod4-page',
  templateUrl: './issue5-mod4-page.component.html',
  providers: [
    Project5Mod4Service,
    Category5Mod4Service,
    Status5Mod4Service,
    Severity5Mod4Service,
    Issue5Mod4Service
  ]
})
export class Issue5Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod4;

  @ViewChild('grid') grid: Issue5Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod4Service: Project5Mod4Service,
    private category5Mod4Service: Category5Mod4Service,
    private status5Mod4Service: Status5Mod4Service,
    private severity5Mod4Service: Severity5Mod4Service,
    private issue5Mod4Service: Issue5Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue5Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod4;
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
    this.router.navigate(['/mod4/issue5-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod4 = items;
      });

    this.category5Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod4 = items;
      });

    this.status5Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod4 = items;
      });

    this.severity5Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod4 = items;
      });
  }

}
