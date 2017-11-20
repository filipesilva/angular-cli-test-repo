import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from './../base/base.component';
import { SettingsService } from './../../services/settings.service';
import { AuthService } from './../../services/auth.service';

@Component({
  templateUrl: './page.component.html'
})
export class PageComponent extends BaseComponent {

  public isLoading = false;

  constructor(
    public router: Router,
    authService: AuthService) {
    super(authService);
  }

  public checkPermission(key: string): void {
    const has = this.authService.hasPermission(key);
    if (!has) {
      this.router.navigate(['/access-denied']);
    }
  }

}
