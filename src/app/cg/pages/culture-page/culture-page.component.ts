import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { CultureGridComponent } from './components/culture-grid/culture-grid.component';
import { Culture } from './../../models/culture';

import { CultureService } from './../../services/culture.service';

@Component({
  selector: 'app-cg-culture-page',
  templateUrl: './culture-page.component.html',
  providers: [
    CultureService
  ]
})
export class CulturePageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Culture;

  @ViewChild('grid') grid: CultureGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private cultureService: CultureService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.culture.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Culture;
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
    this.router.navigate(['/cg/culture', { id: '' }]);
  }

  private edit(id: string): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.cultureService
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
