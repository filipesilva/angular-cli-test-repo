import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Category10Mod1GridComponent } from './components/category10-mod1-grid/category10-mod1-grid.component';
import { Category10Mod1 } from './../../models/category10-mod1';

import { Category10Mod1Service } from './../../services/category10-mod1.service';

@Component({
  selector: 'app-mod1-category10-mod1-page',
  templateUrl: './category10-mod1-page.component.html',
  providers: [
    Category10Mod1Service
  ]
})
export class Category10Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Category10Mod1;

  @ViewChild('grid') grid: Category10Mod1GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private category10Mod1Service: Category10Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.category10Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Category10Mod1;
        } else {
          this.item = null;
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public new(): void {
    this.newRecord = true;
    this.router.navigate(['/mod1/category10-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.category10Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
