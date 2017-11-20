import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Category2Mod3GridComponent } from './components/category2-mod3-grid/category2-mod3-grid.component';
import { Category2Mod3 } from './../../models/category2-mod3';

import { Category2Mod3Service } from './../../services/category2-mod3.service';

@Component({
  selector: 'app-mod3-category2-mod3-page',
  templateUrl: './category2-mod3-page.component.html',
  providers: [
    Category2Mod3Service
  ]
})
export class Category2Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Category2Mod3;

  @ViewChild('grid') grid: Category2Mod3GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private category2Mod3Service: Category2Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.category2Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Category2Mod3;
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
    this.router.navigate(['/mod3/category2-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.category2Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
