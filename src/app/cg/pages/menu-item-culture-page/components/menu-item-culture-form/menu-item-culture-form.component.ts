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

import { CultureService as cgCultureService } from './../../../../../cg/services/culture.service';
import { MenuItemService } from './../../../../services/menu-item.service';
import { MenuItemCultureService } from './../../../../services/menu-item-culture.service';
import { MenuItemCulture } from './../../../../models/menu-item-culture';

@Component({
  selector: 'app-cg-menu-item-culture-form',
  templateUrl: './menu-item-culture-form.component.html'
})
export class MenuItemCultureFormComponent extends FormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;

  @Input() parentId: string;
  @Input() newRecord: boolean;
  @Input() item: MenuItemCulture;

  @Output() gridRefreshEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output() backEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    authService: AuthService,
    settingsService: SettingsService,
    private helperService: HelperService,
    private cgCultureService: cgCultureService,
    private menuItemService: MenuItemService,
    private menuItemCultureService: MenuItemCultureService) {
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
      idMenuItemCulture: [this.item.idMenuItemCulture, []],
      idCulture: [super.toString(this.item.idCulture), [Validators.required]],
      idMenuItem: [super.toString(this.item.idMenuItem), [Validators.required]],
      menuText: [this.item.menuText, [Validators.required]]
    });
  }

  public back(): void {
    this.backEventEmitter.emit(null);
  }

  public save(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const item = this.formGroup.value;
      this.menuItemCultureService
        .save(this.newRecord, item)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          if (result.isValid) {
            this.helperService.message.success(result);
            this.gridRefreshEventEmitter.emit(null);
            setTimeout(() => { this.back(); }, 0);
          } else {
            this.helperService.message.error(result);
          }
          this.isLoading = false;
        });
    }
  }

  private loadSelects(): void {
    this.cgCultureService
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.selects.itemsCulture = items;
      });
  }

}
