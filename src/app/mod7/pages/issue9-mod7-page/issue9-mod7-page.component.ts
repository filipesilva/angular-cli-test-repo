import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod7GridComponent } from './components/issue9-mod7-grid/issue9-mod7-grid.component';
import { Issue9Mod7 } from './../../models/issue9-mod7';

import { Project9Mod7Service } from './../../services/project9-mod7.service';
import { Category9Mod7Service } from './../../services/category9-mod7.service';
import { Status9Mod7Service } from './../../services/status9-mod7.service';
import { Severity9Mod7Service } from './../../services/severity9-mod7.service';
import { Issue9Mod7Service } from './../../services/issue9-mod7.service';

@Component({
  selector: 'app-mod7-issue9-mod7-page',
  templateUrl: './issue9-mod7-page.component.html',
  providers: [
    Project9Mod7Service,
    Category9Mod7Service,
    Status9Mod7Service,
    Severity9Mod7Service,
    Issue9Mod7Service
  ]
})
export class Issue9Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod7;

  @ViewChild('grid') grid: Issue9Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod7Service: Project9Mod7Service,
    private category9Mod7Service: Category9Mod7Service,
    private status9Mod7Service: Status9Mod7Service,
    private severity9Mod7Service: Severity9Mod7Service,
    private issue9Mod7Service: Issue9Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue9Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod7;
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
    this.router.navigate(['/mod7/issue9-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod7 = items;
      });

    this.category9Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod7 = items;
      });

    this.status9Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod7 = items;
      });

    this.severity9Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod7 = items;
      });
  }

}
