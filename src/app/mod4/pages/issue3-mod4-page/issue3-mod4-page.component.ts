import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod4GridComponent } from './components/issue3-mod4-grid/issue3-mod4-grid.component';
import { Issue3Mod4 } from './../../models/issue3-mod4';

import { Project3Mod4Service } from './../../services/project3-mod4.service';
import { Category3Mod4Service } from './../../services/category3-mod4.service';
import { Status3Mod4Service } from './../../services/status3-mod4.service';
import { Severity3Mod4Service } from './../../services/severity3-mod4.service';
import { Issue3Mod4Service } from './../../services/issue3-mod4.service';

@Component({
  selector: 'app-mod4-issue3-mod4-page',
  templateUrl: './issue3-mod4-page.component.html',
  providers: [
    Project3Mod4Service,
    Category3Mod4Service,
    Status3Mod4Service,
    Severity3Mod4Service,
    Issue3Mod4Service
  ]
})
export class Issue3Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod4;

  @ViewChild('grid') grid: Issue3Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod4Service: Project3Mod4Service,
    private category3Mod4Service: Category3Mod4Service,
    private status3Mod4Service: Status3Mod4Service,
    private severity3Mod4Service: Severity3Mod4Service,
    private issue3Mod4Service: Issue3Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue3Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod4;
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
    this.router.navigate(['/mod4/issue3-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod4 = items;
      });

    this.category3Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod4 = items;
      });

    this.status3Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod4 = items;
      });

    this.severity3Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod4 = items;
      });
  }

}
