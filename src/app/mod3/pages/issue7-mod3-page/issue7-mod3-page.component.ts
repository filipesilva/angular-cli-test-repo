import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue7Mod3GridComponent } from './components/issue7-mod3-grid/issue7-mod3-grid.component';
import { Issue7Mod3 } from './../../models/issue7-mod3';

import { Project7Mod3Service } from './../../services/project7-mod3.service';
import { Category7Mod3Service } from './../../services/category7-mod3.service';
import { Status7Mod3Service } from './../../services/status7-mod3.service';
import { Severity7Mod3Service } from './../../services/severity7-mod3.service';
import { Issue7Mod3Service } from './../../services/issue7-mod3.service';

@Component({
  selector: 'app-mod3-issue7-mod3-page',
  templateUrl: './issue7-mod3-page.component.html',
  providers: [
    Project7Mod3Service,
    Category7Mod3Service,
    Status7Mod3Service,
    Severity7Mod3Service,
    Issue7Mod3Service
  ]
})
export class Issue7Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue7Mod3;

  @ViewChild('grid') grid: Issue7Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project7Mod3Service: Project7Mod3Service,
    private category7Mod3Service: Category7Mod3Service,
    private status7Mod3Service: Status7Mod3Service,
    private severity7Mod3Service: Severity7Mod3Service,
    private issue7Mod3Service: Issue7Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue7Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue7Mod3;
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
    this.router.navigate(['/mod3/issue7-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue7Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project7Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject7Mod3 = items;
      });

    this.category7Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory7Mod3 = items;
      });

    this.status7Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus7Mod3 = items;
      });

    this.severity7Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity7Mod3 = items;
      });
  }

}
