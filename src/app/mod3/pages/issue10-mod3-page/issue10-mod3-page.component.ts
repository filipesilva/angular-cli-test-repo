import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue10Mod3GridComponent } from './components/issue10-mod3-grid/issue10-mod3-grid.component';
import { Issue10Mod3 } from './../../models/issue10-mod3';

import { Project10Mod3Service } from './../../services/project10-mod3.service';
import { Category10Mod3Service } from './../../services/category10-mod3.service';
import { Status10Mod3Service } from './../../services/status10-mod3.service';
import { Severity10Mod3Service } from './../../services/severity10-mod3.service';
import { Issue10Mod3Service } from './../../services/issue10-mod3.service';

@Component({
  selector: 'app-mod3-issue10-mod3-page',
  templateUrl: './issue10-mod3-page.component.html',
  providers: [
    Project10Mod3Service,
    Category10Mod3Service,
    Status10Mod3Service,
    Severity10Mod3Service,
    Issue10Mod3Service
  ]
})
export class Issue10Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue10Mod3;

  @ViewChild('grid') grid: Issue10Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project10Mod3Service: Project10Mod3Service,
    private category10Mod3Service: Category10Mod3Service,
    private status10Mod3Service: Status10Mod3Service,
    private severity10Mod3Service: Severity10Mod3Service,
    private issue10Mod3Service: Issue10Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue10Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue10Mod3;
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
    this.router.navigate(['/mod3/issue10-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue10Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project10Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject10Mod3 = items;
      });

    this.category10Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory10Mod3 = items;
      });

    this.status10Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus10Mod3 = items;
      });

    this.severity10Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity10Mod3 = items;
      });
  }

}
