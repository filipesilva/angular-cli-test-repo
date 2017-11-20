import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageComponent } from './../../../shared/components/page/page.component';
import { AuthService } from './../../../shared/services/auth.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html'
})
export class NotFoundPageComponent extends PageComponent {

  constructor(
    router: Router,
    authService: AuthService) {
      super(router, authService);
    }

}
