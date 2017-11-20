import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RootRoutingModule } from './root-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Directives
import { NAV_DROPDOWN_DIRECTIVES } from './directives/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './directives/sidebar.directive';
import { AsideToggleDirective } from './directives/aside.directive';

// Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullLayoutComponent } from './components/layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './components/layouts/simple-layout/simple-layout.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';

// Services
import { RootStore } from './stores/root.store';
import { MenuItemService } from './../cg/services/menu-item.service';

@NgModule({
  imports: [
    SharedModule,
    RootRoutingModule,
    ChartsModule
  ],
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    BreadcrumbComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    ErrorPageComponent,
    SidebarComponent,
    AccessDeniedPageComponent
  ],
  providers: [
    RootStore,
    MenuItemService
  ]
})
export class RootModule { }
