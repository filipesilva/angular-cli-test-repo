import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod2GridComponent } from './components/issue9-mod2-grid/issue9-mod2-grid.component';
import { Issue9Mod2 } from './../../models/issue9-mod2';

import { Project9Mod2Service } from './../../services/project9-mod2.service';
import { Category9Mod2Service } from './../../services/category9-mod2.service';
import { Status9Mod2Service } from './../../services/status9-mod2.service';
import { Severity9Mod2Service } from './../../services/severity9-mod2.service';
import { Issue9Mod2Service } from './../../services/issue9-mod2.service';

@Component({
  selector: 'app-mod2-issue9-mod2-page',
  templateUrl: './issue9-mod2-page.component.html',
  providers: [
    Project9Mod2Service,
    Category9Mod2Service,
    Status9Mod2Service,
    Severity9Mod2Service,
    Issue9Mod2Service
  ]
})
export class Issue9Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod2;

  @ViewChild('grid') grid: Issue9Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod2Service: Project9Mod2Service,
    private category9Mod2Service: Category9Mod2Service,
    private status9Mod2Service: Status9Mod2Service,
    private severity9Mod2Service: Severity9Mod2Service,
    private issue9Mod2Service: Issue9Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue9Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod2;
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
    this.router.navigate(['/mod2/issue9-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod2 = items;
      });

    this.category9Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod2 = items;
      });

    this.status9Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod2 = items;
      });

    this.severity9Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod2 = items;
      });
  }

}
