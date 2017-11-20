import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPreloadingStrategy } from './shared/configurations/custom-preloading.strategy';
import { UserResolver } from './shared/resolvers/user.resolver';

// Components
import { HomePageComponent } from './root/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './root/pages/not-found-page/not-found-page.component';
import { FullLayoutComponent } from './root/components/layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './root/components/layouts/simple-layout/simple-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'account',
    component: SimpleLayoutComponent,
    data: { title: 'Account' },
    children: [
      { path: '', loadChildren: 'app/account/account.module#AccountModule', data: { title: null, preload: true } }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: 'Home' },
    children: [
      { path: 'cg', loadChildren: 'app/cg/cg.module#CgModule', resolve: { user: UserResolver }, data: { title: 'Cg', link: false, preload: true } },
      { path: 'mod1', loadChildren: 'app/mod1/mod1.module#Mod1Module', resolve: { user: UserResolver }, data: { title: 'Mod1', link: false, preload: true } },
      { path: 'mod10', loadChildren: 'app/mod10/mod10.module#Mod10Module', resolve: { user: UserResolver }, data: { title: 'Mod10', link: false, preload: true } },
      { path: 'mod2', loadChildren: 'app/mod2/mod2.module#Mod2Module', resolve: { user: UserResolver }, data: { title: 'Mod2', link: false, preload: true } },
      { path: 'mod3', loadChildren: 'app/mod3/mod3.module#Mod3Module', resolve: { user: UserResolver }, data: { title: 'Mod3', link: false, preload: true } },
      { path: 'mod4', loadChildren: 'app/mod4/mod4.module#Mod4Module', resolve: { user: UserResolver }, data: { title: 'Mod4', link: false, preload: true } },
      { path: 'mod5', loadChildren: 'app/mod5/mod5.module#Mod5Module', resolve: { user: UserResolver }, data: { title: 'Mod5', link: false, preload: true } },
      { path: 'mod6', loadChildren: 'app/mod6/mod6.module#Mod6Module', resolve: { user: UserResolver }, data: { title: 'Mod6', link: false, preload: true } },
      { path: 'mod7', loadChildren: 'app/mod7/mod7.module#Mod7Module', resolve: { user: UserResolver }, data: { title: 'Mod7', link: false, preload: true } },
      { path: 'mod8', loadChildren: 'app/mod8/mod8.module#Mod8Module', resolve: { user: UserResolver }, data: { title: 'Mod8', link: false, preload: true } },
      { path: 'mod9', loadChildren: 'app/mod9/mod9.module#Mod9Module', resolve: { user: UserResolver }, data: { title: 'Mod9', link: false, preload: true } },
      { path: '', loadChildren: 'app/root/root.module#RootModule', data: { title: null, preload: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
