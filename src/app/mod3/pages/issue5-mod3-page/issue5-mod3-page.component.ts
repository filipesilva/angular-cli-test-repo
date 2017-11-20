import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue5Mod3GridComponent } from './components/issue5-mod3-grid/issue5-mod3-grid.component';
import { Issue5Mod3 } from './../../models/issue5-mod3';

import { Project5Mod3Service } from './../../services/project5-mod3.service';
import { Category5Mod3Service } from './../../services/category5-mod3.service';
import { Status5Mod3Service } from './../../services/status5-mod3.service';
import { Severity5Mod3Service } from './../../services/severity5-mod3.service';
import { Issue5Mod3Service } from './../../services/issue5-mod3.service';

@Component({
  selector: 'app-mod3-issue5-mod3-page',
  templateUrl: './issue5-mod3-page.component.html',
  providers: [
    Project5Mod3Service,
    Category5Mod3Service,
    Status5Mod3Service,
    Severity5Mod3Service,
    Issue5Mod3Service
  ]
})
export class Issue5Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue5Mod3;

  @ViewChild('grid') grid: Issue5Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project5Mod3Service: Project5Mod3Service,
    private category5Mod3Service: Category5Mod3Service,
    private status5Mod3Service: Status5Mod3Service,
    private severity5Mod3Service: Severity5Mod3Service,
    private issue5Mod3Service: Issue5Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue5Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue5Mod3;
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
    this.router.navigate(['/mod3/issue5-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue5Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project5Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject5Mod3 = items;
      });

    this.category5Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory5Mod3 = items;
      });

    this.status5Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus5Mod3 = items;
      });

    this.severity5Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity5Mod3 = items;
      });
  }

}
