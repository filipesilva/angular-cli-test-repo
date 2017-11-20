import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CgRoutingModule } from './cg-routing.module';

// Components
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { AuthorizationGridComponent } from './pages/authorization-page/components/authorization-grid/authorization-grid.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { ConfigurationGridComponent } from './pages/configuration-page/components/configuration-grid/configuration-grid.component';
import { ConfigurationFormComponent } from './pages/configuration-page/components/configuration-form/configuration-form.component';
import { CulturePageComponent } from './pages/culture-page/culture-page.component';
import { CultureGridComponent } from './pages/culture-page/components/culture-grid/culture-grid.component';
import { CultureFormComponent } from './pages/culture-page/components/culture-form/culture-form.component';
import { FeaturePageComponent } from './pages/feature-page/feature-page.component';
import { FeatureGridComponent } from './pages/feature-page/components/feature-grid/feature-grid.component';
import { FeatureFormComponent } from './pages/feature-page/components/feature-form/feature-form.component';
import { MenuItemPageComponent } from './pages/menu-item-page/menu-item-page.component';
import { MenuItemGridComponent } from './pages/menu-item-page/components/menu-item-grid/menu-item-grid.component';
import { MenuItemFormComponent } from './pages/menu-item-page/components/menu-item-form/menu-item-form.component';
import { MenuItemCulturePageComponent } from './pages/menu-item-culture-page/menu-item-culture-page.component';
import { MenuItemCultureGridComponent } from './pages/menu-item-culture-page/components/menu-item-culture-grid/menu-item-culture-grid.component';
import { MenuItemCultureFormComponent } from './pages/menu-item-culture-page/components/menu-item-culture-form/menu-item-culture-form.component';
import { RolePageComponent } from './pages/role-page/role-page.component';
import { RoleGridComponent } from './pages/role-page/components/role-grid/role-grid.component';
import { RoleFormComponent } from './pages/role-page/components/role-form/role-form.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserGridComponent } from './pages/user-page/components/user-grid/user-grid.component';
import { UserFormComponent } from './pages/user-page/components/user-form/user-form.component';
import { UserPhotoPageComponent } from './pages/user-photo-page/user-photo-page.component';
import { UserPhotoGridComponent } from './pages/user-photo-page/components/user-photo-grid/user-photo-grid.component';
import { UserPhotoFormComponent } from './pages/user-photo-page/components/user-photo-form/user-photo-form.component';

@NgModule({
  imports: [
    SharedModule,
    CgRoutingModule,
  ],
  declarations: [
    AuthorizationPageComponent,
    AuthorizationGridComponent,
    ConfigurationPageComponent,
    ConfigurationGridComponent,
    ConfigurationFormComponent,
    CulturePageComponent,
    CultureGridComponent,
    CultureFormComponent,
    FeaturePageComponent,
    FeatureGridComponent,
    FeatureFormComponent,
    MenuItemPageComponent,
    MenuItemGridComponent,
    MenuItemFormComponent,
    MenuItemCulturePageComponent,
    MenuItemCultureGridComponent,
    MenuItemCultureFormComponent,
    RolePageComponent,
    RoleGridComponent,
    RoleFormComponent,
    UserPageComponent,
    UserGridComponent,
    UserFormComponent,
    UserPhotoPageComponent,
    UserPhotoGridComponent,
    UserPhotoFormComponent
  ],
  exports: [
  ]
})
export class CgModule { }
