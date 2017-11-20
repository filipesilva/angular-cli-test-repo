import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue9Mod3GridComponent } from './components/issue9-mod3-grid/issue9-mod3-grid.component';
import { Issue9Mod3 } from './../../models/issue9-mod3';

import { Project9Mod3Service } from './../../services/project9-mod3.service';
import { Category9Mod3Service } from './../../services/category9-mod3.service';
import { Status9Mod3Service } from './../../services/status9-mod3.service';
import { Severity9Mod3Service } from './../../services/severity9-mod3.service';
import { Issue9Mod3Service } from './../../services/issue9-mod3.service';

@Component({
  selector: 'app-mod3-issue9-mod3-page',
  templateUrl: './issue9-mod3-page.component.html',
  providers: [
    Project9Mod3Service,
    Category9Mod3Service,
    Status9Mod3Service,
    Severity9Mod3Service,
    Issue9Mod3Service
  ]
})
export class Issue9Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue9Mod3;

  @ViewChild('grid') grid: Issue9Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project9Mod3Service: Project9Mod3Service,
    private category9Mod3Service: Category9Mod3Service,
    private status9Mod3Service: Status9Mod3Service,
    private severity9Mod3Service: Severity9Mod3Service,
    private issue9Mod3Service: Issue9Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue9Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue9Mod3;
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
    this.router.navigate(['/mod3/issue9-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue9Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project9Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject9Mod3 = items;
      });

    this.category9Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory9Mod3 = items;
      });

    this.status9Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus9Mod3 = items;
      });

    this.severity9Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity9Mod3 = items;
      });
  }

}
