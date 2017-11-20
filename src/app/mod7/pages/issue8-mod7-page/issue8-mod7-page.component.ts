import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod7GridComponent } from './components/issue8-mod7-grid/issue8-mod7-grid.component';
import { Issue8Mod7 } from './../../models/issue8-mod7';

import { Project8Mod7Service } from './../../services/project8-mod7.service';
import { Category8Mod7Service } from './../../services/category8-mod7.service';
import { Status8Mod7Service } from './../../services/status8-mod7.service';
import { Severity8Mod7Service } from './../../services/severity8-mod7.service';
import { Issue8Mod7Service } from './../../services/issue8-mod7.service';

@Component({
  selector: 'app-mod7-issue8-mod7-page',
  templateUrl: './issue8-mod7-page.component.html',
  providers: [
    Project8Mod7Service,
    Category8Mod7Service,
    Status8Mod7Service,
    Severity8Mod7Service,
    Issue8Mod7Service
  ]
})
export class Issue8Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod7;

  @ViewChild('grid') grid: Issue8Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod7Service: Project8Mod7Service,
    private category8Mod7Service: Category8Mod7Service,
    private status8Mod7Service: Status8Mod7Service,
    private severity8Mod7Service: Severity8Mod7Service,
    private issue8Mod7Service: Issue8Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue8Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod7;
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
    this.router.navigate(['/mod7/issue8-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod7 = items;
      });

    this.category8Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod7 = items;
      });

    this.status8Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod7 = items;
      });

    this.severity8Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod7 = items;
      });
  }

}
