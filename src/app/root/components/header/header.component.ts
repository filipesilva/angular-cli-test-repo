import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/services/auth.service';
import { SettingsService } from './../../../shared/services/settings.service';
import { RootStore } from './../../stores/root.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public cultureSelected;

  constructor(
    public authService: AuthService,
    private settingsService: SettingsService,
    private rootStore: RootStore) { }

  ngOnInit() {
    this.cultureSelected = this.settingsService.locale;
  }

  public logout(): void {
    this.authService.logout();
  }

  public changeLanguage(lang: string): void {
    this.settingsService.locale = lang;
    this.cultureSelected = lang;
    this.rootStore.loadMenuItem();
  }

}
