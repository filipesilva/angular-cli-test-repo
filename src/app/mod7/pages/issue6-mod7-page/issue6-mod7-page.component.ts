import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod7GridComponent } from './components/issue6-mod7-grid/issue6-mod7-grid.component';
import { Issue6Mod7 } from './../../models/issue6-mod7';

import { Project6Mod7Service } from './../../services/project6-mod7.service';
import { Category6Mod7Service } from './../../services/category6-mod7.service';
import { Status6Mod7Service } from './../../services/status6-mod7.service';
import { Severity6Mod7Service } from './../../services/severity6-mod7.service';
import { Issue6Mod7Service } from './../../services/issue6-mod7.service';

@Component({
  selector: 'app-mod7-issue6-mod7-page',
  templateUrl: './issue6-mod7-page.component.html',
  providers: [
    Project6Mod7Service,
    Category6Mod7Service,
    Status6Mod7Service,
    Severity6Mod7Service,
    Issue6Mod7Service
  ]
})
export class Issue6Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod7;

  @ViewChild('grid') grid: Issue6Mod7GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod7Service: Project6Mod7Service,
    private category6Mod7Service: Category6Mod7Service,
    private status6Mod7Service: Status6Mod7Service,
    private severity6Mod7Service: Severity6Mod7Service,
    private issue6Mod7Service: Issue6Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.issue6Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod7;
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
    this.router.navigate(['/mod7/issue6-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod7 = items;
      });

    this.category6Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod7 = items;
      });

    this.status6Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod7 = items;
      });

    this.severity6Mod7Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod7 = items;
      });
  }

}
