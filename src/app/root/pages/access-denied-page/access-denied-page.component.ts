import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageComponent } from './../../../shared/components/page/page.component';
import { AuthService } from './../../../shared/services/auth.service';

@Component({
  selector: 'app-access-denied-page',
  templateUrl: './access-denied-page.component.html'
})
export class AccessDeniedPageComponent extends PageComponent {

  constructor(
    router: Router,
    authService: AuthService) {
    super(router, authService);
  }

}
