import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod2GridComponent } from './components/issue5-mod2-grid/issue5-mod2-grid.component';
import { Issue5Mod2 } from './../../models/issue5-mod2';

import { Project5Mod2Service } from './../../services/project5-mod2.service';
import { Category5Mod2Service } from './../../services/category5-mod2.service';
import { Status5Mod2Service } from './../../services/status5-mod2.service';
import { Severity5Mod2Service } from './../../services/severity5-mod2.service';
import { Issue5Mod2Service } from './../../services/issue5-mod2.service';

@Component({
  selector: 'app-mod2-issue5-mod2-page',
  templateUrl: './issue5-mod2-page.component.html',
  providers: [
    Project5Mod2Service,
    Category5Mod2Service,
    Status5Mod2Service,
    Severity5Mod2Service,
    Issue5Mod2Service
  ]
})
export class Issue5Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod2;

  @ViewChild('grid') grid: Issue5Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod2Service: Project5Mod2Service,
    private category5Mod2Service: Category5Mod2Service,
    private status5Mod2Service: Status5Mod2Service,
    private severity5Mod2Service: Severity5Mod2Service,
    private issue5Mod2Service: Issue5Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue5Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod2;
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
    this.router.navigate(['/mod2/issue5-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod2 = items;
      });

    this.category5Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod2 = items;
      });

    this.status5Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod2 = items;
      });

    this.severity5Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod2 = items;
      });
  }

}
