import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod4GridComponent } from './components/issue6-mod4-grid/issue6-mod4-grid.component';
import { Issue6Mod4 } from './../../models/issue6-mod4';

import { Project6Mod4Service } from './../../services/project6-mod4.service';
import { Category6Mod4Service } from './../../services/category6-mod4.service';
import { Status6Mod4Service } from './../../services/status6-mod4.service';
import { Severity6Mod4Service } from './../../services/severity6-mod4.service';
import { Issue6Mod4Service } from './../../services/issue6-mod4.service';

@Component({
  selector: 'app-mod4-issue6-mod4-page',
  templateUrl: './issue6-mod4-page.component.html',
  providers: [
    Project6Mod4Service,
    Category6Mod4Service,
    Status6Mod4Service,
    Severity6Mod4Service,
    Issue6Mod4Service
  ]
})
export class Issue6Mod4PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod4;

  @ViewChild('grid') grid: Issue6Mod4GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod4Service: Project6Mod4Service,
    private category6Mod4Service: Category6Mod4Service,
    private status6Mod4Service: Status6Mod4Service,
    private severity6Mod4Service: Severity6Mod4Service,
    private issue6Mod4Service: Issue6Mod4Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod4.issue6Mod4.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod4;
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
    this.router.navigate(['/mod4/issue6-mod4', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod4Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod4 = items;
      });

    this.category6Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod4 = items;
      });

    this.status6Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod4 = items;
      });

    this.severity6Mod4Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod4 = items;
      });
  }

}
