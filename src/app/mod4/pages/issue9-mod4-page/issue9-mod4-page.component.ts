import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod4GridComponent } from './components/issue9-mod4-grid/issue9-mod4-grid.component';
import { Issue9Mod4 } from './../../models/issue9-mod4';

import { Project9Mod4Service } from './../../services/project9-mod4.service';
import { Category9Mod4Service } from './../../services/category9-mod4.service';
import { Status9Mod4Service } from './../../services/status9-mod4.service';
import { Severity9Mod4Service } from './../../services/severity9-mod4.service';
import { Issue9Mod4Service } from './../../services/issue9-mod4.service';

@Component({
  selector: 'app-mod4-issue9-mod4-page',
  templateUrl: './issue9-mod4-page.component.html',
  providers: [
    Project9Mod4Service,
    Category9Mod4Service,
    Status9Mod4Service,
    Severity9Mod4Service,
    Issue9Mod4Service
  ]
})
export class Issue9Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod4;

  @ViewChild('grid') grid: Issue9Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod4Service: Project9Mod4Service,
    private category9Mod4Service: Category9Mod4Service,
    private status9Mod4Service: Status9Mod4Service,
    private severity9Mod4Service: Severity9Mod4Service,
    private issue9Mod4Service: Issue9Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue9Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod4;
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
    this.router.navigate(['/mod4/issue9-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod4 = items;
      });

    this.category9Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod4 = items;
      });

    this.status9Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod4 = items;
      });

    this.severity9Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod4 = items;
      });
  }

}
