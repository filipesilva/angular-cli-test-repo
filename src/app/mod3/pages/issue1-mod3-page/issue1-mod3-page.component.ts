import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue1Mod3GridComponent } from './components/issue1-mod3-grid/issue1-mod3-grid.component';
import { Issue1Mod3 } from './../../models/issue1-mod3';

import { Project1Mod3Service } from './../../services/project1-mod3.service';
import { Category1Mod3Service } from './../../services/category1-mod3.service';
import { Status1Mod3Service } from './../../services/status1-mod3.service';
import { Severity1Mod3Service } from './../../services/severity1-mod3.service';
import { Issue1Mod3Service } from './../../services/issue1-mod3.service';

@Component({
  selector: 'app-mod3-issue1-mod3-page',
  templateUrl: './issue1-mod3-page.component.html',
  providers: [
    Project1Mod3Service,
    Category1Mod3Service,
    Status1Mod3Service,
    Severity1Mod3Service,
    Issue1Mod3Service
  ]
})
export class Issue1Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue1Mod3;

  @ViewChild('grid') grid: Issue1Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project1Mod3Service: Project1Mod3Service,
    private category1Mod3Service: Category1Mod3Service,
    private status1Mod3Service: Status1Mod3Service,
    private severity1Mod3Service: Severity1Mod3Service,
    private issue1Mod3Service: Issue1Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue1Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue1Mod3;
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
    this.router.navigate(['/mod3/issue1-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue1Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project1Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject1Mod3 = items;
      });

    this.category1Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory1Mod3 = items;
      });

    this.status1Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus1Mod3 = items;
      });

    this.severity1Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity1Mod3 = items;
      });
  }

}
