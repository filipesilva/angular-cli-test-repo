import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod5GridComponent } from './components/issue3-mod5-grid/issue3-mod5-grid.component';
import { Issue3Mod5 } from './../../models/issue3-mod5';

import { Project3Mod5Service } from './../../services/project3-mod5.service';
import { Category3Mod5Service } from './../../services/category3-mod5.service';
import { Status3Mod5Service } from './../../services/status3-mod5.service';
import { Severity3Mod5Service } from './../../services/severity3-mod5.service';
import { Issue3Mod5Service } from './../../services/issue3-mod5.service';

@Component({
  selector: 'app-mod5-issue3-mod5-page',
  templateUrl: './issue3-mod5-page.component.html',
  providers: [
    Project3Mod5Service,
    Category3Mod5Service,
    Status3Mod5Service,
    Severity3Mod5Service,
    Issue3Mod5Service
  ]
})
export class Issue3Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod5;

  @ViewChild('grid') grid: Issue3Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod5Service: Project3Mod5Service,
    private category3Mod5Service: Category3Mod5Service,
    private status3Mod5Service: Status3Mod5Service,
    private severity3Mod5Service: Severity3Mod5Service,
    private issue3Mod5Service: Issue3Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue3Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod5;
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
    this.router.navigate(['/mod5/issue3-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod5 = items;
      });

    this.category3Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod5 = items;
      });

    this.status3Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod5 = items;
      });

    this.severity3Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod5 = items;
      });
  }

}
