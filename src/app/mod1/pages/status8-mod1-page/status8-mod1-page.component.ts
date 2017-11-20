import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Status8Mod1GridComponent } from './components/status8-mod1-grid/status8-mod1-grid.component';
import { Status8Mod1 } from './../../models/status8-mod1';

import { Status8Mod1Service } from './../../services/status8-mod1.service';

@Component({
  selector: 'app-mod1-status8-mod1-page',
  templateUrl: './status8-mod1-page.component.html',
  providers: [
    Status8Mod1Service
  ]
})
export class Status8Mod1PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Status8Mod1;

  @ViewChild('grid') grid: Status8Mod1GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private status8Mod1Service: Status8Mod1Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod1.status8Mod1.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Status8Mod1;
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
    this.router.navigate(['/mod1/status8-mod1', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.status8Mod1Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
