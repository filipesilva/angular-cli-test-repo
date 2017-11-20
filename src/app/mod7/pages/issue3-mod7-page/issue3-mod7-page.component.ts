import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod7GridComponent } from './components/issue3-mod7-grid/issue3-mod7-grid.component';
import { Issue3Mod7 } from './../../models/issue3-mod7';

import { Project3Mod7Service } from './../../services/project3-mod7.service';
import { Category3Mod7Service } from './../../services/category3-mod7.service';
import { Status3Mod7Service } from './../../services/status3-mod7.service';
import { Severity3Mod7Service } from './../../services/severity3-mod7.service';
import { Issue3Mod7Service } from './../../services/issue3-mod7.service';

@Component({
  selector: 'app-mod7-issue3-mod7-page',
  templateUrl: './issue3-mod7-page.component.html',
  providers: [
    Project3Mod7Service,
    Category3Mod7Service,
    Status3Mod7Service,
    Severity3Mod7Service,
    Issue3Mod7Service
  ]
})
export class Issue3Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod7;

  @ViewChild('grid') grid: Issue3Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod7Service: Project3Mod7Service,
    private category3Mod7Service: Category3Mod7Service,
    private status3Mod7Service: Status3Mod7Service,
    private severity3Mod7Service: Severity3Mod7Service,
    private issue3Mod7Service: Issue3Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue3Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod7;
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
    this.router.navigate(['/mod7/issue3-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod7 = items;
      });

    this.category3Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod7 = items;
      });

    this.status3Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod7 = items;
      });

    this.severity3Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod7 = items;
      });
  }

}
