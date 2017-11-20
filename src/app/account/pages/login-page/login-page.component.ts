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

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent extends FormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;
  public result: NotificationResult;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    authService: AuthService,
    settingsService: SettingsService) {
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
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public login(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const user = this.formGroup.value;
      this.authService
        .logon(user)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          if (!result.isValid) {
            this.result = result;
            this.isLoading = false;
          }
        });
    }
  }

  public forgot(): void {
    this.router.navigate(['/account/password-forgot']);
  }

  public register(): void {
    this.router.navigate(['/account/register']);
  }
}
