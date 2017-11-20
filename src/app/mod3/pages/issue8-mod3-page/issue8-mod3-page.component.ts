import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue8Mod3GridComponent } from './components/issue8-mod3-grid/issue8-mod3-grid.component';
import { Issue8Mod3 } from './../../models/issue8-mod3';

import { Project8Mod3Service } from './../../services/project8-mod3.service';
import { Category8Mod3Service } from './../../services/category8-mod3.service';
import { Status8Mod3Service } from './../../services/status8-mod3.service';
import { Severity8Mod3Service } from './../../services/severity8-mod3.service';
import { Issue8Mod3Service } from './../../services/issue8-mod3.service';

@Component({
  selector: 'app-mod3-issue8-mod3-page',
  templateUrl: './issue8-mod3-page.component.html',
  providers: [
    Project8Mod3Service,
    Category8Mod3Service,
    Status8Mod3Service,
    Severity8Mod3Service,
    Issue8Mod3Service
  ]
})
export class Issue8Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue8Mod3;

  @ViewChild('grid') grid: Issue8Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project8Mod3Service: Project8Mod3Service,
    private category8Mod3Service: Category8Mod3Service,
    private status8Mod3Service: Status8Mod3Service,
    private severity8Mod3Service: Severity8Mod3Service,
    private issue8Mod3Service: Issue8Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue8Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue8Mod3;
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
    this.router.navigate(['/mod3/issue8-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue8Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project8Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject8Mod3 = items;
      });

    this.category8Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory8Mod3 = items;
      });

    this.status8Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus8Mod3 = items;
      });

    this.severity8Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity8Mod3 = items;
      });
  }

}
