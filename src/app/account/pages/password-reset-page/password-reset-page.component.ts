import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CustomValidators } from 'ng2-validation';
import { AuthService } from './../../../shared/services/auth.service';
import { SettingsService } from './../../../shared/services/settings.service';
import { FormComponent } from './../../../shared/components/form/form.component';

import { NotificationResult } from './../../../shared/models/notification-result';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  providers: [
    UserService
  ]
})
export class PasswordResetPageComponent extends FormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;
  public result: NotificationResult;

  private securityKey: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    authService: AuthService,
    settingsService: SettingsService,
    private userService: UserService) {
    super(authService, settingsService);
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.buildFormGroup();
    this.subscription = this.activatedRoute.params.subscribe(
      param => {
        this.securityKey = param['id'];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private buildFormGroup(): void {
    const password = new FormControl('', [Validators.required]);
    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      password,
      repeatPassword: ['', [Validators.required, CustomValidators.equalTo(password)]]
    });
  }

  public reset(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const user = this.formGroup.value;
      user.securityKey = this.securityKey;
      this.userService
        .newPassword(user)
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
