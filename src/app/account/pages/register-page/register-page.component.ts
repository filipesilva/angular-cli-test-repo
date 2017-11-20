import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  providers: [
    UserService
  ]
})
export class RegisterPageComponent extends FormComponent implements OnInit, OnDestroy {

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
    const password = new FormControl('', [Validators.required]);
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, CustomValidators.email]],
      password,
      repeatPassword: ['', [Validators.required, CustomValidators.equalTo(password)]]
    });
  }

  public register(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const newUser = this.formGroup.value;
      this.userService
        .register(newUser)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          if (result.isValid) {
            this.logon({ username: newUser.username, password: newUser.password });
          } else {
            this.result = result;
          }
        });
    }
  }

  private logon(user): void {
    this.authService
    .logon(user)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(result => {
      if (result.isValid) {
        this.router.navigate(['/']);
      } else {
        this.result = result;
      }
      this.isLoading = false;
    });
  }

  public login(): void {
    this.router.navigate(['/account/login']);
  }

}
