import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { LaddaModule } from 'angular2-ladda';

import { TranslateLoaderFactory } from './shared/factories/translate-loader.factory';
import { NgbDateCustomParserFormatter } from './shared/i18n/ngb-date-custom-parser-formatter';
import { NgbDateCustomI18n } from './shared/i18n/ngb-date-custom-i18n';
import { SettingsService } from './shared/services/settings.service';
import { LocaleFactory } from './shared/factories/locale.factory';

import { SharedModule } from './shared/shared.module';
import { RootModule } from './root/root.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderFactory),
        deps: [HttpClient]
      }
    }),
    LaddaModule.forRoot({
      style: 'zoom-in'
    }),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    ToastModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule,
    RootModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: LocaleFactory
    },
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateCustomParserFormatter
    },
    {
      provide: NgbDatepickerI18n,
      useClass: NgbDateCustomI18n
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
