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

import { RoleService } from './../../../../services/role.service';
import { UserService } from './../../../../services/user.service';
import { User } from './../../../../models/user';

@Component({
  selector: 'app-cg-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent extends FormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;

  @Input() newRecord: boolean;
  @Input() item: User;

  @Output() gridRefreshEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    authService: AuthService,
    settingsService: SettingsService,
    private helperService: HelperService,
    private roleService: RoleService,
    private userService: UserService) {
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
      idUser: [this.item.idUser, []],
      firstName: [this.item.firstName, [Validators.required]],
      lastName: [this.item.lastName, []],
      username: [this.item.username, [Validators.required]],
      email: [this.item.email, [Validators.required, CustomValidators.email]],
      password: [this.item.password, [Validators.required]],
      emailConfirmed: [this.item.emailConfirmed, []],
      enabled: [this.item.enabled, []],
      blocked: [this.item.blocked, []],
      roles: [((this.item.roles && this.item.roles.map(x => x.idRole)) || [])]
    });
  }

  public back(): void {
    this.router.navigate(['/cg/user']);
  }

  public save(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const item = this.formGroup.value;
      this.userService
        .save(this.newRecord, item)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          if (result.isValid) {
            this.helperService.message.success(result);
            this.gridRefreshEventEmitter.emit(null);
            if (this.newRecord) {
              this.formGroup.get('idUser').setValue(result.data);
              this.router.navigate(['/cg/user', { id: result.data }]);
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
    this.roleService
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.selects.itemsRole = items;
      });
  }

}
