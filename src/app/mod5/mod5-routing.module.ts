import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './../shared/guards/auth.guard';

// Components
import { Category10Mod5PageComponent } from './pages/category10-mod5-page/category10-mod5-page.component';
import { Category1Mod5PageComponent } from './pages/category1-mod5-page/category1-mod5-page.component';
import { Category2Mod5PageComponent } from './pages/category2-mod5-page/category2-mod5-page.component';
import { Category3Mod5PageComponent } from './pages/category3-mod5-page/category3-mod5-page.component';
import { Category4Mod5PageComponent } from './pages/category4-mod5-page/category4-mod5-page.component';
import { Category5Mod5PageComponent } from './pages/category5-mod5-page/category5-mod5-page.component';
import { Category6Mod5PageComponent } from './pages/category6-mod5-page/category6-mod5-page.component';
import { Category7Mod5PageComponent } from './pages/category7-mod5-page/category7-mod5-page.component';
import { Category8Mod5PageComponent } from './pages/category8-mod5-page/category8-mod5-page.component';
import { Category9Mod5PageComponent } from './pages/category9-mod5-page/category9-mod5-page.component';
import { Issue10Mod5PageComponent } from './pages/issue10-mod5-page/issue10-mod5-page.component';
import { Issue1Mod5PageComponent } from './pages/issue1-mod5-page/issue1-mod5-page.component';
import { Issue2Mod5PageComponent } from './pages/issue2-mod5-page/issue2-mod5-page.component';
import { Issue3Mod5PageComponent } from './pages/issue3-mod5-page/issue3-mod5-page.component';
import { Issue4Mod5PageComponent } from './pages/issue4-mod5-page/issue4-mod5-page.component';
import { Issue5Mod5PageComponent } from './pages/issue5-mod5-page/issue5-mod5-page.component';
import { Issue6Mod5PageComponent } from './pages/issue6-mod5-page/issue6-mod5-page.component';
import { Issue7Mod5PageComponent } from './pages/issue7-mod5-page/issue7-mod5-page.component';
import { Issue8Mod5PageComponent } from './pages/issue8-mod5-page/issue8-mod5-page.component';
import { Issue9Mod5PageComponent } from './pages/issue9-mod5-page/issue9-mod5-page.component';
import { Project10Mod5PageComponent } from './pages/project10-mod5-page/project10-mod5-page.component';
import { Project1Mod5PageComponent } from './pages/project1-mod5-page/project1-mod5-page.component';
import { Project2Mod5PageComponent } from './pages/project2-mod5-page/project2-mod5-page.component';
import { Project3Mod5PageComponent } from './pages/project3-mod5-page/project3-mod5-page.component';
import { Project4Mod5PageComponent } from './pages/project4-mod5-page/project4-mod5-page.component';
import { Project5Mod5PageComponent } from './pages/project5-mod5-page/project5-mod5-page.component';
import { Project6Mod5PageComponent } from './pages/project6-mod5-page/project6-mod5-page.component';
import { Project7Mod5PageComponent } from './pages/project7-mod5-page/project7-mod5-page.component';
import { Project8Mod5PageComponent } from './pages/project8-mod5-page/project8-mod5-page.component';
import { Project9Mod5PageComponent } from './pages/project9-mod5-page/project9-mod5-page.component';
import { Severity10Mod5PageComponent } from './pages/severity10-mod5-page/severity10-mod5-page.component';
import { Severity1Mod5PageComponent } from './pages/severity1-mod5-page/severity1-mod5-page.component';
import { Severity2Mod5PageComponent } from './pages/severity2-mod5-page/severity2-mod5-page.component';
import { Severity3Mod5PageComponent } from './pages/severity3-mod5-page/severity3-mod5-page.component';
import { Severity4Mod5PageComponent } from './pages/severity4-mod5-page/severity4-mod5-page.component';
import { Severity5Mod5PageComponent } from './pages/severity5-mod5-page/severity5-mod5-page.component';
import { Severity6Mod5PageComponent } from './pages/severity6-mod5-page/severity6-mod5-page.component';
import { Severity7Mod5PageComponent } from './pages/severity7-mod5-page/severity7-mod5-page.component';
import { Severity8Mod5PageComponent } from './pages/severity8-mod5-page/severity8-mod5-page.component';
import { Severity9Mod5PageComponent } from './pages/severity9-mod5-page/severity9-mod5-page.component';
import { Status10Mod5PageComponent } from './pages/status10-mod5-page/status10-mod5-page.component';
import { Status1Mod5PageComponent } from './pages/status1-mod5-page/status1-mod5-page.component';
import { Status2Mod5PageComponent } from './pages/status2-mod5-page/status2-mod5-page.component';
import { Status3Mod5PageComponent } from './pages/status3-mod5-page/status3-mod5-page.component';
import { Status4Mod5PageComponent } from './pages/status4-mod5-page/status4-mod5-page.component';
import { Status5Mod5PageComponent } from './pages/status5-mod5-page/status5-mod5-page.component';
import { Status6Mod5PageComponent } from './pages/status6-mod5-page/status6-mod5-page.component';
import { Status7Mod5PageComponent } from './pages/status7-mod5-page/status7-mod5-page.component';
import { Status8Mod5PageComponent } from './pages/status8-mod5-page/status8-mod5-page.component';
import { Status9Mod5PageComponent } from './pages/status9-mod5-page/status9-mod5-page.component';

const routes: Routes = [
  { path: 'category10-mod5', component: Category10Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category10' } },
  { path: 'category1-mod5', component: Category1Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category1' } },
  { path: 'category2-mod5', component: Category2Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category2' } },
  { path: 'category3-mod5', component: Category3Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category3' } },
  { path: 'category4-mod5', component: Category4Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category4' } },
  { path: 'category5-mod5', component: Category5Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category5' } },
  { path: 'category6-mod5', component: Category6Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category6' } },
  { path: 'category7-mod5', component: Category7Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category7' } },
  { path: 'category8-mod5', component: Category8Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category8' } },
  { path: 'category9-mod5', component: Category9Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Category9' } },
  { path: 'issue10-mod5', component: Issue10Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue10' } },
  { path: 'issue1-mod5', component: Issue1Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue1' } },
  { path: 'issue2-mod5', component: Issue2Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue2' } },
  { path: 'issue3-mod5', component: Issue3Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue3' } },
  { path: 'issue4-mod5', component: Issue4Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue4' } },
  { path: 'issue5-mod5', component: Issue5Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue5' } },
  { path: 'issue6-mod5', component: Issue6Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue6' } },
  { path: 'issue7-mod5', component: Issue7Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue7' } },
  { path: 'issue8-mod5', component: Issue8Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue8' } },
  { path: 'issue9-mod5', component: Issue9Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Issue9' } },
  { path: 'project10-mod5', component: Project10Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project10' } },
  { path: 'project1-mod5', component: Project1Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project1' } },
  { path: 'project2-mod5', component: Project2Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project2' } },
  { path: 'project3-mod5', component: Project3Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project3' } },
  { path: 'project4-mod5', component: Project4Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project4' } },
  { path: 'project5-mod5', component: Project5Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project5' } },
  { path: 'project6-mod5', component: Project6Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project6' } },
  { path: 'project7-mod5', component: Project7Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project7' } },
  { path: 'project8-mod5', component: Project8Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project8' } },
  { path: 'project9-mod5', component: Project9Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Project9' } },
  { path: 'severity10-mod5', component: Severity10Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity10' } },
  { path: 'severity1-mod5', component: Severity1Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity1' } },
  { path: 'severity2-mod5', component: Severity2Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity2' } },
  { path: 'severity3-mod5', component: Severity3Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity3' } },
  { path: 'severity4-mod5', component: Severity4Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity4' } },
  { path: 'severity5-mod5', component: Severity5Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity5' } },
  { path: 'severity6-mod5', component: Severity6Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity6' } },
  { path: 'severity7-mod5', component: Severity7Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity7' } },
  { path: 'severity8-mod5', component: Severity8Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity8' } },
  { path: 'severity9-mod5', component: Severity9Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Severity9' } },
  { path: 'status10-mod5', component: Status10Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status10' } },
  { path: 'status1-mod5', component: Status1Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status1' } },
  { path: 'status2-mod5', component: Status2Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status2' } },
  { path: 'status3-mod5', component: Status3Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status3' } },
  { path: 'status4-mod5', component: Status4Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status4' } },
  { path: 'status5-mod5', component: Status5Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status5' } },
  { path: 'status6-mod5', component: Status6Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status6' } },
  { path: 'status7-mod5', component: Status7Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status7' } },
  { path: 'status8-mod5', component: Status8Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status8' } },
  { path: 'status9-mod5', component: Status9Mod5PageComponent, canActivate: [AuthGuard], data: { title: 'Status9' } },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod5RoutingModule { }
