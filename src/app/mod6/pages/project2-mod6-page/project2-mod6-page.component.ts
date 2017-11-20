import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Project2Mod6GridComponent } from './components/project2-mod6-grid/project2-mod6-grid.component';
import { Project2Mod6 } from './../../models/project2-mod6';

import { Project2Mod6Service } from './../../services/project2-mod6.service';

@Component({
  selector: 'app-mod6-project2-mod6-page',
  templateUrl: './project2-mod6-page.component.html',
  providers: [
    Project2Mod6Service
  ]
})
export class Project2Mod6PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Project2Mod6;

  @ViewChild('grid') grid: Project2Mod6GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private project2Mod6Service: Project2Mod6Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod6.project2Mod6.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Project2Mod6;
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
    this.router.navigate(['/mod6/project2-mod6', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.project2Mod6Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
