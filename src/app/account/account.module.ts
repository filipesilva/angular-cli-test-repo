import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

// Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PasswordForgotPageComponent } from './pages/password-forgot-page/password-forgot-page.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    PasswordForgotPageComponent,
    PasswordResetPageComponent
  ]
})
export class AccountModule { }
