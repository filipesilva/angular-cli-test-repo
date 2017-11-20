import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue4Mod3GridComponent } from './components/issue4-mod3-grid/issue4-mod3-grid.component';
import { Issue4Mod3 } from './../../models/issue4-mod3';

import { Project4Mod3Service } from './../../services/project4-mod3.service';
import { Category4Mod3Service } from './../../services/category4-mod3.service';
import { Status4Mod3Service } from './../../services/status4-mod3.service';
import { Severity4Mod3Service } from './../../services/severity4-mod3.service';
import { Issue4Mod3Service } from './../../services/issue4-mod3.service';

@Component({
  selector: 'app-mod3-issue4-mod3-page',
  templateUrl: './issue4-mod3-page.component.html',
  providers: [
    Project4Mod3Service,
    Category4Mod3Service,
    Status4Mod3Service,
    Severity4Mod3Service,
    Issue4Mod3Service
  ]
})
export class Issue4Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue4Mod3;

  @ViewChild('grid') grid: Issue4Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project4Mod3Service: Project4Mod3Service,
    private category4Mod3Service: Category4Mod3Service,
    private status4Mod3Service: Status4Mod3Service,
    private severity4Mod3Service: Severity4Mod3Service,
    private issue4Mod3Service: Issue4Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue4Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue4Mod3;
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
    this.router.navigate(['/mod3/issue4-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue4Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project4Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject4Mod3 = items;
      });

    this.category4Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory4Mod3 = items;
      });

    this.status4Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus4Mod3 = items;
      });

    this.severity4Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity4Mod3 = items;
      });
  }

}
