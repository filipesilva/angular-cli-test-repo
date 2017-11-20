import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from './shared/services/settings.service';
import { AuthService } from './shared/services/auth.service';
import { CommunicationService } from './shared/services/communication.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private translateService: TranslateService,
    private settingsService: SettingsService,
    private authService: AuthService,
    public communicationService: CommunicationService,
    toastr: ToastsManager,
    vcr: ViewContainerRef) {
    translateService.setDefaultLang(settingsService.locale);
    translateService.use(settingsService.locale);
    toastr.setRootViewContainerRef(vcr);
    this.authService.startupTokenAuthentication();
  }

}
