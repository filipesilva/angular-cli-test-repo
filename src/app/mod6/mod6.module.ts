import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod6RoutingModule } from './mod6-routing.module';

// Components
import { Category10Mod6PageComponent } from './pages/category10-mod6-page/category10-mod6-page.component';
import { Category10Mod6GridComponent } from './pages/category10-mod6-page/components/category10-mod6-grid/category10-mod6-grid.component';
import { Category10Mod6FormComponent } from './pages/category10-mod6-page/components/category10-mod6-form/category10-mod6-form.component';
import { Category1Mod6PageComponent } from './pages/category1-mod6-page/category1-mod6-page.component';
import { Category1Mod6GridComponent } from './pages/category1-mod6-page/components/category1-mod6-grid/category1-mod6-grid.component';
import { Category1Mod6FormComponent } from './pages/category1-mod6-page/components/category1-mod6-form/category1-mod6-form.component';
import { Category2Mod6PageComponent } from './pages/category2-mod6-page/category2-mod6-page.component';
import { Category2Mod6GridComponent } from './pages/category2-mod6-page/components/category2-mod6-grid/category2-mod6-grid.component';
import { Category2Mod6FormComponent } from './pages/category2-mod6-page/components/category2-mod6-form/category2-mod6-form.component';
import { Category3Mod6PageComponent } from './pages/category3-mod6-page/category3-mod6-page.component';
import { Category3Mod6GridComponent } from './pages/category3-mod6-page/components/category3-mod6-grid/category3-mod6-grid.component';
import { Category3Mod6FormComponent } from './pages/category3-mod6-page/components/category3-mod6-form/category3-mod6-form.component';
import { Category4Mod6PageComponent } from './pages/category4-mod6-page/category4-mod6-page.component';
import { Category4Mod6GridComponent } from './pages/category4-mod6-page/components/category4-mod6-grid/category4-mod6-grid.component';
import { Category4Mod6FormComponent } from './pages/category4-mod6-page/components/category4-mod6-form/category4-mod6-form.component';
import { Category5Mod6PageComponent } from './pages/category5-mod6-page/category5-mod6-page.component';
import { Category5Mod6GridComponent } from './pages/category5-mod6-page/components/category5-mod6-grid/category5-mod6-grid.component';
import { Category5Mod6FormComponent } from './pages/category5-mod6-page/components/category5-mod6-form/category5-mod6-form.component';
import { Category6Mod6PageComponent } from './pages/category6-mod6-page/category6-mod6-page.component';
import { Category6Mod6GridComponent } from './pages/category6-mod6-page/components/category6-mod6-grid/category6-mod6-grid.component';
import { Category6Mod6FormComponent } from './pages/category6-mod6-page/components/category6-mod6-form/category6-mod6-form.component';
import { Category7Mod6PageComponent } from './pages/category7-mod6-page/category7-mod6-page.component';
import { Category7Mod6GridComponent } from './pages/category7-mod6-page/components/category7-mod6-grid/category7-mod6-grid.component';
import { Category7Mod6FormComponent } from './pages/category7-mod6-page/components/category7-mod6-form/category7-mod6-form.component';
import { Category8Mod6PageComponent } from './pages/category8-mod6-page/category8-mod6-page.component';
import { Category8Mod6GridComponent } from './pages/category8-mod6-page/components/category8-mod6-grid/category8-mod6-grid.component';
import { Category8Mod6FormComponent } from './pages/category8-mod6-page/components/category8-mod6-form/category8-mod6-form.component';
import { Category9Mod6PageComponent } from './pages/category9-mod6-page/category9-mod6-page.component';
import { Category9Mod6GridComponent } from './pages/category9-mod6-page/components/category9-mod6-grid/category9-mod6-grid.component';
import { Category9Mod6FormComponent } from './pages/category9-mod6-page/components/category9-mod6-form/category9-mod6-form.component';
import { Issue10Mod6PageComponent } from './pages/issue10-mod6-page/issue10-mod6-page.component';
import { Issue10Mod6GridComponent } from './pages/issue10-mod6-page/components/issue10-mod6-grid/issue10-mod6-grid.component';
import { Issue10Mod6FormComponent } from './pages/issue10-mod6-page/components/issue10-mod6-form/issue10-mod6-form.component';
import { Issue1Mod6PageComponent } from './pages/issue1-mod6-page/issue1-mod6-page.component';
import { Issue1Mod6GridComponent } from './pages/issue1-mod6-page/components/issue1-mod6-grid/issue1-mod6-grid.component';
import { Issue1Mod6FormComponent } from './pages/issue1-mod6-page/components/issue1-mod6-form/issue1-mod6-form.component';
import { Issue2Mod6PageComponent } from './pages/issue2-mod6-page/issue2-mod6-page.component';
import { Issue2Mod6GridComponent } from './pages/issue2-mod6-page/components/issue2-mod6-grid/issue2-mod6-grid.component';
import { Issue2Mod6FormComponent } from './pages/issue2-mod6-page/components/issue2-mod6-form/issue2-mod6-form.component';
import { Issue3Mod6PageComponent } from './pages/issue3-mod6-page/issue3-mod6-page.component';
import { Issue3Mod6GridComponent } from './pages/issue3-mod6-page/components/issue3-mod6-grid/issue3-mod6-grid.component';
import { Issue3Mod6FormComponent } from './pages/issue3-mod6-page/components/issue3-mod6-form/issue3-mod6-form.component';
import { Issue4Mod6PageComponent } from './pages/issue4-mod6-page/issue4-mod6-page.component';
import { Issue4Mod6GridComponent } from './pages/issue4-mod6-page/components/issue4-mod6-grid/issue4-mod6-grid.component';
import { Issue4Mod6FormComponent } from './pages/issue4-mod6-page/components/issue4-mod6-form/issue4-mod6-form.component';
import { Issue5Mod6PageComponent } from './pages/issue5-mod6-page/issue5-mod6-page.component';
import { Issue5Mod6GridComponent } from './pages/issue5-mod6-page/components/issue5-mod6-grid/issue5-mod6-grid.component';
import { Issue5Mod6FormComponent } from './pages/issue5-mod6-page/components/issue5-mod6-form/issue5-mod6-form.component';
import { Issue6Mod6PageComponent } from './pages/issue6-mod6-page/issue6-mod6-page.component';
import { Issue6Mod6GridComponent } from './pages/issue6-mod6-page/components/issue6-mod6-grid/issue6-mod6-grid.component';
import { Issue6Mod6FormComponent } from './pages/issue6-mod6-page/components/issue6-mod6-form/issue6-mod6-form.component';
import { Issue7Mod6PageComponent } from './pages/issue7-mod6-page/issue7-mod6-page.component';
import { Issue7Mod6GridComponent } from './pages/issue7-mod6-page/components/issue7-mod6-grid/issue7-mod6-grid.component';
import { Issue7Mod6FormComponent } from './pages/issue7-mod6-page/components/issue7-mod6-form/issue7-mod6-form.component';
import { Issue8Mod6PageComponent } from './pages/issue8-mod6-page/issue8-mod6-page.component';
import { Issue8Mod6GridComponent } from './pages/issue8-mod6-page/components/issue8-mod6-grid/issue8-mod6-grid.component';
import { Issue8Mod6FormComponent } from './pages/issue8-mod6-page/components/issue8-mod6-form/issue8-mod6-form.component';
import { Issue9Mod6PageComponent } from './pages/issue9-mod6-page/issue9-mod6-page.component';
import { Issue9Mod6GridComponent } from './pages/issue9-mod6-page/components/issue9-mod6-grid/issue9-mod6-grid.component';
import { Issue9Mod6FormComponent } from './pages/issue9-mod6-page/components/issue9-mod6-form/issue9-mod6-form.component';
import { Project10Mod6PageComponent } from './pages/project10-mod6-page/project10-mod6-page.component';
import { Project10Mod6GridComponent } from './pages/project10-mod6-page/components/project10-mod6-grid/project10-mod6-grid.component';
import { Project10Mod6FormComponent } from './pages/project10-mod6-page/components/project10-mod6-form/project10-mod6-form.component';
import { Project1Mod6PageComponent } from './pages/project1-mod6-page/project1-mod6-page.component';
import { Project1Mod6GridComponent } from './pages/project1-mod6-page/components/project1-mod6-grid/project1-mod6-grid.component';
import { Project1Mod6FormComponent } from './pages/project1-mod6-page/components/project1-mod6-form/project1-mod6-form.component';
import { Project2Mod6PageComponent } from './pages/project2-mod6-page/project2-mod6-page.component';
import { Project2Mod6GridComponent } from './pages/project2-mod6-page/components/project2-mod6-grid/project2-mod6-grid.component';
import { Project2Mod6FormComponent } from './pages/project2-mod6-page/components/project2-mod6-form/project2-mod6-form.component';
import { Project3Mod6PageComponent } from './pages/project3-mod6-page/project3-mod6-page.component';
import { Project3Mod6GridComponent } from './pages/project3-mod6-page/components/project3-mod6-grid/project3-mod6-grid.component';
import { Project3Mod6FormComponent } from './pages/project3-mod6-page/components/project3-mod6-form/project3-mod6-form.component';
import { Project4Mod6PageComponent } from './pages/project4-mod6-page/project4-mod6-page.component';
import { Project4Mod6GridComponent } from './pages/project4-mod6-page/components/project4-mod6-grid/project4-mod6-grid.component';
import { Project4Mod6FormComponent } from './pages/project4-mod6-page/components/project4-mod6-form/project4-mod6-form.component';
import { Project5Mod6PageComponent } from './pages/project5-mod6-page/project5-mod6-page.component';
import { Project5Mod6GridComponent } from './pages/project5-mod6-page/components/project5-mod6-grid/project5-mod6-grid.component';
import { Project5Mod6FormComponent } from './pages/project5-mod6-page/components/project5-mod6-form/project5-mod6-form.component';
import { Project6Mod6PageComponent } from './pages/project6-mod6-page/project6-mod6-page.component';
import { Project6Mod6GridComponent } from './pages/project6-mod6-page/components/project6-mod6-grid/project6-mod6-grid.component';
import { Project6Mod6FormComponent } from './pages/project6-mod6-page/components/project6-mod6-form/project6-mod6-form.component';
import { Project7Mod6PageComponent } from './pages/project7-mod6-page/project7-mod6-page.component';
import { Project7Mod6GridComponent } from './pages/project7-mod6-page/components/project7-mod6-grid/project7-mod6-grid.component';
import { Project7Mod6FormComponent } from './pages/project7-mod6-page/components/project7-mod6-form/project7-mod6-form.component';
import { Project8Mod6PageComponent } from './pages/project8-mod6-page/project8-mod6-page.component';
import { Project8Mod6GridComponent } from './pages/project8-mod6-page/components/project8-mod6-grid/project8-mod6-grid.component';
import { Project8Mod6FormComponent } from './pages/project8-mod6-page/components/project8-mod6-form/project8-mod6-form.component';
import { Project9Mod6PageComponent } from './pages/project9-mod6-page/project9-mod6-page.component';
import { Project9Mod6GridComponent } from './pages/project9-mod6-page/components/project9-mod6-grid/project9-mod6-grid.component';
import { Project9Mod6FormComponent } from './pages/project9-mod6-page/components/project9-mod6-form/project9-mod6-form.component';
import { Severity10Mod6PageComponent } from './pages/severity10-mod6-page/severity10-mod6-page.component';
import { Severity10Mod6GridComponent } from './pages/severity10-mod6-page/components/severity10-mod6-grid/severity10-mod6-grid.component';
import { Severity10Mod6FormComponent } from './pages/severity10-mod6-page/components/severity10-mod6-form/severity10-mod6-form.component';
import { Severity1Mod6PageComponent } from './pages/severity1-mod6-page/severity1-mod6-page.component';
import { Severity1Mod6GridComponent } from './pages/severity1-mod6-page/components/severity1-mod6-grid/severity1-mod6-grid.component';
import { Severity1Mod6FormComponent } from './pages/severity1-mod6-page/components/severity1-mod6-form/severity1-mod6-form.component';
import { Severity2Mod6PageComponent } from './pages/severity2-mod6-page/severity2-mod6-page.component';
import { Severity2Mod6GridComponent } from './pages/severity2-mod6-page/components/severity2-mod6-grid/severity2-mod6-grid.component';
import { Severity2Mod6FormComponent } from './pages/severity2-mod6-page/components/severity2-mod6-form/severity2-mod6-form.component';
import { Severity3Mod6PageComponent } from './pages/severity3-mod6-page/severity3-mod6-page.component';
import { Severity3Mod6GridComponent } from './pages/severity3-mod6-page/components/severity3-mod6-grid/severity3-mod6-grid.component';
import { Severity3Mod6FormComponent } from './pages/severity3-mod6-page/components/severity3-mod6-form/severity3-mod6-form.component';
import { Severity4Mod6PageComponent } from './pages/severity4-mod6-page/severity4-mod6-page.component';
import { Severity4Mod6GridComponent } from './pages/severity4-mod6-page/components/severity4-mod6-grid/severity4-mod6-grid.component';
import { Severity4Mod6FormComponent } from './pages/severity4-mod6-page/components/severity4-mod6-form/severity4-mod6-form.component';
import { Severity5Mod6PageComponent } from './pages/severity5-mod6-page/severity5-mod6-page.component';
import { Severity5Mod6GridComponent } from './pages/severity5-mod6-page/components/severity5-mod6-grid/severity5-mod6-grid.component';
import { Severity5Mod6FormComponent } from './pages/severity5-mod6-page/components/severity5-mod6-form/severity5-mod6-form.component';
import { Severity6Mod6PageComponent } from './pages/severity6-mod6-page/severity6-mod6-page.component';
import { Severity6Mod6GridComponent } from './pages/severity6-mod6-page/components/severity6-mod6-grid/severity6-mod6-grid.component';
import { Severity6Mod6FormComponent } from './pages/severity6-mod6-page/components/severity6-mod6-form/severity6-mod6-form.component';
import { Severity7Mod6PageComponent } from './pages/severity7-mod6-page/severity7-mod6-page.component';
import { Severity7Mod6GridComponent } from './pages/severity7-mod6-page/components/severity7-mod6-grid/severity7-mod6-grid.component';
import { Severity7Mod6FormComponent } from './pages/severity7-mod6-page/components/severity7-mod6-form/severity7-mod6-form.component';
import { Severity8Mod6PageComponent } from './pages/severity8-mod6-page/severity8-mod6-page.component';
import { Severity8Mod6GridComponent } from './pages/severity8-mod6-page/components/severity8-mod6-grid/severity8-mod6-grid.component';
import { Severity8Mod6FormComponent } from './pages/severity8-mod6-page/components/severity8-mod6-form/severity8-mod6-form.component';
import { Severity9Mod6PageComponent } from './pages/severity9-mod6-page/severity9-mod6-page.component';
import { Severity9Mod6GridComponent } from './pages/severity9-mod6-page/components/severity9-mod6-grid/severity9-mod6-grid.component';
import { Severity9Mod6FormComponent } from './pages/severity9-mod6-page/components/severity9-mod6-form/severity9-mod6-form.component';
import { Status10Mod6PageComponent } from './pages/status10-mod6-page/status10-mod6-page.component';
import { Status10Mod6GridComponent } from './pages/status10-mod6-page/components/status10-mod6-grid/status10-mod6-grid.component';
import { Status10Mod6FormComponent } from './pages/status10-mod6-page/components/status10-mod6-form/status10-mod6-form.component';
import { Status1Mod6PageComponent } from './pages/status1-mod6-page/status1-mod6-page.component';
import { Status1Mod6GridComponent } from './pages/status1-mod6-page/components/status1-mod6-grid/status1-mod6-grid.component';
import { Status1Mod6FormComponent } from './pages/status1-mod6-page/components/status1-mod6-form/status1-mod6-form.component';
import { Status2Mod6PageComponent } from './pages/status2-mod6-page/status2-mod6-page.component';
import { Status2Mod6GridComponent } from './pages/status2-mod6-page/components/status2-mod6-grid/status2-mod6-grid.component';
import { Status2Mod6FormComponent } from './pages/status2-mod6-page/components/status2-mod6-form/status2-mod6-form.component';
import { Status3Mod6PageComponent } from './pages/status3-mod6-page/status3-mod6-page.component';
import { Status3Mod6GridComponent } from './pages/status3-mod6-page/components/status3-mod6-grid/status3-mod6-grid.component';
import { Status3Mod6FormComponent } from './pages/status3-mod6-page/components/status3-mod6-form/status3-mod6-form.component';
import { Status4Mod6PageComponent } from './pages/status4-mod6-page/status4-mod6-page.component';
import { Status4Mod6GridComponent } from './pages/status4-mod6-page/components/status4-mod6-grid/status4-mod6-grid.component';
import { Status4Mod6FormComponent } from './pages/status4-mod6-page/components/status4-mod6-form/status4-mod6-form.component';
import { Status5Mod6PageComponent } from './pages/status5-mod6-page/status5-mod6-page.component';
import { Status5Mod6GridComponent } from './pages/status5-mod6-page/components/status5-mod6-grid/status5-mod6-grid.component';
import { Status5Mod6FormComponent } from './pages/status5-mod6-page/components/status5-mod6-form/status5-mod6-form.component';
import { Status6Mod6PageComponent } from './pages/status6-mod6-page/status6-mod6-page.component';
import { Status6Mod6GridComponent } from './pages/status6-mod6-page/components/status6-mod6-grid/status6-mod6-grid.component';
import { Status6Mod6FormComponent } from './pages/status6-mod6-page/components/status6-mod6-form/status6-mod6-form.component';
import { Status7Mod6PageComponent } from './pages/status7-mod6-page/status7-mod6-page.component';
import { Status7Mod6GridComponent } from './pages/status7-mod6-page/components/status7-mod6-grid/status7-mod6-grid.component';
import { Status7Mod6FormComponent } from './pages/status7-mod6-page/components/status7-mod6-form/status7-mod6-form.component';
import { Status8Mod6PageComponent } from './pages/status8-mod6-page/status8-mod6-page.component';
import { Status8Mod6GridComponent } from './pages/status8-mod6-page/components/status8-mod6-grid/status8-mod6-grid.component';
import { Status8Mod6FormComponent } from './pages/status8-mod6-page/components/status8-mod6-form/status8-mod6-form.component';
import { Status9Mod6PageComponent } from './pages/status9-mod6-page/status9-mod6-page.component';
import { Status9Mod6GridComponent } from './pages/status9-mod6-page/components/status9-mod6-grid/status9-mod6-grid.component';
import { Status9Mod6FormComponent } from './pages/status9-mod6-page/components/status9-mod6-form/status9-mod6-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod6RoutingModule,
  ],
  declarations: [
    Category10Mod6PageComponent,
    Category10Mod6GridComponent,
    Category10Mod6FormComponent,
    Category1Mod6PageComponent,
    Category1Mod6GridComponent,
    Category1Mod6FormComponent,
    Category2Mod6PageComponent,
    Category2Mod6GridComponent,
    Category2Mod6FormComponent,
    Category3Mod6PageComponent,
    Category3Mod6GridComponent,
    Category3Mod6FormComponent,
    Category4Mod6PageComponent,
    Category4Mod6GridComponent,
    Category4Mod6FormComponent,
    Category5Mod6PageComponent,
    Category5Mod6GridComponent,
    Category5Mod6FormComponent,
    Category6Mod6PageComponent,
    Category6Mod6GridComponent,
    Category6Mod6FormComponent,
    Category7Mod6PageComponent,
    Category7Mod6GridComponent,
    Category7Mod6FormComponent,
    Category8Mod6PageComponent,
    Category8Mod6GridComponent,
    Category8Mod6FormComponent,
    Category9Mod6PageComponent,
    Category9Mod6GridComponent,
    Category9Mod6FormComponent,
    Issue10Mod6PageComponent,
    Issue10Mod6GridComponent,
    Issue10Mod6FormComponent,
    Issue1Mod6PageComponent,
    Issue1Mod6GridComponent,
    Issue1Mod6FormComponent,
    Issue2Mod6PageComponent,
    Issue2Mod6GridComponent,
    Issue2Mod6FormComponent,
    Issue3Mod6PageComponent,
    Issue3Mod6GridComponent,
    Issue3Mod6FormComponent,
    Issue4Mod6PageComponent,
    Issue4Mod6GridComponent,
    Issue4Mod6FormComponent,
    Issue5Mod6PageComponent,
    Issue5Mod6GridComponent,
    Issue5Mod6FormComponent,
    Issue6Mod6PageComponent,
    Issue6Mod6GridComponent,
    Issue6Mod6FormComponent,
    Issue7Mod6PageComponent,
    Issue7Mod6GridComponent,
    Issue7Mod6FormComponent,
    Issue8Mod6PageComponent,
    Issue8Mod6GridComponent,
    Issue8Mod6FormComponent,
    Issue9Mod6PageComponent,
    Issue9Mod6GridComponent,
    Issue9Mod6FormComponent,
    Project10Mod6PageComponent,
    Project10Mod6GridComponent,
    Project10Mod6FormComponent,
    Project1Mod6PageComponent,
    Project1Mod6GridComponent,
    Project1Mod6FormComponent,
    Project2Mod6PageComponent,
    Project2Mod6GridComponent,
    Project2Mod6FormComponent,
    Project3Mod6PageComponent,
    Project3Mod6GridComponent,
    Project3Mod6FormComponent,
    Project4Mod6PageComponent,
    Project4Mod6GridComponent,
    Project4Mod6FormComponent,
    Project5Mod6PageComponent,
    Project5Mod6GridComponent,
    Project5Mod6FormComponent,
    Project6Mod6PageComponent,
    Project6Mod6GridComponent,
    Project6Mod6FormComponent,
    Project7Mod6PageComponent,
    Project7Mod6GridComponent,
    Project7Mod6FormComponent,
    Project8Mod6PageComponent,
    Project8Mod6GridComponent,
    Project8Mod6FormComponent,
    Project9Mod6PageComponent,
    Project9Mod6GridComponent,
    Project9Mod6FormComponent,
    Severity10Mod6PageComponent,
    Severity10Mod6GridComponent,
    Severity10Mod6FormComponent,
    Severity1Mod6PageComponent,
    Severity1Mod6GridComponent,
    Severity1Mod6FormComponent,
    Severity2Mod6PageComponent,
    Severity2Mod6GridComponent,
    Severity2Mod6FormComponent,
    Severity3Mod6PageComponent,
    Severity3Mod6GridComponent,
    Severity3Mod6FormComponent,
    Severity4Mod6PageComponent,
    Severity4Mod6GridComponent,
    Severity4Mod6FormComponent,
    Severity5Mod6PageComponent,
    Severity5Mod6GridComponent,
    Severity5Mod6FormComponent,
    Severity6Mod6PageComponent,
    Severity6Mod6GridComponent,
    Severity6Mod6FormComponent,
    Severity7Mod6PageComponent,
    Severity7Mod6GridComponent,
    Severity7Mod6FormComponent,
    Severity8Mod6PageComponent,
    Severity8Mod6GridComponent,
    Severity8Mod6FormComponent,
    Severity9Mod6PageComponent,
    Severity9Mod6GridComponent,
    Severity9Mod6FormComponent,
    Status10Mod6PageComponent,
    Status10Mod6GridComponent,
    Status10Mod6FormComponent,
    Status1Mod6PageComponent,
    Status1Mod6GridComponent,
    Status1Mod6FormComponent,
    Status2Mod6PageComponent,
    Status2Mod6GridComponent,
    Status2Mod6FormComponent,
    Status3Mod6PageComponent,
    Status3Mod6GridComponent,
    Status3Mod6FormComponent,
    Status4Mod6PageComponent,
    Status4Mod6GridComponent,
    Status4Mod6FormComponent,
    Status5Mod6PageComponent,
    Status5Mod6GridComponent,
    Status5Mod6FormComponent,
    Status6Mod6PageComponent,
    Status6Mod6GridComponent,
    Status6Mod6FormComponent,
    Status7Mod6PageComponent,
    Status7Mod6GridComponent,
    Status7Mod6FormComponent,
    Status8Mod6PageComponent,
    Status8Mod6GridComponent,
    Status8Mod6FormComponent,
    Status9Mod6PageComponent,
    Status9Mod6GridComponent,
    Status9Mod6FormComponent,
  ],
  exports: [
  ]
})
export class Mod6Module { }
