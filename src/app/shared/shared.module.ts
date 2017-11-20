import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SelectModule } from 'ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { LaddaModule } from 'angular2-ladda';
import { CustomFormsModule } from 'ng2-validation';

import { SharedRoutingModule } from './shared-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { HelperService } from './services/helper.service';
import { SettingsService } from './services/settings.service';
import { FileService } from './services/file.service';
import { CommunicationService } from './services/communication.service';
import { TranslateLoaderFactory } from './factories/translate-loader.factory';
import { LocaleFactory } from './factories/locale.factory';
import { CustomPreloadingStrategy } from './configurations/custom-preloading.strategy';
import { NgbDateCustomParserFormatter } from './i18n/ngb-date-custom-parser-formatter';
import { NgbDateCustomI18n } from './i18n/ngb-date-custom-i18n';

import { BaseComponent } from './components/base/base.component';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { GridPaginationComponent } from './components/grid-pagination/grid-pagination.component';
import { PageComponent } from './components/page/page.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalFilterComponent } from './components/modal-filter/modal-filter.component';
import { FileComponent } from './components/file/file.component';
import { DecimalDirective } from './directives/decimal.directive';
import { IntegerDirective } from './directives/integer.directive';
import { HtmlEditorDirective } from './directives/html-editor.directive';

import { UserResolver } from './resolvers/user.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    LaddaModule,
    BsDropdownModule,
    ModalModule,
    TabsModule,
    ToastModule,
    SelectModule,
    NgxMaskModule,
    CustomFormsModule,
    SharedRoutingModule
  ],
  declarations: [
    BaseComponent,
    FormComponent,
    GridComponent,
    GridPaginationComponent,
    PageComponent,
    LoadingIndicatorComponent,
    ModalDeleteComponent,
    ModalFilterComponent,
    FileComponent,
    DecimalDirective,
    IntegerDirective,
    HtmlEditorDirective
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    BsDropdownModule,
    ModalModule,
    TabsModule,
    LaddaModule,
    ToastModule,
    SelectModule,
    NgxMaskModule,
    CustomFormsModule,
    BaseComponent,
    FormComponent,
    GridComponent,
    GridPaginationComponent,
    PageComponent,
    LoadingIndicatorComponent,
    ModalDeleteComponent,
    ModalFilterComponent,
    FileComponent,
    DecimalDirective,
    IntegerDirective,
    HtmlEditorDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthGuard,
        AuthService,
        SettingsService,
        HelperService,
        FileService,
        CommunicationService,
        CustomPreloadingStrategy,
        UserResolver
      ]
    };
  }
}
