import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod7GridComponent } from './components/issue1-mod7-grid/issue1-mod7-grid.component';
import { Issue1Mod7 } from './../../models/issue1-mod7';

import { Project1Mod7Service } from './../../services/project1-mod7.service';
import { Category1Mod7Service } from './../../services/category1-mod7.service';
import { Status1Mod7Service } from './../../services/status1-mod7.service';
import { Severity1Mod7Service } from './../../services/severity1-mod7.service';
import { Issue1Mod7Service } from './../../services/issue1-mod7.service';

@Component({
  selector: 'app-mod7-issue1-mod7-page',
  templateUrl: './issue1-mod7-page.component.html',
  providers: [
    Project1Mod7Service,
    Category1Mod7Service,
    Status1Mod7Service,
    Severity1Mod7Service,
    Issue1Mod7Service
  ]
})
export class Issue1Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod7;

  @ViewChild('grid') grid: Issue1Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod7Service: Project1Mod7Service,
    private category1Mod7Service: Category1Mod7Service,
    private status1Mod7Service: Status1Mod7Service,
    private severity1Mod7Service: Severity1Mod7Service,
    private issue1Mod7Service: Issue1Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue1Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod7;
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
    this.router.navigate(['/mod7/issue1-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod7 = items;
      });

    this.category1Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod7 = items;
      });

    this.status1Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod7 = items;
      });

    this.severity1Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod7 = items;
      });
  }

}
