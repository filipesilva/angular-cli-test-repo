import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod7GridComponent } from './components/issue7-mod7-grid/issue7-mod7-grid.component';
import { Issue7Mod7 } from './../../models/issue7-mod7';

import { Project7Mod7Service } from './../../services/project7-mod7.service';
import { Category7Mod7Service } from './../../services/category7-mod7.service';
import { Status7Mod7Service } from './../../services/status7-mod7.service';
import { Severity7Mod7Service } from './../../services/severity7-mod7.service';
import { Issue7Mod7Service } from './../../services/issue7-mod7.service';

@Component({
  selector: 'app-mod7-issue7-mod7-page',
  templateUrl: './issue7-mod7-page.component.html',
  providers: [
    Project7Mod7Service,
    Category7Mod7Service,
    Status7Mod7Service,
    Severity7Mod7Service,
    Issue7Mod7Service
  ]
})
export class Issue7Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod7;

  @ViewChild('grid') grid: Issue7Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod7Service: Project7Mod7Service,
    private category7Mod7Service: Category7Mod7Service,
    private status7Mod7Service: Status7Mod7Service,
    private severity7Mod7Service: Severity7Mod7Service,
    private issue7Mod7Service: Issue7Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue7Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod7;
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
    this.router.navigate(['/mod7/issue7-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod7 = items;
      });

    this.category7Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod7 = items;
      });

    this.status7Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod7 = items;
      });

    this.severity7Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod7 = items;
      });
  }

}
