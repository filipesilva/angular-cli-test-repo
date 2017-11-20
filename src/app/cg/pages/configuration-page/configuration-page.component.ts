import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { ConfigurationGridComponent } from './components/configuration-grid/configuration-grid.component';
import { Configuration } from './../../models/configuration';

import { ConfigurationService } from './../../services/configuration.service';

@Component({
  selector: 'app-cg-configuration-page',
  templateUrl: './configuration-page.component.html',
  providers: [
    ConfigurationService
  ]
})
export class ConfigurationPageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: Configuration;

  @ViewChild('grid') grid: ConfigurationGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private configurationService: ConfigurationService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.configuration.select');
    this.route.params
      .takeUntil(this.ngUnsubscribe)
      .subscribe(params => {
        const id = params['id'];
        if (id) {
          this.edit(id);
        } else if (id === '') {
          this.item = {} as Configuration;
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
    this.router.navigate(['/cg/configuration', { id: '' }]);
  }

  private edit(id: string): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.configurationService
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

}
