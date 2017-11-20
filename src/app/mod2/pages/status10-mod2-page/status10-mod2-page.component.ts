import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Status10Mod2GridComponent } from './components/status10-mod2-grid/status10-mod2-grid.component';
import { Status10Mod2 } from './../../models/status10-mod2';

import { Status10Mod2Service } from './../../services/status10-mod2.service';

@Component({
  selector: 'app-mod2-status10-mod2-page',
  templateUrl: './status10-mod2-page.component.html',
  providers: [
    Status10Mod2Service
  ]
})
export class Status10Mod2PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Status10Mod2;

  @ViewChild('grid') grid: Status10Mod2GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private status10Mod2Service: Status10Mod2Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod2.status10Mod2.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Status10Mod2;
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
    this.router.navigate(['/mod2/status10-mod2', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.status10Mod2Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
