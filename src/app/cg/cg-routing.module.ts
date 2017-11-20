import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './../shared/guards/auth.guard';

// Components
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { CulturePageComponent } from './pages/culture-page/culture-page.component';
import { FeaturePageComponent } from './pages/feature-page/feature-page.component';
import { MenuItemPageComponent } from './pages/menu-item-page/menu-item-page.component';
import { MenuItemCulturePageComponent } from './pages/menu-item-culture-page/menu-item-culture-page.component';
import { RolePageComponent } from './pages/role-page/role-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserPhotoPageComponent } from './pages/user-photo-page/user-photo-page.component';

const routes: Routes = [
  { path: 'authorization', component: AuthorizationPageComponent, canActivate: [AuthGuard], data: { title: 'Authorizations' } },
  { path: 'configuration', component: ConfigurationPageComponent, canActivate: [AuthGuard], data: { title: 'Configurations' } },
  { path: 'culture', component: CulturePageComponent, canActivate: [AuthGuard], data: { title: 'Cultures' } },
  { path: 'feature', component: FeaturePageComponent, canActivate: [AuthGuard], data: { title: 'Features' } },
  { path: 'menu-item', component: MenuItemPageComponent, canActivate: [AuthGuard], data: { title: 'Menu items' } },
  { path: 'menu-item-culture', component: MenuItemCulturePageComponent, canActivate: [AuthGuard], data: { title: 'Menu item cultures' } },
  { path: 'role', component: RolePageComponent, canActivate: [AuthGuard], data: { title: 'Roles' } },
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuard], data: { title: 'Users' } },
  { path: 'user-photo', component: UserPhotoPageComponent, canActivate: [AuthGuard], data: { title: 'Users photos' } },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CgRoutingModule { }
