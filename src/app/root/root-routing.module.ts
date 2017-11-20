import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'not-found', component: NotFoundPageComponent, data: { title: 'Not found page' } },
  { path: 'access-denied', component: AccessDeniedPageComponent, data: { title: 'Access denied' } },
  { path: '**', component: NotFoundPageComponent, data: { title: 'Not found page' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
