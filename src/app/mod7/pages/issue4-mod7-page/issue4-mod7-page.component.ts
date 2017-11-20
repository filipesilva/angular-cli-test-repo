import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod7GridComponent } from './components/issue4-mod7-grid/issue4-mod7-grid.component';
import { Issue4Mod7 } from './../../models/issue4-mod7';

import { Project4Mod7Service } from './../../services/project4-mod7.service';
import { Category4Mod7Service } from './../../services/category4-mod7.service';
import { Status4Mod7Service } from './../../services/status4-mod7.service';
import { Severity4Mod7Service } from './../../services/severity4-mod7.service';
import { Issue4Mod7Service } from './../../services/issue4-mod7.service';

@Component({
  selector: 'app-mod7-issue4-mod7-page',
  templateUrl: './issue4-mod7-page.component.html',
  providers: [
    Project4Mod7Service,
    Category4Mod7Service,
    Status4Mod7Service,
    Severity4Mod7Service,
    Issue4Mod7Service
  ]
})
export class Issue4Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod7;

  @ViewChild('grid') grid: Issue4Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod7Service: Project4Mod7Service,
    private category4Mod7Service: Category4Mod7Service,
    private status4Mod7Service: Status4Mod7Service,
    private severity4Mod7Service: Severity4Mod7Service,
    private issue4Mod7Service: Issue4Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue4Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod7;
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
    this.router.navigate(['/mod7/issue4-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod7 = items;
      });

    this.category4Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod7 = items;
      });

    this.status4Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod7 = items;
      });

    this.severity4Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod7 = items;
      });
  }

}
