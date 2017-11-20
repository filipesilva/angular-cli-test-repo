import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Severity10Mod7GridComponent } from './components/severity10-mod7-grid/severity10-mod7-grid.component';
import { Severity10Mod7 } from './../../models/severity10-mod7';

import { Severity10Mod7Service } from './../../services/severity10-mod7.service';

@Component({
  selector: 'app-mod7-severity10-mod7-page',
  templateUrl: './severity10-mod7-page.component.html',
  providers: [
    Severity10Mod7Service
  ]
})
export class Severity10Mod7PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Severity10Mod7;

  @ViewChild('grid') grid: Severity10Mod7GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private severity10Mod7Service: Severity10Mod7Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod7.severity10Mod7.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Severity10Mod7;
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
    this.router.navigate(['/mod7/severity10-mod7', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.severity10Mod7Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
