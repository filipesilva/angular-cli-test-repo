import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod9RoutingModule } from './mod9-routing.module';

// Components
import { Category10Mod9PageComponent } from './pages/category10-mod9-page/category10-mod9-page.component';
import { Category10Mod9GridComponent } from './pages/category10-mod9-page/components/category10-mod9-grid/category10-mod9-grid.component';
import { Category10Mod9FormComponent } from './pages/category10-mod9-page/components/category10-mod9-form/category10-mod9-form.component';
import { Category1Mod9PageComponent } from './pages/category1-mod9-page/category1-mod9-page.component';
import { Category1Mod9GridComponent } from './pages/category1-mod9-page/components/category1-mod9-grid/category1-mod9-grid.component';
import { Category1Mod9FormComponent } from './pages/category1-mod9-page/components/category1-mod9-form/category1-mod9-form.component';
import { Category2Mod9PageComponent } from './pages/category2-mod9-page/category2-mod9-page.component';
import { Category2Mod9GridComponent } from './pages/category2-mod9-page/components/category2-mod9-grid/category2-mod9-grid.component';
import { Category2Mod9FormComponent } from './pages/category2-mod9-page/components/category2-mod9-form/category2-mod9-form.component';
import { Category3Mod9PageComponent } from './pages/category3-mod9-page/category3-mod9-page.component';
import { Category3Mod9GridComponent } from './pages/category3-mod9-page/components/category3-mod9-grid/category3-mod9-grid.component';
import { Category3Mod9FormComponent } from './pages/category3-mod9-page/components/category3-mod9-form/category3-mod9-form.component';
import { Category4Mod9PageComponent } from './pages/category4-mod9-page/category4-mod9-page.component';
import { Category4Mod9GridComponent } from './pages/category4-mod9-page/components/category4-mod9-grid/category4-mod9-grid.component';
import { Category4Mod9FormComponent } from './pages/category4-mod9-page/components/category4-mod9-form/category4-mod9-form.component';
import { Category5Mod9PageComponent } from './pages/category5-mod9-page/category5-mod9-page.component';
import { Category5Mod9GridComponent } from './pages/category5-mod9-page/components/category5-mod9-grid/category5-mod9-grid.component';
import { Category5Mod9FormComponent } from './pages/category5-mod9-page/components/category5-mod9-form/category5-mod9-form.component';
import { Category6Mod9PageComponent } from './pages/category6-mod9-page/category6-mod9-page.component';
import { Category6Mod9GridComponent } from './pages/category6-mod9-page/components/category6-mod9-grid/category6-mod9-grid.component';
import { Category6Mod9FormComponent } from './pages/category6-mod9-page/components/category6-mod9-form/category6-mod9-form.component';
import { Category7Mod9PageComponent } from './pages/category7-mod9-page/category7-mod9-page.component';
import { Category7Mod9GridComponent } from './pages/category7-mod9-page/components/category7-mod9-grid/category7-mod9-grid.component';
import { Category7Mod9FormComponent } from './pages/category7-mod9-page/components/category7-mod9-form/category7-mod9-form.component';
import { Category8Mod9PageComponent } from './pages/category8-mod9-page/category8-mod9-page.component';
import { Category8Mod9GridComponent } from './pages/category8-mod9-page/components/category8-mod9-grid/category8-mod9-grid.component';
import { Category8Mod9FormComponent } from './pages/category8-mod9-page/components/category8-mod9-form/category8-mod9-form.component';
import { Category9Mod9PageComponent } from './pages/category9-mod9-page/category9-mod9-page.component';
import { Category9Mod9GridComponent } from './pages/category9-mod9-page/components/category9-mod9-grid/category9-mod9-grid.component';
import { Category9Mod9FormComponent } from './pages/category9-mod9-page/components/category9-mod9-form/category9-mod9-form.component';
import { Issue10Mod9PageComponent } from './pages/issue10-mod9-page/issue10-mod9-page.component';
import { Issue10Mod9GridComponent } from './pages/issue10-mod9-page/components/issue10-mod9-grid/issue10-mod9-grid.component';
import { Issue10Mod9FormComponent } from './pages/issue10-mod9-page/components/issue10-mod9-form/issue10-mod9-form.component';
import { Issue1Mod9PageComponent } from './pages/issue1-mod9-page/issue1-mod9-page.component';
import { Issue1Mod9GridComponent } from './pages/issue1-mod9-page/components/issue1-mod9-grid/issue1-mod9-grid.component';
import { Issue1Mod9FormComponent } from './pages/issue1-mod9-page/components/issue1-mod9-form/issue1-mod9-form.component';
import { Issue2Mod9PageComponent } from './pages/issue2-mod9-page/issue2-mod9-page.component';
import { Issue2Mod9GridComponent } from './pages/issue2-mod9-page/components/issue2-mod9-grid/issue2-mod9-grid.component';
import { Issue2Mod9FormComponent } from './pages/issue2-mod9-page/components/issue2-mod9-form/issue2-mod9-form.component';
import { Issue3Mod9PageComponent } from './pages/issue3-mod9-page/issue3-mod9-page.component';
import { Issue3Mod9GridComponent } from './pages/issue3-mod9-page/components/issue3-mod9-grid/issue3-mod9-grid.component';
import { Issue3Mod9FormComponent } from './pages/issue3-mod9-page/components/issue3-mod9-form/issue3-mod9-form.component';
import { Issue4Mod9PageComponent } from './pages/issue4-mod9-page/issue4-mod9-page.component';
import { Issue4Mod9GridComponent } from './pages/issue4-mod9-page/components/issue4-mod9-grid/issue4-mod9-grid.component';
import { Issue4Mod9FormComponent } from './pages/issue4-mod9-page/components/issue4-mod9-form/issue4-mod9-form.component';
import { Issue5Mod9PageComponent } from './pages/issue5-mod9-page/issue5-mod9-page.component';
import { Issue5Mod9GridComponent } from './pages/issue5-mod9-page/components/issue5-mod9-grid/issue5-mod9-grid.component';
import { Issue5Mod9FormComponent } from './pages/issue5-mod9-page/components/issue5-mod9-form/issue5-mod9-form.component';
import { Issue6Mod9PageComponent } from './pages/issue6-mod9-page/issue6-mod9-page.component';
import { Issue6Mod9GridComponent } from './pages/issue6-mod9-page/components/issue6-mod9-grid/issue6-mod9-grid.component';
import { Issue6Mod9FormComponent } from './pages/issue6-mod9-page/components/issue6-mod9-form/issue6-mod9-form.component';
import { Issue7Mod9PageComponent } from './pages/issue7-mod9-page/issue7-mod9-page.component';
import { Issue7Mod9GridComponent } from './pages/issue7-mod9-page/components/issue7-mod9-grid/issue7-mod9-grid.component';
import { Issue7Mod9FormComponent } from './pages/issue7-mod9-page/components/issue7-mod9-form/issue7-mod9-form.component';
import { Issue8Mod9PageComponent } from './pages/issue8-mod9-page/issue8-mod9-page.component';
import { Issue8Mod9GridComponent } from './pages/issue8-mod9-page/components/issue8-mod9-grid/issue8-mod9-grid.component';
import { Issue8Mod9FormComponent } from './pages/issue8-mod9-page/components/issue8-mod9-form/issue8-mod9-form.component';
import { Issue9Mod9PageComponent } from './pages/issue9-mod9-page/issue9-mod9-page.component';
import { Issue9Mod9GridComponent } from './pages/issue9-mod9-page/components/issue9-mod9-grid/issue9-mod9-grid.component';
import { Issue9Mod9FormComponent } from './pages/issue9-mod9-page/components/issue9-mod9-form/issue9-mod9-form.component';
import { Project10Mod9PageComponent } from './pages/project10-mod9-page/project10-mod9-page.component';
import { Project10Mod9GridComponent } from './pages/project10-mod9-page/components/project10-mod9-grid/project10-mod9-grid.component';
import { Project10Mod9FormComponent } from './pages/project10-mod9-page/components/project10-mod9-form/project10-mod9-form.component';
import { Project1Mod9PageComponent } from './pages/project1-mod9-page/project1-mod9-page.component';
import { Project1Mod9GridComponent } from './pages/project1-mod9-page/components/project1-mod9-grid/project1-mod9-grid.component';
import { Project1Mod9FormComponent } from './pages/project1-mod9-page/components/project1-mod9-form/project1-mod9-form.component';
import { Project2Mod9PageComponent } from './pages/project2-mod9-page/project2-mod9-page.component';
import { Project2Mod9GridComponent } from './pages/project2-mod9-page/components/project2-mod9-grid/project2-mod9-grid.component';
import { Project2Mod9FormComponent } from './pages/project2-mod9-page/components/project2-mod9-form/project2-mod9-form.component';
import { Project3Mod9PageComponent } from './pages/project3-mod9-page/project3-mod9-page.component';
import { Project3Mod9GridComponent } from './pages/project3-mod9-page/components/project3-mod9-grid/project3-mod9-grid.component';
import { Project3Mod9FormComponent } from './pages/project3-mod9-page/components/project3-mod9-form/project3-mod9-form.component';
import { Project4Mod9PageComponent } from './pages/project4-mod9-page/project4-mod9-page.component';
import { Project4Mod9GridComponent } from './pages/project4-mod9-page/components/project4-mod9-grid/project4-mod9-grid.component';
import { Project4Mod9FormComponent } from './pages/project4-mod9-page/components/project4-mod9-form/project4-mod9-form.component';
import { Project5Mod9PageComponent } from './pages/project5-mod9-page/project5-mod9-page.component';
import { Project5Mod9GridComponent } from './pages/project5-mod9-page/components/project5-mod9-grid/project5-mod9-grid.component';
import { Project5Mod9FormComponent } from './pages/project5-mod9-page/components/project5-mod9-form/project5-mod9-form.component';
import { Project6Mod9PageComponent } from './pages/project6-mod9-page/project6-mod9-page.component';
import { Project6Mod9GridComponent } from './pages/project6-mod9-page/components/project6-mod9-grid/project6-mod9-grid.component';
import { Project6Mod9FormComponent } from './pages/project6-mod9-page/components/project6-mod9-form/project6-mod9-form.component';
import { Project7Mod9PageComponent } from './pages/project7-mod9-page/project7-mod9-page.component';
import { Project7Mod9GridComponent } from './pages/project7-mod9-page/components/project7-mod9-grid/project7-mod9-grid.component';
import { Project7Mod9FormComponent } from './pages/project7-mod9-page/components/project7-mod9-form/project7-mod9-form.component';
import { Project8Mod9PageComponent } from './pages/project8-mod9-page/project8-mod9-page.component';
import { Project8Mod9GridComponent } from './pages/project8-mod9-page/components/project8-mod9-grid/project8-mod9-grid.component';
import { Project8Mod9FormComponent } from './pages/project8-mod9-page/components/project8-mod9-form/project8-mod9-form.component';
import { Project9Mod9PageComponent } from './pages/project9-mod9-page/project9-mod9-page.component';
import { Project9Mod9GridComponent } from './pages/project9-mod9-page/components/project9-mod9-grid/project9-mod9-grid.component';
import { Project9Mod9FormComponent } from './pages/project9-mod9-page/components/project9-mod9-form/project9-mod9-form.component';
import { Severity10Mod9PageComponent } from './pages/severity10-mod9-page/severity10-mod9-page.component';
import { Severity10Mod9GridComponent } from './pages/severity10-mod9-page/components/severity10-mod9-grid/severity10-mod9-grid.component';
import { Severity10Mod9FormComponent } from './pages/severity10-mod9-page/components/severity10-mod9-form/severity10-mod9-form.component';
import { Severity1Mod9PageComponent } from './pages/severity1-mod9-page/severity1-mod9-page.component';
import { Severity1Mod9GridComponent } from './pages/severity1-mod9-page/components/severity1-mod9-grid/severity1-mod9-grid.component';
import { Severity1Mod9FormComponent } from './pages/severity1-mod9-page/components/severity1-mod9-form/severity1-mod9-form.component';
import { Severity2Mod9PageComponent } from './pages/severity2-mod9-page/severity2-mod9-page.component';
import { Severity2Mod9GridComponent } from './pages/severity2-mod9-page/components/severity2-mod9-grid/severity2-mod9-grid.component';
import { Severity2Mod9FormComponent } from './pages/severity2-mod9-page/components/severity2-mod9-form/severity2-mod9-form.component';
import { Severity3Mod9PageComponent } from './pages/severity3-mod9-page/severity3-mod9-page.component';
import { Severity3Mod9GridComponent } from './pages/severity3-mod9-page/components/severity3-mod9-grid/severity3-mod9-grid.component';
import { Severity3Mod9FormComponent } from './pages/severity3-mod9-page/components/severity3-mod9-form/severity3-mod9-form.component';
import { Severity4Mod9PageComponent } from './pages/severity4-mod9-page/severity4-mod9-page.component';
import { Severity4Mod9GridComponent } from './pages/severity4-mod9-page/components/severity4-mod9-grid/severity4-mod9-grid.component';
import { Severity4Mod9FormComponent } from './pages/severity4-mod9-page/components/severity4-mod9-form/severity4-mod9-form.component';
import { Severity5Mod9PageComponent } from './pages/severity5-mod9-page/severity5-mod9-page.component';
import { Severity5Mod9GridComponent } from './pages/severity5-mod9-page/components/severity5-mod9-grid/severity5-mod9-grid.component';
import { Severity5Mod9FormComponent } from './pages/severity5-mod9-page/components/severity5-mod9-form/severity5-mod9-form.component';
import { Severity6Mod9PageComponent } from './pages/severity6-mod9-page/severity6-mod9-page.component';
import { Severity6Mod9GridComponent } from './pages/severity6-mod9-page/components/severity6-mod9-grid/severity6-mod9-grid.component';
import { Severity6Mod9FormComponent } from './pages/severity6-mod9-page/components/severity6-mod9-form/severity6-mod9-form.component';
import { Severity7Mod9PageComponent } from './pages/severity7-mod9-page/severity7-mod9-page.component';
import { Severity7Mod9GridComponent } from './pages/severity7-mod9-page/components/severity7-mod9-grid/severity7-mod9-grid.component';
import { Severity7Mod9FormComponent } from './pages/severity7-mod9-page/components/severity7-mod9-form/severity7-mod9-form.component';
import { Severity8Mod9PageComponent } from './pages/severity8-mod9-page/severity8-mod9-page.component';
import { Severity8Mod9GridComponent } from './pages/severity8-mod9-page/components/severity8-mod9-grid/severity8-mod9-grid.component';
import { Severity8Mod9FormComponent } from './pages/severity8-mod9-page/components/severity8-mod9-form/severity8-mod9-form.component';
import { Severity9Mod9PageComponent } from './pages/severity9-mod9-page/severity9-mod9-page.component';
import { Severity9Mod9GridComponent } from './pages/severity9-mod9-page/components/severity9-mod9-grid/severity9-mod9-grid.component';
import { Severity9Mod9FormComponent } from './pages/severity9-mod9-page/components/severity9-mod9-form/severity9-mod9-form.component';
import { Status10Mod9PageComponent } from './pages/status10-mod9-page/status10-mod9-page.component';
import { Status10Mod9GridComponent } from './pages/status10-mod9-page/components/status10-mod9-grid/status10-mod9-grid.component';
import { Status10Mod9FormComponent } from './pages/status10-mod9-page/components/status10-mod9-form/status10-mod9-form.component';
import { Status1Mod9PageComponent } from './pages/status1-mod9-page/status1-mod9-page.component';
import { Status1Mod9GridComponent } from './pages/status1-mod9-page/components/status1-mod9-grid/status1-mod9-grid.component';
import { Status1Mod9FormComponent } from './pages/status1-mod9-page/components/status1-mod9-form/status1-mod9-form.component';
import { Status2Mod9PageComponent } from './pages/status2-mod9-page/status2-mod9-page.component';
import { Status2Mod9GridComponent } from './pages/status2-mod9-page/components/status2-mod9-grid/status2-mod9-grid.component';
import { Status2Mod9FormComponent } from './pages/status2-mod9-page/components/status2-mod9-form/status2-mod9-form.component';
import { Status3Mod9PageComponent } from './pages/status3-mod9-page/status3-mod9-page.component';
import { Status3Mod9GridComponent } from './pages/status3-mod9-page/components/status3-mod9-grid/status3-mod9-grid.component';
import { Status3Mod9FormComponent } from './pages/status3-mod9-page/components/status3-mod9-form/status3-mod9-form.component';
import { Status4Mod9PageComponent } from './pages/status4-mod9-page/status4-mod9-page.component';
import { Status4Mod9GridComponent } from './pages/status4-mod9-page/components/status4-mod9-grid/status4-mod9-grid.component';
import { Status4Mod9FormComponent } from './pages/status4-mod9-page/components/status4-mod9-form/status4-mod9-form.component';
import { Status5Mod9PageComponent } from './pages/status5-mod9-page/status5-mod9-page.component';
import { Status5Mod9GridComponent } from './pages/status5-mod9-page/components/status5-mod9-grid/status5-mod9-grid.component';
import { Status5Mod9FormComponent } from './pages/status5-mod9-page/components/status5-mod9-form/status5-mod9-form.component';
import { Status6Mod9PageComponent } from './pages/status6-mod9-page/status6-mod9-page.component';
import { Status6Mod9GridComponent } from './pages/status6-mod9-page/components/status6-mod9-grid/status6-mod9-grid.component';
import { Status6Mod9FormComponent } from './pages/status6-mod9-page/components/status6-mod9-form/status6-mod9-form.component';
import { Status7Mod9PageComponent } from './pages/status7-mod9-page/status7-mod9-page.component';
import { Status7Mod9GridComponent } from './pages/status7-mod9-page/components/status7-mod9-grid/status7-mod9-grid.component';
import { Status7Mod9FormComponent } from './pages/status7-mod9-page/components/status7-mod9-form/status7-mod9-form.component';
import { Status8Mod9PageComponent } from './pages/status8-mod9-page/status8-mod9-page.component';
import { Status8Mod9GridComponent } from './pages/status8-mod9-page/components/status8-mod9-grid/status8-mod9-grid.component';
import { Status8Mod9FormComponent } from './pages/status8-mod9-page/components/status8-mod9-form/status8-mod9-form.component';
import { Status9Mod9PageComponent } from './pages/status9-mod9-page/status9-mod9-page.component';
import { Status9Mod9GridComponent } from './pages/status9-mod9-page/components/status9-mod9-grid/status9-mod9-grid.component';
import { Status9Mod9FormComponent } from './pages/status9-mod9-page/components/status9-mod9-form/status9-mod9-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod9RoutingModule,
  ],
  declarations: [
    Category10Mod9PageComponent,
    Category10Mod9GridComponent,
    Category10Mod9FormComponent,
    Category1Mod9PageComponent,
    Category1Mod9GridComponent,
    Category1Mod9FormComponent,
    Category2Mod9PageComponent,
    Category2Mod9GridComponent,
    Category2Mod9FormComponent,
    Category3Mod9PageComponent,
    Category3Mod9GridComponent,
    Category3Mod9FormComponent,
    Category4Mod9PageComponent,
    Category4Mod9GridComponent,
    Category4Mod9FormComponent,
    Category5Mod9PageComponent,
    Category5Mod9GridComponent,
    Category5Mod9FormComponent,
    Category6Mod9PageComponent,
    Category6Mod9GridComponent,
    Category6Mod9FormComponent,
    Category7Mod9PageComponent,
    Category7Mod9GridComponent,
    Category7Mod9FormComponent,
    Category8Mod9PageComponent,
    Category8Mod9GridComponent,
    Category8Mod9FormComponent,
    Category9Mod9PageComponent,
    Category9Mod9GridComponent,
    Category9Mod9FormComponent,
    Issue10Mod9PageComponent,
    Issue10Mod9GridComponent,
    Issue10Mod9FormComponent,
    Issue1Mod9PageComponent,
    Issue1Mod9GridComponent,
    Issue1Mod9FormComponent,
    Issue2Mod9PageComponent,
    Issue2Mod9GridComponent,
    Issue2Mod9FormComponent,
    Issue3Mod9PageComponent,
    Issue3Mod9GridComponent,
    Issue3Mod9FormComponent,
    Issue4Mod9PageComponent,
    Issue4Mod9GridComponent,
    Issue4Mod9FormComponent,
    Issue5Mod9PageComponent,
    Issue5Mod9GridComponent,
    Issue5Mod9FormComponent,
    Issue6Mod9PageComponent,
    Issue6Mod9GridComponent,
    Issue6Mod9FormComponent,
    Issue7Mod9PageComponent,
    Issue7Mod9GridComponent,
    Issue7Mod9FormComponent,
    Issue8Mod9PageComponent,
    Issue8Mod9GridComponent,
    Issue8Mod9FormComponent,
    Issue9Mod9PageComponent,
    Issue9Mod9GridComponent,
    Issue9Mod9FormComponent,
    Project10Mod9PageComponent,
    Project10Mod9GridComponent,
    Project10Mod9FormComponent,
    Project1Mod9PageComponent,
    Project1Mod9GridComponent,
    Project1Mod9FormComponent,
    Project2Mod9PageComponent,
    Project2Mod9GridComponent,
    Project2Mod9FormComponent,
    Project3Mod9PageComponent,
    Project3Mod9GridComponent,
    Project3Mod9FormComponent,
    Project4Mod9PageComponent,
    Project4Mod9GridComponent,
    Project4Mod9FormComponent,
    Project5Mod9PageComponent,
    Project5Mod9GridComponent,
    Project5Mod9FormComponent,
    Project6Mod9PageComponent,
    Project6Mod9GridComponent,
    Project6Mod9FormComponent,
    Project7Mod9PageComponent,
    Project7Mod9GridComponent,
    Project7Mod9FormComponent,
    Project8Mod9PageComponent,
    Project8Mod9GridComponent,
    Project8Mod9FormComponent,
    Project9Mod9PageComponent,
    Project9Mod9GridComponent,
    Project9Mod9FormComponent,
    Severity10Mod9PageComponent,
    Severity10Mod9GridComponent,
    Severity10Mod9FormComponent,
    Severity1Mod9PageComponent,
    Severity1Mod9GridComponent,
    Severity1Mod9FormComponent,
    Severity2Mod9PageComponent,
    Severity2Mod9GridComponent,
    Severity2Mod9FormComponent,
    Severity3Mod9PageComponent,
    Severity3Mod9GridComponent,
    Severity3Mod9FormComponent,
    Severity4Mod9PageComponent,
    Severity4Mod9GridComponent,
    Severity4Mod9FormComponent,
    Severity5Mod9PageComponent,
    Severity5Mod9GridComponent,
    Severity5Mod9FormComponent,
    Severity6Mod9PageComponent,
    Severity6Mod9GridComponent,
    Severity6Mod9FormComponent,
    Severity7Mod9PageComponent,
    Severity7Mod9GridComponent,
    Severity7Mod9FormComponent,
    Severity8Mod9PageComponent,
    Severity8Mod9GridComponent,
    Severity8Mod9FormComponent,
    Severity9Mod9PageComponent,
    Severity9Mod9GridComponent,
    Severity9Mod9FormComponent,
    Status10Mod9PageComponent,
    Status10Mod9GridComponent,
    Status10Mod9FormComponent,
    Status1Mod9PageComponent,
    Status1Mod9GridComponent,
    Status1Mod9FormComponent,
    Status2Mod9PageComponent,
    Status2Mod9GridComponent,
    Status2Mod9FormComponent,
    Status3Mod9PageComponent,
    Status3Mod9GridComponent,
    Status3Mod9FormComponent,
    Status4Mod9PageComponent,
    Status4Mod9GridComponent,
    Status4Mod9FormComponent,
    Status5Mod9PageComponent,
    Status5Mod9GridComponent,
    Status5Mod9FormComponent,
    Status6Mod9PageComponent,
    Status6Mod9GridComponent,
    Status6Mod9FormComponent,
    Status7Mod9PageComponent,
    Status7Mod9GridComponent,
    Status7Mod9FormComponent,
    Status8Mod9PageComponent,
    Status8Mod9GridComponent,
    Status8Mod9FormComponent,
    Status9Mod9PageComponent,
    Status9Mod9GridComponent,
    Status9Mod9FormComponent,
  ],
  exports: [
  ]
})
export class Mod9Module { }
