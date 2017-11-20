import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../services/auth.service';
import { Permission } from './../models/permission';

@Injectable()
export class UserResolver implements Resolve<Observable<Permission[]>> {

  constructor(
    private authService: AuthService) {
  }

  resolve(): Observable<Permission[]> {
    return this.authService.getPermissions();
  }

}
