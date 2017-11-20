import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue3Mod3GridComponent } from './components/issue3-mod3-grid/issue3-mod3-grid.component';
import { Issue3Mod3 } from './../../models/issue3-mod3';

import { Project3Mod3Service } from './../../services/project3-mod3.service';
import { Category3Mod3Service } from './../../services/category3-mod3.service';
import { Status3Mod3Service } from './../../services/status3-mod3.service';
import { Severity3Mod3Service } from './../../services/severity3-mod3.service';
import { Issue3Mod3Service } from './../../services/issue3-mod3.service';

@Component({
  selector: 'app-mod3-issue3-mod3-page',
  templateUrl: './issue3-mod3-page.component.html',
  providers: [
    Project3Mod3Service,
    Category3Mod3Service,
    Status3Mod3Service,
    Severity3Mod3Service,
    Issue3Mod3Service
  ]
})
export class Issue3Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue3Mod3;

  @ViewChild('grid') grid: Issue3Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project3Mod3Service: Project3Mod3Service,
    private category3Mod3Service: Category3Mod3Service,
    private status3Mod3Service: Status3Mod3Service,
    private severity3Mod3Service: Severity3Mod3Service,
    private issue3Mod3Service: Issue3Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue3Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue3Mod3;
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
    this.router.navigate(['/mod3/issue3-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue3Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project3Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject3Mod3 = items;
      });

    this.category3Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory3Mod3 = items;
      });

    this.status3Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus3Mod3 = items;
      });

    this.severity3Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity3Mod3 = items;
      });
  }

}
