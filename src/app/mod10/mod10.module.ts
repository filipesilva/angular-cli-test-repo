import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod10RoutingModule } from './mod10-routing.module';

// Components
import { Category10Mod10PageComponent } from './pages/category10-mod10-page/category10-mod10-page.component';
import { Category10Mod10GridComponent } from './pages/category10-mod10-page/components/category10-mod10-grid/category10-mod10-grid.component';
import { Category10Mod10FormComponent } from './pages/category10-mod10-page/components/category10-mod10-form/category10-mod10-form.component';
import { Category1Mod10PageComponent } from './pages/category1-mod10-page/category1-mod10-page.component';
import { Category1Mod10GridComponent } from './pages/category1-mod10-page/components/category1-mod10-grid/category1-mod10-grid.component';
import { Category1Mod10FormComponent } from './pages/category1-mod10-page/components/category1-mod10-form/category1-mod10-form.component';
import { Category2Mod10PageComponent } from './pages/category2-mod10-page/category2-mod10-page.component';
import { Category2Mod10GridComponent } from './pages/category2-mod10-page/components/category2-mod10-grid/category2-mod10-grid.component';
import { Category2Mod10FormComponent } from './pages/category2-mod10-page/components/category2-mod10-form/category2-mod10-form.component';
import { Category3Mod10PageComponent } from './pages/category3-mod10-page/category3-mod10-page.component';
import { Category3Mod10GridComponent } from './pages/category3-mod10-page/components/category3-mod10-grid/category3-mod10-grid.component';
import { Category3Mod10FormComponent } from './pages/category3-mod10-page/components/category3-mod10-form/category3-mod10-form.component';
import { Category4Mod10PageComponent } from './pages/category4-mod10-page/category4-mod10-page.component';
import { Category4Mod10GridComponent } from './pages/category4-mod10-page/components/category4-mod10-grid/category4-mod10-grid.component';
import { Category4Mod10FormComponent } from './pages/category4-mod10-page/components/category4-mod10-form/category4-mod10-form.component';
import { Category5Mod10PageComponent } from './pages/category5-mod10-page/category5-mod10-page.component';
import { Category5Mod10GridComponent } from './pages/category5-mod10-page/components/category5-mod10-grid/category5-mod10-grid.component';
import { Category5Mod10FormComponent } from './pages/category5-mod10-page/components/category5-mod10-form/category5-mod10-form.component';
import { Category6Mod10PageComponent } from './pages/category6-mod10-page/category6-mod10-page.component';
import { Category6Mod10GridComponent } from './pages/category6-mod10-page/components/category6-mod10-grid/category6-mod10-grid.component';
import { Category6Mod10FormComponent } from './pages/category6-mod10-page/components/category6-mod10-form/category6-mod10-form.component';
import { Category7Mod10PageComponent } from './pages/category7-mod10-page/category7-mod10-page.component';
import { Category7Mod10GridComponent } from './pages/category7-mod10-page/components/category7-mod10-grid/category7-mod10-grid.component';
import { Category7Mod10FormComponent } from './pages/category7-mod10-page/components/category7-mod10-form/category7-mod10-form.component';
import { Category8Mod10PageComponent } from './pages/category8-mod10-page/category8-mod10-page.component';
import { Category8Mod10GridComponent } from './pages/category8-mod10-page/components/category8-mod10-grid/category8-mod10-grid.component';
import { Category8Mod10FormComponent } from './pages/category8-mod10-page/components/category8-mod10-form/category8-mod10-form.component';
import { Category9Mod10PageComponent } from './pages/category9-mod10-page/category9-mod10-page.component';
import { Category9Mod10GridComponent } from './pages/category9-mod10-page/components/category9-mod10-grid/category9-mod10-grid.component';
import { Category9Mod10FormComponent } from './pages/category9-mod10-page/components/category9-mod10-form/category9-mod10-form.component';
import { Issue10Mod10PageComponent } from './pages/issue10-mod10-page/issue10-mod10-page.component';
import { Issue10Mod10GridComponent } from './pages/issue10-mod10-page/components/issue10-mod10-grid/issue10-mod10-grid.component';
import { Issue10Mod10FormComponent } from './pages/issue10-mod10-page/components/issue10-mod10-form/issue10-mod10-form.component';
import { Issue1Mod10PageComponent } from './pages/issue1-mod10-page/issue1-mod10-page.component';
import { Issue1Mod10GridComponent } from './pages/issue1-mod10-page/components/issue1-mod10-grid/issue1-mod10-grid.component';
import { Issue1Mod10FormComponent } from './pages/issue1-mod10-page/components/issue1-mod10-form/issue1-mod10-form.component';
import { Issue2Mod10PageComponent } from './pages/issue2-mod10-page/issue2-mod10-page.component';
import { Issue2Mod10GridComponent } from './pages/issue2-mod10-page/components/issue2-mod10-grid/issue2-mod10-grid.component';
import { Issue2Mod10FormComponent } from './pages/issue2-mod10-page/components/issue2-mod10-form/issue2-mod10-form.component';
import { Issue3Mod10PageComponent } from './pages/issue3-mod10-page/issue3-mod10-page.component';
import { Issue3Mod10GridComponent } from './pages/issue3-mod10-page/components/issue3-mod10-grid/issue3-mod10-grid.component';
import { Issue3Mod10FormComponent } from './pages/issue3-mod10-page/components/issue3-mod10-form/issue3-mod10-form.component';
import { Issue4Mod10PageComponent } from './pages/issue4-mod10-page/issue4-mod10-page.component';
import { Issue4Mod10GridComponent } from './pages/issue4-mod10-page/components/issue4-mod10-grid/issue4-mod10-grid.component';
import { Issue4Mod10FormComponent } from './pages/issue4-mod10-page/components/issue4-mod10-form/issue4-mod10-form.component';
import { Issue5Mod10PageComponent } from './pages/issue5-mod10-page/issue5-mod10-page.component';
import { Issue5Mod10GridComponent } from './pages/issue5-mod10-page/components/issue5-mod10-grid/issue5-mod10-grid.component';
import { Issue5Mod10FormComponent } from './pages/issue5-mod10-page/components/issue5-mod10-form/issue5-mod10-form.component';
import { Issue6Mod10PageComponent } from './pages/issue6-mod10-page/issue6-mod10-page.component';
import { Issue6Mod10GridComponent } from './pages/issue6-mod10-page/components/issue6-mod10-grid/issue6-mod10-grid.component';
import { Issue6Mod10FormComponent } from './pages/issue6-mod10-page/components/issue6-mod10-form/issue6-mod10-form.component';
import { Issue7Mod10PageComponent } from './pages/issue7-mod10-page/issue7-mod10-page.component';
import { Issue7Mod10GridComponent } from './pages/issue7-mod10-page/components/issue7-mod10-grid/issue7-mod10-grid.component';
import { Issue7Mod10FormComponent } from './pages/issue7-mod10-page/components/issue7-mod10-form/issue7-mod10-form.component';
import { Issue8Mod10PageComponent } from './pages/issue8-mod10-page/issue8-mod10-page.component';
import { Issue8Mod10GridComponent } from './pages/issue8-mod10-page/components/issue8-mod10-grid/issue8-mod10-grid.component';
import { Issue8Mod10FormComponent } from './pages/issue8-mod10-page/components/issue8-mod10-form/issue8-mod10-form.component';
import { Issue9Mod10PageComponent } from './pages/issue9-mod10-page/issue9-mod10-page.component';
import { Issue9Mod10GridComponent } from './pages/issue9-mod10-page/components/issue9-mod10-grid/issue9-mod10-grid.component';
import { Issue9Mod10FormComponent } from './pages/issue9-mod10-page/components/issue9-mod10-form/issue9-mod10-form.component';
import { Project10Mod10PageComponent } from './pages/project10-mod10-page/project10-mod10-page.component';
import { Project10Mod10GridComponent } from './pages/project10-mod10-page/components/project10-mod10-grid/project10-mod10-grid.component';
import { Project10Mod10FormComponent } from './pages/project10-mod10-page/components/project10-mod10-form/project10-mod10-form.component';
import { Project1Mod10PageComponent } from './pages/project1-mod10-page/project1-mod10-page.component';
import { Project1Mod10GridComponent } from './pages/project1-mod10-page/components/project1-mod10-grid/project1-mod10-grid.component';
import { Project1Mod10FormComponent } from './pages/project1-mod10-page/components/project1-mod10-form/project1-mod10-form.component';
import { Project2Mod10PageComponent } from './pages/project2-mod10-page/project2-mod10-page.component';
import { Project2Mod10GridComponent } from './pages/project2-mod10-page/components/project2-mod10-grid/project2-mod10-grid.component';
import { Project2Mod10FormComponent } from './pages/project2-mod10-page/components/project2-mod10-form/project2-mod10-form.component';
import { Project3Mod10PageComponent } from './pages/project3-mod10-page/project3-mod10-page.component';
import { Project3Mod10GridComponent } from './pages/project3-mod10-page/components/project3-mod10-grid/project3-mod10-grid.component';
import { Project3Mod10FormComponent } from './pages/project3-mod10-page/components/project3-mod10-form/project3-mod10-form.component';
import { Project4Mod10PageComponent } from './pages/project4-mod10-page/project4-mod10-page.component';
import { Project4Mod10GridComponent } from './pages/project4-mod10-page/components/project4-mod10-grid/project4-mod10-grid.component';
import { Project4Mod10FormComponent } from './pages/project4-mod10-page/components/project4-mod10-form/project4-mod10-form.component';
import { Project5Mod10PageComponent } from './pages/project5-mod10-page/project5-mod10-page.component';
import { Project5Mod10GridComponent } from './pages/project5-mod10-page/components/project5-mod10-grid/project5-mod10-grid.component';
import { Project5Mod10FormComponent } from './pages/project5-mod10-page/components/project5-mod10-form/project5-mod10-form.component';
import { Project6Mod10PageComponent } from './pages/project6-mod10-page/project6-mod10-page.component';
import { Project6Mod10GridComponent } from './pages/project6-mod10-page/components/project6-mod10-grid/project6-mod10-grid.component';
import { Project6Mod10FormComponent } from './pages/project6-mod10-page/components/project6-mod10-form/project6-mod10-form.component';
import { Project7Mod10PageComponent } from './pages/project7-mod10-page/project7-mod10-page.component';
import { Project7Mod10GridComponent } from './pages/project7-mod10-page/components/project7-mod10-grid/project7-mod10-grid.component';
import { Project7Mod10FormComponent } from './pages/project7-mod10-page/components/project7-mod10-form/project7-mod10-form.component';
import { Project8Mod10PageComponent } from './pages/project8-mod10-page/project8-mod10-page.component';
import { Project8Mod10GridComponent } from './pages/project8-mod10-page/components/project8-mod10-grid/project8-mod10-grid.component';
import { Project8Mod10FormComponent } from './pages/project8-mod10-page/components/project8-mod10-form/project8-mod10-form.component';
import { Project9Mod10PageComponent } from './pages/project9-mod10-page/project9-mod10-page.component';
import { Project9Mod10GridComponent } from './pages/project9-mod10-page/components/project9-mod10-grid/project9-mod10-grid.component';
import { Project9Mod10FormComponent } from './pages/project9-mod10-page/components/project9-mod10-form/project9-mod10-form.component';
import { Severity10Mod10PageComponent } from './pages/severity10-mod10-page/severity10-mod10-page.component';
import { Severity10Mod10GridComponent } from './pages/severity10-mod10-page/components/severity10-mod10-grid/severity10-mod10-grid.component';
import { Severity10Mod10FormComponent } from './pages/severity10-mod10-page/components/severity10-mod10-form/severity10-mod10-form.component';
import { Severity1Mod10PageComponent } from './pages/severity1-mod10-page/severity1-mod10-page.component';
import { Severity1Mod10GridComponent } from './pages/severity1-mod10-page/components/severity1-mod10-grid/severity1-mod10-grid.component';
import { Severity1Mod10FormComponent } from './pages/severity1-mod10-page/components/severity1-mod10-form/severity1-mod10-form.component';
import { Severity2Mod10PageComponent } from './pages/severity2-mod10-page/severity2-mod10-page.component';
import { Severity2Mod10GridComponent } from './pages/severity2-mod10-page/components/severity2-mod10-grid/severity2-mod10-grid.component';
import { Severity2Mod10FormComponent } from './pages/severity2-mod10-page/components/severity2-mod10-form/severity2-mod10-form.component';
import { Severity3Mod10PageComponent } from './pages/severity3-mod10-page/severity3-mod10-page.component';
import { Severity3Mod10GridComponent } from './pages/severity3-mod10-page/components/severity3-mod10-grid/severity3-mod10-grid.component';
import { Severity3Mod10FormComponent } from './pages/severity3-mod10-page/components/severity3-mod10-form/severity3-mod10-form.component';
import { Severity4Mod10PageComponent } from './pages/severity4-mod10-page/severity4-mod10-page.component';
import { Severity4Mod10GridComponent } from './pages/severity4-mod10-page/components/severity4-mod10-grid/severity4-mod10-grid.component';
import { Severity4Mod10FormComponent } from './pages/severity4-mod10-page/components/severity4-mod10-form/severity4-mod10-form.component';
import { Severity5Mod10PageComponent } from './pages/severity5-mod10-page/severity5-mod10-page.component';
import { Severity5Mod10GridComponent } from './pages/severity5-mod10-page/components/severity5-mod10-grid/severity5-mod10-grid.component';
import { Severity5Mod10FormComponent } from './pages/severity5-mod10-page/components/severity5-mod10-form/severity5-mod10-form.component';
import { Severity6Mod10PageComponent } from './pages/severity6-mod10-page/severity6-mod10-page.component';
import { Severity6Mod10GridComponent } from './pages/severity6-mod10-page/components/severity6-mod10-grid/severity6-mod10-grid.component';
import { Severity6Mod10FormComponent } from './pages/severity6-mod10-page/components/severity6-mod10-form/severity6-mod10-form.component';
import { Severity7Mod10PageComponent } from './pages/severity7-mod10-page/severity7-mod10-page.component';
import { Severity7Mod10GridComponent } from './pages/severity7-mod10-page/components/severity7-mod10-grid/severity7-mod10-grid.component';
import { Severity7Mod10FormComponent } from './pages/severity7-mod10-page/components/severity7-mod10-form/severity7-mod10-form.component';
import { Severity8Mod10PageComponent } from './pages/severity8-mod10-page/severity8-mod10-page.component';
import { Severity8Mod10GridComponent } from './pages/severity8-mod10-page/components/severity8-mod10-grid/severity8-mod10-grid.component';
import { Severity8Mod10FormComponent } from './pages/severity8-mod10-page/components/severity8-mod10-form/severity8-mod10-form.component';
import { Severity9Mod10PageComponent } from './pages/severity9-mod10-page/severity9-mod10-page.component';
import { Severity9Mod10GridComponent } from './pages/severity9-mod10-page/components/severity9-mod10-grid/severity9-mod10-grid.component';
import { Severity9Mod10FormComponent } from './pages/severity9-mod10-page/components/severity9-mod10-form/severity9-mod10-form.component';
import { Status10Mod10PageComponent } from './pages/status10-mod10-page/status10-mod10-page.component';
import { Status10Mod10GridComponent } from './pages/status10-mod10-page/components/status10-mod10-grid/status10-mod10-grid.component';
import { Status10Mod10FormComponent } from './pages/status10-mod10-page/components/status10-mod10-form/status10-mod10-form.component';
import { Status1Mod10PageComponent } from './pages/status1-mod10-page/status1-mod10-page.component';
import { Status1Mod10GridComponent } from './pages/status1-mod10-page/components/status1-mod10-grid/status1-mod10-grid.component';
import { Status1Mod10FormComponent } from './pages/status1-mod10-page/components/status1-mod10-form/status1-mod10-form.component';
import { Status2Mod10PageComponent } from './pages/status2-mod10-page/status2-mod10-page.component';
import { Status2Mod10GridComponent } from './pages/status2-mod10-page/components/status2-mod10-grid/status2-mod10-grid.component';
import { Status2Mod10FormComponent } from './pages/status2-mod10-page/components/status2-mod10-form/status2-mod10-form.component';
import { Status3Mod10PageComponent } from './pages/status3-mod10-page/status3-mod10-page.component';
import { Status3Mod10GridComponent } from './pages/status3-mod10-page/components/status3-mod10-grid/status3-mod10-grid.component';
import { Status3Mod10FormComponent } from './pages/status3-mod10-page/components/status3-mod10-form/status3-mod10-form.component';
import { Status4Mod10PageComponent } from './pages/status4-mod10-page/status4-mod10-page.component';
import { Status4Mod10GridComponent } from './pages/status4-mod10-page/components/status4-mod10-grid/status4-mod10-grid.component';
import { Status4Mod10FormComponent } from './pages/status4-mod10-page/components/status4-mod10-form/status4-mod10-form.component';
import { Status5Mod10PageComponent } from './pages/status5-mod10-page/status5-mod10-page.component';
import { Status5Mod10GridComponent } from './pages/status5-mod10-page/components/status5-mod10-grid/status5-mod10-grid.component';
import { Status5Mod10FormComponent } from './pages/status5-mod10-page/components/status5-mod10-form/status5-mod10-form.component';
import { Status6Mod10PageComponent } from './pages/status6-mod10-page/status6-mod10-page.component';
import { Status6Mod10GridComponent } from './pages/status6-mod10-page/components/status6-mod10-grid/status6-mod10-grid.component';
import { Status6Mod10FormComponent } from './pages/status6-mod10-page/components/status6-mod10-form/status6-mod10-form.component';
import { Status7Mod10PageComponent } from './pages/status7-mod10-page/status7-mod10-page.component';
import { Status7Mod10GridComponent } from './pages/status7-mod10-page/components/status7-mod10-grid/status7-mod10-grid.component';
import { Status7Mod10FormComponent } from './pages/status7-mod10-page/components/status7-mod10-form/status7-mod10-form.component';
import { Status8Mod10PageComponent } from './pages/status8-mod10-page/status8-mod10-page.component';
import { Status8Mod10GridComponent } from './pages/status8-mod10-page/components/status8-mod10-grid/status8-mod10-grid.component';
import { Status8Mod10FormComponent } from './pages/status8-mod10-page/components/status8-mod10-form/status8-mod10-form.component';
import { Status9Mod10PageComponent } from './pages/status9-mod10-page/status9-mod10-page.component';
import { Status9Mod10GridComponent } from './pages/status9-mod10-page/components/status9-mod10-grid/status9-mod10-grid.component';
import { Status9Mod10FormComponent } from './pages/status9-mod10-page/components/status9-mod10-form/status9-mod10-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod10RoutingModule,
  ],
  declarations: [
    Category10Mod10PageComponent,
    Category10Mod10GridComponent,
    Category10Mod10FormComponent,
    Category1Mod10PageComponent,
    Category1Mod10GridComponent,
    Category1Mod10FormComponent,
    Category2Mod10PageComponent,
    Category2Mod10GridComponent,
    Category2Mod10FormComponent,
    Category3Mod10PageComponent,
    Category3Mod10GridComponent,
    Category3Mod10FormComponent,
    Category4Mod10PageComponent,
    Category4Mod10GridComponent,
    Category4Mod10FormComponent,
    Category5Mod10PageComponent,
    Category5Mod10GridComponent,
    Category5Mod10FormComponent,
    Category6Mod10PageComponent,
    Category6Mod10GridComponent,
    Category6Mod10FormComponent,
    Category7Mod10PageComponent,
    Category7Mod10GridComponent,
    Category7Mod10FormComponent,
    Category8Mod10PageComponent,
    Category8Mod10GridComponent,
    Category8Mod10FormComponent,
    Category9Mod10PageComponent,
    Category9Mod10GridComponent,
    Category9Mod10FormComponent,
    Issue10Mod10PageComponent,
    Issue10Mod10GridComponent,
    Issue10Mod10FormComponent,
    Issue1Mod10PageComponent,
    Issue1Mod10GridComponent,
    Issue1Mod10FormComponent,
    Issue2Mod10PageComponent,
    Issue2Mod10GridComponent,
    Issue2Mod10FormComponent,
    Issue3Mod10PageComponent,
    Issue3Mod10GridComponent,
    Issue3Mod10FormComponent,
    Issue4Mod10PageComponent,
    Issue4Mod10GridComponent,
    Issue4Mod10FormComponent,
    Issue5Mod10PageComponent,
    Issue5Mod10GridComponent,
    Issue5Mod10FormComponent,
    Issue6Mod10PageComponent,
    Issue6Mod10GridComponent,
    Issue6Mod10FormComponent,
    Issue7Mod10PageComponent,
    Issue7Mod10GridComponent,
    Issue7Mod10FormComponent,
    Issue8Mod10PageComponent,
    Issue8Mod10GridComponent,
    Issue8Mod10FormComponent,
    Issue9Mod10PageComponent,
    Issue9Mod10GridComponent,
    Issue9Mod10FormComponent,
    Project10Mod10PageComponent,
    Project10Mod10GridComponent,
    Project10Mod10FormComponent,
    Project1Mod10PageComponent,
    Project1Mod10GridComponent,
    Project1Mod10FormComponent,
    Project2Mod10PageComponent,
    Project2Mod10GridComponent,
    Project2Mod10FormComponent,
    Project3Mod10PageComponent,
    Project3Mod10GridComponent,
    Project3Mod10FormComponent,
    Project4Mod10PageComponent,
    Project4Mod10GridComponent,
    Project4Mod10FormComponent,
    Project5Mod10PageComponent,
    Project5Mod10GridComponent,
    Project5Mod10FormComponent,
    Project6Mod10PageComponent,
    Project6Mod10GridComponent,
    Project6Mod10FormComponent,
    Project7Mod10PageComponent,
    Project7Mod10GridComponent,
    Project7Mod10FormComponent,
    Project8Mod10PageComponent,
    Project8Mod10GridComponent,
    Project8Mod10FormComponent,
    Project9Mod10PageComponent,
    Project9Mod10GridComponent,
    Project9Mod10FormComponent,
    Severity10Mod10PageComponent,
    Severity10Mod10GridComponent,
    Severity10Mod10FormComponent,
    Severity1Mod10PageComponent,
    Severity1Mod10GridComponent,
    Severity1Mod10FormComponent,
    Severity2Mod10PageComponent,
    Severity2Mod10GridComponent,
    Severity2Mod10FormComponent,
    Severity3Mod10PageComponent,
    Severity3Mod10GridComponent,
    Severity3Mod10FormComponent,
    Severity4Mod10PageComponent,
    Severity4Mod10GridComponent,
    Severity4Mod10FormComponent,
    Severity5Mod10PageComponent,
    Severity5Mod10GridComponent,
    Severity5Mod10FormComponent,
    Severity6Mod10PageComponent,
    Severity6Mod10GridComponent,
    Severity6Mod10FormComponent,
    Severity7Mod10PageComponent,
    Severity7Mod10GridComponent,
    Severity7Mod10FormComponent,
    Severity8Mod10PageComponent,
    Severity8Mod10GridComponent,
    Severity8Mod10FormComponent,
    Severity9Mod10PageComponent,
    Severity9Mod10GridComponent,
    Severity9Mod10FormComponent,
    Status10Mod10PageComponent,
    Status10Mod10GridComponent,
    Status10Mod10FormComponent,
    Status1Mod10PageComponent,
    Status1Mod10GridComponent,
    Status1Mod10FormComponent,
    Status2Mod10PageComponent,
    Status2Mod10GridComponent,
    Status2Mod10FormComponent,
    Status3Mod10PageComponent,
    Status3Mod10GridComponent,
    Status3Mod10FormComponent,
    Status4Mod10PageComponent,
    Status4Mod10GridComponent,
    Status4Mod10FormComponent,
    Status5Mod10PageComponent,
    Status5Mod10GridComponent,
    Status5Mod10FormComponent,
    Status6Mod10PageComponent,
    Status6Mod10GridComponent,
    Status6Mod10FormComponent,
    Status7Mod10PageComponent,
    Status7Mod10GridComponent,
    Status7Mod10FormComponent,
    Status8Mod10PageComponent,
    Status8Mod10GridComponent,
    Status8Mod10FormComponent,
    Status9Mod10PageComponent,
    Status9Mod10GridComponent,
    Status9Mod10FormComponent,
  ],
  exports: [
  ]
})
export class Mod10Module { }
