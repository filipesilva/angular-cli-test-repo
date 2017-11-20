import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { FeatureGridComponent } from './components/feature-grid/feature-grid.component';
import { Feature } from './../../models/feature';

import { FeatureService } from './../../services/feature.service';

@Component({
  selector: 'app-cg-feature-page',
  templateUrl: './feature-page.component.html',
  providers: [
    FeatureService
  ]
})
export class FeaturePageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Feature;

  @ViewChild('grid') grid: FeatureGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private featureService: FeatureService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.feature.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Feature;
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
    this.router.navigate(['/cg/feature', { id: '' }]);
  }

  private edit(id: string): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.featureService
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
