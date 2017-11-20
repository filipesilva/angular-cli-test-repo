import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  templateUrl: './base.component.html'
})
export class BaseComponent {

  constructor(
    public authService: AuthService) {

  }

  public hasPermission(key: string): boolean {
    return this.authService.hasPermission(key);
  }

  public toString(value): string {
    if (value !== null && value !== undefined) {
      return String(value);
    }

    return value;
  }

}
