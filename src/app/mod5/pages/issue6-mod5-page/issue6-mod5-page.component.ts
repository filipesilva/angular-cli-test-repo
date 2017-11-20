import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod5GridComponent } from './components/issue6-mod5-grid/issue6-mod5-grid.component';
import { Issue6Mod5 } from './../../models/issue6-mod5';

import { Project6Mod5Service } from './../../services/project6-mod5.service';
import { Category6Mod5Service } from './../../services/category6-mod5.service';
import { Status6Mod5Service } from './../../services/status6-mod5.service';
import { Severity6Mod5Service } from './../../services/severity6-mod5.service';
import { Issue6Mod5Service } from './../../services/issue6-mod5.service';

@Component({
  selector: 'app-mod5-issue6-mod5-page',
  templateUrl: './issue6-mod5-page.component.html',
  providers: [
    Project6Mod5Service,
    Category6Mod5Service,
    Status6Mod5Service,
    Severity6Mod5Service,
    Issue6Mod5Service
  ]
})
export class Issue6Mod5PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod5;

  @ViewChild('grid') grid: Issue6Mod5GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod5Service: Project6Mod5Service,
    private category6Mod5Service: Category6Mod5Service,
    private status6Mod5Service: Status6Mod5Service,
    private severity6Mod5Service: Severity6Mod5Service,
    private issue6Mod5Service: Issue6Mod5Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod5.issue6Mod5.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod5;
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
    this.router.navigate(['/mod5/issue6-mod5', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod5Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod5 = items;
      });

    this.category6Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod5 = items;
      });

    this.status6Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod5 = items;
      });

    this.severity6Mod5Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod5 = items;
      });
  }

}
