import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod3GridComponent } from './components/issue2-mod3-grid/issue2-mod3-grid.component';
import { Issue2Mod3 } from './../../models/issue2-mod3';

import { Project2Mod3Service } from './../../services/project2-mod3.service';
import { Category2Mod3Service } from './../../services/category2-mod3.service';
import { Status2Mod3Service } from './../../services/status2-mod3.service';
import { Severity2Mod3Service } from './../../services/severity2-mod3.service';
import { Issue2Mod3Service } from './../../services/issue2-mod3.service';

@Component({
  selector: 'app-mod3-issue2-mod3-page',
  templateUrl: './issue2-mod3-page.component.html',
  providers: [
    Project2Mod3Service,
    Category2Mod3Service,
    Status2Mod3Service,
    Severity2Mod3Service,
    Issue2Mod3Service
  ]
})
export class Issue2Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod3;

  @ViewChild('grid') grid: Issue2Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod3Service: Project2Mod3Service,
    private category2Mod3Service: Category2Mod3Service,
    private status2Mod3Service: Status2Mod3Service,
    private severity2Mod3Service: Severity2Mod3Service,
    private issue2Mod3Service: Issue2Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue2Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod3;
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
    this.router.navigate(['/mod3/issue2-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod3 = items;
      });

    this.category2Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod3 = items;
      });

    this.status2Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod3 = items;
      });

    this.severity2Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod3 = items;
      });
  }

}
