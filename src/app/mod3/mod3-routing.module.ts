import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './../shared/guards/auth.guard';

// Components
import { Category10Mod3PageComponent } from './pages/category10-mod3-page/category10-mod3-page.component';
import { Category1Mod3PageComponent } from './pages/category1-mod3-page/category1-mod3-page.component';
import { Category2Mod3PageComponent } from './pages/category2-mod3-page/category2-mod3-page.component';
import { Category3Mod3PageComponent } from './pages/category3-mod3-page/category3-mod3-page.component';
import { Category4Mod3PageComponent } from './pages/category4-mod3-page/category4-mod3-page.component';
import { Category5Mod3PageComponent } from './pages/category5-mod3-page/category5-mod3-page.component';
import { Category6Mod3PageComponent } from './pages/category6-mod3-page/category6-mod3-page.component';
import { Category7Mod3PageComponent } from './pages/category7-mod3-page/category7-mod3-page.component';
import { Category8Mod3PageComponent } from './pages/category8-mod3-page/category8-mod3-page.component';
import { Category9Mod3PageComponent } from './pages/category9-mod3-page/category9-mod3-page.component';
import { Issue10Mod3PageComponent } from './pages/issue10-mod3-page/issue10-mod3-page.component';
import { Issue1Mod3PageComponent } from './pages/issue1-mod3-page/issue1-mod3-page.component';
import { Issue2Mod3PageComponent } from './pages/issue2-mod3-page/issue2-mod3-page.component';
import { Issue3Mod3PageComponent } from './pages/issue3-mod3-page/issue3-mod3-page.component';
import { Issue4Mod3PageComponent } from './pages/issue4-mod3-page/issue4-mod3-page.component';
import { Issue5Mod3PageComponent } from './pages/issue5-mod3-page/issue5-mod3-page.component';
import { Issue6Mod3PageComponent } from './pages/issue6-mod3-page/issue6-mod3-page.component';
import { Issue7Mod3PageComponent } from './pages/issue7-mod3-page/issue7-mod3-page.component';
import { Issue8Mod3PageComponent } from './pages/issue8-mod3-page/issue8-mod3-page.component';
import { Issue9Mod3PageComponent } from './pages/issue9-mod3-page/issue9-mod3-page.component';
import { Project10Mod3PageComponent } from './pages/project10-mod3-page/project10-mod3-page.component';
import { Project1Mod3PageComponent } from './pages/project1-mod3-page/project1-mod3-page.component';
import { Project2Mod3PageComponent } from './pages/project2-mod3-page/project2-mod3-page.component';
import { Project3Mod3PageComponent } from './pages/project3-mod3-page/project3-mod3-page.component';
import { Project4Mod3PageComponent } from './pages/project4-mod3-page/project4-mod3-page.component';
import { Project5Mod3PageComponent } from './pages/project5-mod3-page/project5-mod3-page.component';
import { Project6Mod3PageComponent } from './pages/project6-mod3-page/project6-mod3-page.component';
import { Project7Mod3PageComponent } from './pages/project7-mod3-page/project7-mod3-page.component';
import { Project8Mod3PageComponent } from './pages/project8-mod3-page/project8-mod3-page.component';
import { Project9Mod3PageComponent } from './pages/project9-mod3-page/project9-mod3-page.component';
import { Severity10Mod3PageComponent } from './pages/severity10-mod3-page/severity10-mod3-page.component';
import { Severity1Mod3PageComponent } from './pages/severity1-mod3-page/severity1-mod3-page.component';
import { Severity2Mod3PageComponent } from './pages/severity2-mod3-page/severity2-mod3-page.component';
import { Severity3Mod3PageComponent } from './pages/severity3-mod3-page/severity3-mod3-page.component';
import { Severity4Mod3PageComponent } from './pages/severity4-mod3-page/severity4-mod3-page.component';
import { Severity5Mod3PageComponent } from './pages/severity5-mod3-page/severity5-mod3-page.component';
import { Severity6Mod3PageComponent } from './pages/severity6-mod3-page/severity6-mod3-page.component';
import { Severity7Mod3PageComponent } from './pages/severity7-mod3-page/severity7-mod3-page.component';
import { Severity8Mod3PageComponent } from './pages/severity8-mod3-page/severity8-mod3-page.component';
import { Severity9Mod3PageComponent } from './pages/severity9-mod3-page/severity9-mod3-page.component';
import { Status10Mod3PageComponent } from './pages/status10-mod3-page/status10-mod3-page.component';
import { Status1Mod3PageComponent } from './pages/status1-mod3-page/status1-mod3-page.component';
import { Status2Mod3PageComponent } from './pages/status2-mod3-page/status2-mod3-page.component';
import { Status3Mod3PageComponent } from './pages/status3-mod3-page/status3-mod3-page.component';
import { Status4Mod3PageComponent } from './pages/status4-mod3-page/status4-mod3-page.component';
import { Status5Mod3PageComponent } from './pages/status5-mod3-page/status5-mod3-page.component';
import { Status6Mod3PageComponent } from './pages/status6-mod3-page/status6-mod3-page.component';
import { Status7Mod3PageComponent } from './pages/status7-mod3-page/status7-mod3-page.component';
import { Status8Mod3PageComponent } from './pages/status8-mod3-page/status8-mod3-page.component';
import { Status9Mod3PageComponent } from './pages/status9-mod3-page/status9-mod3-page.component';

const routes: Routes = [
  { path: 'category10-mod3', component: Category10Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category10' } },
  { path: 'category1-mod3', component: Category1Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category1' } },
  { path: 'category2-mod3', component: Category2Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category2' } },
  { path: 'category3-mod3', component: Category3Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category3' } },
  { path: 'category4-mod3', component: Category4Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category4' } },
  { path: 'category5-mod3', component: Category5Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category5' } },
  { path: 'category6-mod3', component: Category6Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category6' } },
  { path: 'category7-mod3', component: Category7Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category7' } },
  { path: 'category8-mod3', component: Category8Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category8' } },
  { path: 'category9-mod3', component: Category9Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Category9' } },
  { path: 'issue10-mod3', component: Issue10Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue10' } },
  { path: 'issue1-mod3', component: Issue1Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue1' } },
  { path: 'issue2-mod3', component: Issue2Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue2' } },
  { path: 'issue3-mod3', component: Issue3Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue3' } },
  { path: 'issue4-mod3', component: Issue4Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue4' } },
  { path: 'issue5-mod3', component: Issue5Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue5' } },
  { path: 'issue6-mod3', component: Issue6Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue6' } },
  { path: 'issue7-mod3', component: Issue7Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue7' } },
  { path: 'issue8-mod3', component: Issue8Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue8' } },
  { path: 'issue9-mod3', component: Issue9Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Issue9' } },
  { path: 'project10-mod3', component: Project10Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project10' } },
  { path: 'project1-mod3', component: Project1Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project1' } },
  { path: 'project2-mod3', component: Project2Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project2' } },
  { path: 'project3-mod3', component: Project3Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project3' } },
  { path: 'project4-mod3', component: Project4Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project4' } },
  { path: 'project5-mod3', component: Project5Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project5' } },
  { path: 'project6-mod3', component: Project6Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project6' } },
  { path: 'project7-mod3', component: Project7Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project7' } },
  { path: 'project8-mod3', component: Project8Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project8' } },
  { path: 'project9-mod3', component: Project9Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Project9' } },
  { path: 'severity10-mod3', component: Severity10Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity10' } },
  { path: 'severity1-mod3', component: Severity1Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity1' } },
  { path: 'severity2-mod3', component: Severity2Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity2' } },
  { path: 'severity3-mod3', component: Severity3Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity3' } },
  { path: 'severity4-mod3', component: Severity4Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity4' } },
  { path: 'severity5-mod3', component: Severity5Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity5' } },
  { path: 'severity6-mod3', component: Severity6Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity6' } },
  { path: 'severity7-mod3', component: Severity7Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity7' } },
  { path: 'severity8-mod3', component: Severity8Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity8' } },
  { path: 'severity9-mod3', component: Severity9Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Severity9' } },
  { path: 'status10-mod3', component: Status10Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status10' } },
  { path: 'status1-mod3', component: Status1Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status1' } },
  { path: 'status2-mod3', component: Status2Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status2' } },
  { path: 'status3-mod3', component: Status3Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status3' } },
  { path: 'status4-mod3', component: Status4Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status4' } },
  { path: 'status5-mod3', component: Status5Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status5' } },
  { path: 'status6-mod3', component: Status6Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status6' } },
  { path: 'status7-mod3', component: Status7Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status7' } },
  { path: 'status8-mod3', component: Status8Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status8' } },
  { path: 'status9-mod3', component: Status9Mod3PageComponent, canActivate: [AuthGuard], data: { title: 'Status9' } },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod3RoutingModule { }
