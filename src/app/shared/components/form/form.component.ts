import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseComponent } from './../base/base.component';
import { SettingsService } from './../../services/settings.service';
import { AuthService } from './../../services/auth.service';

@Component({
  templateUrl: './form.component.html'
})
export class FormComponent extends BaseComponent {

  public selects: any = {};
  public submitted = false;
  public isLoading = false;

  protected settingsService: SettingsService;

  constructor(
    authService: AuthService,
    settingsService: SettingsService) {
    super(authService);
    this.settingsService = settingsService;
  }

  public hasError(control: AbstractControl, path: string, errorCode?: string): boolean {
    const names = path.split('.');
    for (const name of names) {
      control = control.get(name);
    }

    const _hasError = control.hasError(errorCode);
    if (_hasError && (control.touched || this.submitted)) {
      return true;
    }

    return false;
  }

  public isInvalid(control: AbstractControl, path: string): boolean {
    const names = path.split('.');
    for (const name of names) {
      control = control.get(name);
    }

    const _invalid = control.invalid;
    if (_invalid && (control.touched || this.submitted)) {
      return true;
    }

    return false;
  }

  convertDateToString(date: Date): string {
    let stringDate = '';
    if (date) {
      date = new Date(date);
      if (this.settingsService.dateFormat === 'mm/dd/yyyy') {
        stringDate += this.padNumber(date.getMonth() + 1) + '/';
        stringDate += this.padNumber(date.getDate()) + '/';
      } else {
        stringDate += this.padNumber(date.getDate()) + '/';
        stringDate += this.padNumber(date.getMonth() + 1) + '/';
      }
      stringDate += date.getFullYear();
    }

    return stringDate;
  }

  private padNumber(value: number) {
    return `0${value}`.slice(-2);
  }

}
