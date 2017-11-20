import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod2GridComponent } from './components/issue6-mod2-grid/issue6-mod2-grid.component';
import { Issue6Mod2 } from './../../models/issue6-mod2';

import { Project6Mod2Service } from './../../services/project6-mod2.service';
import { Category6Mod2Service } from './../../services/category6-mod2.service';
import { Status6Mod2Service } from './../../services/status6-mod2.service';
import { Severity6Mod2Service } from './../../services/severity6-mod2.service';
import { Issue6Mod2Service } from './../../services/issue6-mod2.service';

@Component({
  selector: 'app-mod2-issue6-mod2-page',
  templateUrl: './issue6-mod2-page.component.html',
  providers: [
    Project6Mod2Service,
    Category6Mod2Service,
    Status6Mod2Service,
    Severity6Mod2Service,
    Issue6Mod2Service
  ]
})
export class Issue6Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod2;

  @ViewChild('grid') grid: Issue6Mod2GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod2Service: Project6Mod2Service,
    private category6Mod2Service: Category6Mod2Service,
    private status6Mod2Service: Status6Mod2Service,
    private severity6Mod2Service: Severity6Mod2Service,
    private issue6Mod2Service: Issue6Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.issue6Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod2;
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
    this.router.navigate(['/mod2/issue6-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod2 = items;
      });

    this.category6Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod2 = items;
      });

    this.status6Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod2 = items;
      });

    this.severity6Mod2Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod2 = items;
      });
  }

}
