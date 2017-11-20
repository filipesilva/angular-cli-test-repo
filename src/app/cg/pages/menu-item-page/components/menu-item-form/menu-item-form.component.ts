import { Component, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CustomValidators } from 'ng2-validation';
import { AuthService } from './../../../../../shared/services/auth.service';
import { HelperService } from './../../../../../shared/services/helper.service';
import { SettingsService } from './../../../../../shared/services/settings.service';
import { FormComponent } from './../../../../../shared/components/form/form.component';

import { MenuItemService } from './../../../../services/menu-item.service';
import { MenuItem } from './../../../../models/menu-item';

@Component({
  selector: 'app-cg-menu-item-form',
  templateUrl: './menu-item-form.component.html'
})
export class MenuItemFormComponent extends FormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;

  @Input() newRecord: boolean;
  @Input() item: MenuItem;

  @Output() gridRefreshEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    authService: AuthService,
    settingsService: SettingsService,
    private helperService: HelperService,
    private menuItemService: MenuItemService) {
    super(authService, settingsService);
  }

  ngOnInit() {
    this.loadSelects();
    this.buildFormGroup();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      idMenuItem: [this.item.idMenuItem, []],
      idMenuItemParent: [super.toString(this.item.idMenuItemParent), []],
      menuText: [this.item.menuText, [Validators.required]],
      url: [this.item.url, []],
      cssClass: [this.item.cssClass, []],
      groupName: [this.item.groupName, []],
      authenticated: [this.item.authenticated, []],
      checkPermission: [this.item.checkPermission, []],
      featureKey: [this.item.featureKey, []],
      menuOrder: [this.item.menuOrder, [CustomValidators.digits, CustomValidators.range([-2147483648, 2147483648])]],
      enabled: [this.item.enabled, []]
    });
  }

  public back(): void {
    this.router.navigate(['/cg/menu-item']);
  }

  public save(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const item = this.formGroup.value;
      this.menuItemService
        .save(this.newRecord, item)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          if (result.isValid) {
            this.helperService.message.success(result);
            this.gridRefreshEventEmitter.emit(null);
            if (this.newRecord) {
              this.formGroup.get('idMenuItem').setValue(result.data);
              this.router.navigate(['/cg/menu-item', { id: result.data }]);
              this.helperService.anchor.scrollTo('tabs');
            }
          } else {
            this.helperService.message.error(result);
          }
          this.isLoading = false;
        });
    }
  }

  private loadSelects(): void {
    this.menuItemService
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.selects.itemsMenuItem = items;
      });
  }

}
