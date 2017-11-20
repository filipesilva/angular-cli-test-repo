import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ModalFilterComponent } from './../../../shared/components/modal-filter/modal-filter.component';
import { Issue6Mod3GridComponent } from './components/issue6-mod3-grid/issue6-mod3-grid.component';
import { Issue6Mod3 } from './../../models/issue6-mod3';

import { Project6Mod3Service } from './../../services/project6-mod3.service';
import { Category6Mod3Service } from './../../services/category6-mod3.service';
import { Status6Mod3Service } from './../../services/status6-mod3.service';
import { Severity6Mod3Service } from './../../services/severity6-mod3.service';
import { Issue6Mod3Service } from './../../services/issue6-mod3.service';

@Component({
  selector: 'app-mod3-issue6-mod3-page',
  templateUrl: './issue6-mod3-page.component.html',
  providers: [
    Project6Mod3Service,
    Category6Mod3Service,
    Status6Mod3Service,
    Severity6Mod3Service,
    Issue6Mod3Service
  ]
})
export class Issue6Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Issue6Mod3;

  @ViewChild('grid') grid: Issue6Mod3GridComponent;
  @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project6Mod3Service: Project6Mod3Service,
    private category6Mod3Service: Category6Mod3Service,
    private status6Mod3Service: Status6Mod3Service,
    private severity6Mod3Service: Severity6Mod3Service,
    private issue6Mod3Service: Issue6Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.issue6Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Issue6Mod3;
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
    this.router.navigate(['/mod3/issue6-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.issue6Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  private loadSelects(): void {
    this.project6Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsProject6Mod3 = items;
      });

    this.category6Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsCategory6Mod3 = items;
      });

    this.status6Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsStatus6Mod3 = items;
      });

    this.severity6Mod3Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.grid.selects.itemsSeverity6Mod3 = items;
      });
  }

}
