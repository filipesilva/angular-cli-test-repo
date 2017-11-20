import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue2Mod7GridComponent } from './components/issue2-mod7-grid/issue2-mod7-grid.component';
import { Issue2Mod7 } from './../../models/issue2-mod7';

import { Project2Mod7Service } from './../../services/project2-mod7.service';
import { Category2Mod7Service } from './../../services/category2-mod7.service';
import { Status2Mod7Service } from './../../services/status2-mod7.service';
import { Severity2Mod7Service } from './../../services/severity2-mod7.service';
import { Issue2Mod7Service } from './../../services/issue2-mod7.service';

@Component({
  selector: 'app-mod7-issue2-mod7-page',
  templateUrl: './issue2-mod7-page.component.html',
  providers: [
    Project2Mod7Service,
    Category2Mod7Service,
    Status2Mod7Service,
    Severity2Mod7Service,
    Issue2Mod7Service
  ]
})
export class Issue2Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue2Mod7;

  @ViewChild('grid') grid: Issue2Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod7Service: Project2Mod7Service,
    private category2Mod7Service: Category2Mod7Service,
    private status2Mod7Service: Status2Mod7Service,
    private severity2Mod7Service: Severity2Mod7Service,
    private issue2Mod7Service: Issue2Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue2Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue2Mod7;
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
    this.router.navigate(['/mod7/issue2-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue2Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project2Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject2Mod7 = items;
      });

    this.category2Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory2Mod7 = items;
      });

    this.status2Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus2Mod7 = items;
      });

    this.severity2Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity2Mod7 = items;
      });
  }

}
