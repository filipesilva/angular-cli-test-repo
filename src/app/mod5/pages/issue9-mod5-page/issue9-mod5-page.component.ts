import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod5GridComponent } from './components/issue9-mod5-grid/issue9-mod5-grid.component';
import { Issue9Mod5 } from './../../models/issue9-mod5';

import { Project9Mod5Service } from './../../services/project9-mod5.service';
import { Category9Mod5Service } from './../../services/category9-mod5.service';
import { Status9Mod5Service } from './../../services/status9-mod5.service';
import { Severity9Mod5Service } from './../../services/severity9-mod5.service';
import { Issue9Mod5Service } from './../../services/issue9-mod5.service';

@Component({
  selector: 'app-mod5-issue9-mod5-page',
  templateUrl: './issue9-mod5-page.component.html',
  providers: [
    Project9Mod5Service,
    Category9Mod5Service,
    Status9Mod5Service,
    Severity9Mod5Service,
    Issue9Mod5Service
  ]
})
export class Issue9Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod5;

  @ViewChild('grid') grid: Issue9Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod5Service: Project9Mod5Service,
    private category9Mod5Service: Category9Mod5Service,
    private status9Mod5Service: Status9Mod5Service,
    private severity9Mod5Service: Severity9Mod5Service,
    private issue9Mod5Service: Issue9Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue9Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod5;
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
    this.router.navigate(['/mod5/issue9-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod5 = items;
      });

    this.category9Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod5 = items;
      });

    this.status9Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod5 = items;
      });

    this.severity9Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod5 = items;
      });
  }

}
