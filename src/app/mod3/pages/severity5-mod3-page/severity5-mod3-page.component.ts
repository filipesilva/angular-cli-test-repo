import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { Severity5Mod3GridComponent } from './components/severity5-mod3-grid/severity5-mod3-grid.component';
import { Severity5Mod3 } from './../../models/severity5-mod3';

import { Severity5Mod3Service } from './../../services/severity5-mod3.service';

@Component({
  selector: 'app-mod3-severity5-mod3-page',
  templateUrl: './severity5-mod3-page.component.html',
  providers: [
    Severity5Mod3Service
  ]
})
export class Severity5Mod3PageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Severity5Mod3;

  @ViewChild('grid') grid: Severity5Mod3GridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private severity5Mod3Service: Severity5Mod3Service) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('mod3.severity5Mod3.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Severity5Mod3;
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
    this.router.navigate(['/mod3/severity5-mod3', { id: '' }]);
  }

  private edit(id: number): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.severity5Mod3Service
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
