import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './../shared/guards/auth.guard';

// Components
import { Category10Mod9PageComponent } from './pages/category10-mod9-page/category10-mod9-page.component';
import { Category1Mod9PageComponent } from './pages/category1-mod9-page/category1-mod9-page.component';
import { Category2Mod9PageComponent } from './pages/category2-mod9-page/category2-mod9-page.component';
import { Category3Mod9PageComponent } from './pages/category3-mod9-page/category3-mod9-page.component';
import { Category4Mod9PageComponent } from './pages/category4-mod9-page/category4-mod9-page.component';
import { Category5Mod9PageComponent } from './pages/category5-mod9-page/category5-mod9-page.component';
import { Category6Mod9PageComponent } from './pages/category6-mod9-page/category6-mod9-page.component';
import { Category7Mod9PageComponent } from './pages/category7-mod9-page/category7-mod9-page.component';
import { Category8Mod9PageComponent } from './pages/category8-mod9-page/category8-mod9-page.component';
import { Category9Mod9PageComponent } from './pages/category9-mod9-page/category9-mod9-page.component';
import { Issue10Mod9PageComponent } from './pages/issue10-mod9-page/issue10-mod9-page.component';
import { Issue1Mod9PageComponent } from './pages/issue1-mod9-page/issue1-mod9-page.component';
import { Issue2Mod9PageComponent } from './pages/issue2-mod9-page/issue2-mod9-page.component';
import { Issue3Mod9PageComponent } from './pages/issue3-mod9-page/issue3-mod9-page.component';
import { Issue4Mod9PageComponent } from './pages/issue4-mod9-page/issue4-mod9-page.component';
import { Issue5Mod9PageComponent } from './pages/issue5-mod9-page/issue5-mod9-page.component';
import { Issue6Mod9PageComponent } from './pages/issue6-mod9-page/issue6-mod9-page.component';
import { Issue7Mod9PageComponent } from './pages/issue7-mod9-page/issue7-mod9-page.component';
import { Issue8Mod9PageComponent } from './pages/issue8-mod9-page/issue8-mod9-page.component';
import { Issue9Mod9PageComponent } from './pages/issue9-mod9-page/issue9-mod9-page.component';
import { Project10Mod9PageComponent } from './pages/project10-mod9-page/project10-mod9-page.component';
import { Project1Mod9PageComponent } from './pages/project1-mod9-page/project1-mod9-page.component';
import { Project2Mod9PageComponent } from './pages/project2-mod9-page/project2-mod9-page.component';
import { Project3Mod9PageComponent } from './pages/project3-mod9-page/project3-mod9-page.component';
import { Project4Mod9PageComponent } from './pages/project4-mod9-page/project4-mod9-page.component';
import { Project5Mod9PageComponent } from './pages/project5-mod9-page/project5-mod9-page.component';
import { Project6Mod9PageComponent } from './pages/project6-mod9-page/project6-mod9-page.component';
import { Project7Mod9PageComponent } from './pages/project7-mod9-page/project7-mod9-page.component';
import { Project8Mod9PageComponent } from './pages/project8-mod9-page/project8-mod9-page.component';
import { Project9Mod9PageComponent } from './pages/project9-mod9-page/project9-mod9-page.component';
import { Severity10Mod9PageComponent } from './pages/severity10-mod9-page/severity10-mod9-page.component';
import { Severity1Mod9PageComponent } from './pages/severity1-mod9-page/severity1-mod9-page.component';
import { Severity2Mod9PageComponent } from './pages/severity2-mod9-page/severity2-mod9-page.component';
import { Severity3Mod9PageComponent } from './pages/severity3-mod9-page/severity3-mod9-page.component';
import { Severity4Mod9PageComponent } from './pages/severity4-mod9-page/severity4-mod9-page.component';
import { Severity5Mod9PageComponent } from './pages/severity5-mod9-page/severity5-mod9-page.component';
import { Severity6Mod9PageComponent } from './pages/severity6-mod9-page/severity6-mod9-page.component';
import { Severity7Mod9PageComponent } from './pages/severity7-mod9-page/severity7-mod9-page.component';
import { Severity8Mod9PageComponent } from './pages/severity8-mod9-page/severity8-mod9-page.component';
import { Severity9Mod9PageComponent } from './pages/severity9-mod9-page/severity9-mod9-page.component';
import { Status10Mod9PageComponent } from './pages/status10-mod9-page/status10-mod9-page.component';
import { Status1Mod9PageComponent } from './pages/status1-mod9-page/status1-mod9-page.component';
import { Status2Mod9PageComponent } from './pages/status2-mod9-page/status2-mod9-page.component';
import { Status3Mod9PageComponent } from './pages/status3-mod9-page/status3-mod9-page.component';
import { Status4Mod9PageComponent } from './pages/status4-mod9-page/status4-mod9-page.component';
import { Status5Mod9PageComponent } from './pages/status5-mod9-page/status5-mod9-page.component';
import { Status6Mod9PageComponent } from './pages/status6-mod9-page/status6-mod9-page.component';
import { Status7Mod9PageComponent } from './pages/status7-mod9-page/status7-mod9-page.component';
import { Status8Mod9PageComponent } from './pages/status8-mod9-page/status8-mod9-page.component';
import { Status9Mod9PageComponent } from './pages/status9-mod9-page/status9-mod9-page.component';

const routes: Routes = [
  { path: 'category10-mod9', component: Category10Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category10' } },
  { path: 'category1-mod9', component: Category1Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category1' } },
  { path: 'category2-mod9', component: Category2Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category2' } },
  { path: 'category3-mod9', component: Category3Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category3' } },
  { path: 'category4-mod9', component: Category4Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category4' } },
  { path: 'category5-mod9', component: Category5Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category5' } },
  { path: 'category6-mod9', component: Category6Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category6' } },
  { path: 'category7-mod9', component: Category7Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category7' } },
  { path: 'category8-mod9', component: Category8Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category8' } },
  { path: 'category9-mod9', component: Category9Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Category9' } },
  { path: 'issue10-mod9', component: Issue10Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue10' } },
  { path: 'issue1-mod9', component: Issue1Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue1' } },
  { path: 'issue2-mod9', component: Issue2Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue2' } },
  { path: 'issue3-mod9', component: Issue3Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue3' } },
  { path: 'issue4-mod9', component: Issue4Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue4' } },
  { path: 'issue5-mod9', component: Issue5Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue5' } },
  { path: 'issue6-mod9', component: Issue6Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue6' } },
  { path: 'issue7-mod9', component: Issue7Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue7' } },
  { path: 'issue8-mod9', component: Issue8Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue8' } },
  { path: 'issue9-mod9', component: Issue9Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Issue9' } },
  { path: 'project10-mod9', component: Project10Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project10' } },
  { path: 'project1-mod9', component: Project1Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project1' } },
  { path: 'project2-mod9', component: Project2Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project2' } },
  { path: 'project3-mod9', component: Project3Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project3' } },
  { path: 'project4-mod9', component: Project4Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project4' } },
  { path: 'project5-mod9', component: Project5Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project5' } },
  { path: 'project6-mod9', component: Project6Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project6' } },
  { path: 'project7-mod9', component: Project7Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project7' } },
  { path: 'project8-mod9', component: Project8Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project8' } },
  { path: 'project9-mod9', component: Project9Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Project9' } },
  { path: 'severity10-mod9', component: Severity10Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity10' } },
  { path: 'severity1-mod9', component: Severity1Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity1' } },
  { path: 'severity2-mod9', component: Severity2Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity2' } },
  { path: 'severity3-mod9', component: Severity3Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity3' } },
  { path: 'severity4-mod9', component: Severity4Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity4' } },
  { path: 'severity5-mod9', component: Severity5Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity5' } },
  { path: 'severity6-mod9', component: Severity6Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity6' } },
  { path: 'severity7-mod9', component: Severity7Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity7' } },
  { path: 'severity8-mod9', component: Severity8Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity8' } },
  { path: 'severity9-mod9', component: Severity9Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Severity9' } },
  { path: 'status10-mod9', component: Status10Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status10' } },
  { path: 'status1-mod9', component: Status1Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status1' } },
  { path: 'status2-mod9', component: Status2Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status2' } },
  { path: 'status3-mod9', component: Status3Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status3' } },
  { path: 'status4-mod9', component: Status4Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status4' } },
  { path: 'status5-mod9', component: Status5Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status5' } },
  { path: 'status6-mod9', component: Status6Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status6' } },
  { path: 'status7-mod9', component: Status7Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status7' } },
  { path: 'status8-mod9', component: Status8Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status8' } },
  { path: 'status9-mod9', component: Status9Mod9PageComponent, canActivate: [AuthGuard], data: { title: 'Status9' } },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod9RoutingModule { }
