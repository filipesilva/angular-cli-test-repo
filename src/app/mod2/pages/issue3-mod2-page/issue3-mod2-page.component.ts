import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod2GridComponent } from './components/issue3-mod2-grid/issue3-mod2-grid.component';
import { Issue3Mod2 } from './../../models/issue3-mod2';

import { Project3Mod2Service } from './../../services/project3-mod2.service';
import { Category3Mod2Service } from './../../services/category3-mod2.service';
import { Status3Mod2Service } from './../../services/status3-mod2.service';
import { Severity3Mod2Service } from './../../services/severity3-mod2.service';
import { Issue3Mod2Service } from './../../services/issue3-mod2.service';

@Component({
  selector: 'app-mod2-issue3-mod2-page',
  templateUrl: './issue3-mod2-page.component.html',
  providers: [
    Project3Mod2Service,
    Category3Mod2Service,
    Status3Mod2Service,
    Severity3Mod2Service,
    Issue3Mod2Service
  ]
})
export class Issue3Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod2;

  @ViewChild('grid') grid: Issue3Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod2Service: Project3Mod2Service,
    private category3Mod2Service: Category3Mod2Service,
    private status3Mod2Service: Status3Mod2Service,
    private severity3Mod2Service: Severity3Mod2Service,
    private issue3Mod2Service: Issue3Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue3Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod2;
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
    this.router.navigate(['/mod2/issue3-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod2 = items;
      });

    this.category3Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod2 = items;
      });

    this.status3Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod2 = items;
      });

    this.severity3Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod2 = items;
      });
  }

}
