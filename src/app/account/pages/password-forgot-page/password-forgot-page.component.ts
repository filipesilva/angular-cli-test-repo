import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CustomValidators } from 'ng2-validation';
import { AuthService } from './../../../shared/services/auth.service';
import { SettingsService } from './../../../shared/services/settings.service';
import { FormComponent } from './../../../shared/components/form/form.component';

import { NotificationResult } from './../../../shared/models/notification-result';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-password-forgot-page',
  templateUrl: './password-forgot-page.component.html',
  providers: [
    UserService
  ]
})
export class PasswordForgotPageComponent extends FormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;
  public result: NotificationResult;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    authService: AuthService,
    settingsService: SettingsService,
    private userService: UserService) {
    super(authService, settingsService);
    this.isLoading = false;
  }

  ngOnInit() {
    this.buildFormGroup();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, CustomValidators.email]]
    });
  }

  public send(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const user = this.formGroup.value;
      this.userService
        .resetPassword(user.email)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          this.result = result;
          this.isLoading = false;
        });
    }
  }

  public login(): void {
    this.router.navigate(['/account/login']);
  }

  public register(): void {
    this.router.navigate(['/account/register']);
  }

}
