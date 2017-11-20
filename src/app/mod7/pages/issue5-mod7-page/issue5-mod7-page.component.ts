import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod7GridComponent } from './components/issue5-mod7-grid/issue5-mod7-grid.component';
import { Issue5Mod7 } from './../../models/issue5-mod7';

import { Project5Mod7Service } from './../../services/project5-mod7.service';
import { Category5Mod7Service } from './../../services/category5-mod7.service';
import { Status5Mod7Service } from './../../services/status5-mod7.service';
import { Severity5Mod7Service } from './../../services/severity5-mod7.service';
import { Issue5Mod7Service } from './../../services/issue5-mod7.service';

@Component({
  selector: 'app-mod7-issue5-mod7-page',
  templateUrl: './issue5-mod7-page.component.html',
  providers: [
    Project5Mod7Service,
    Category5Mod7Service,
    Status5Mod7Service,
    Severity5Mod7Service,
    Issue5Mod7Service
  ]
})
export class Issue5Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod7;

  @ViewChild('grid') grid: Issue5Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod7Service: Project5Mod7Service,
    private category5Mod7Service: Category5Mod7Service,
    private status5Mod7Service: Status5Mod7Service,
    private severity5Mod7Service: Severity5Mod7Service,
    private issue5Mod7Service: Issue5Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue5Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod7;
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
    this.router.navigate(['/mod7/issue5-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod7 = items;
      });

    this.category5Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod7 = items;
      });

    this.status5Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod7 = items;
      });

    this.severity5Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod7 = items;
      });
  }

}
