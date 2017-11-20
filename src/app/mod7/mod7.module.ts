import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod7RoutingModule } from './mod7-routing.module';

// Components
import { Category10Mod7PageComponent } from './pages/category10-mod7-page/category10-mod7-page.component';
import { Category10Mod7GridComponent } from './pages/category10-mod7-page/components/category10-mod7-grid/category10-mod7-grid.component';
import { Category10Mod7FormComponent } from './pages/category10-mod7-page/components/category10-mod7-form/category10-mod7-form.component';
import { Category1Mod7PageComponent } from './pages/category1-mod7-page/category1-mod7-page.component';
import { Category1Mod7GridComponent } from './pages/category1-mod7-page/components/category1-mod7-grid/category1-mod7-grid.component';
import { Category1Mod7FormComponent } from './pages/category1-mod7-page/components/category1-mod7-form/category1-mod7-form.component';
import { Category2Mod7PageComponent } from './pages/category2-mod7-page/category2-mod7-page.component';
import { Category2Mod7GridComponent } from './pages/category2-mod7-page/components/category2-mod7-grid/category2-mod7-grid.component';
import { Category2Mod7FormComponent } from './pages/category2-mod7-page/components/category2-mod7-form/category2-mod7-form.component';
import { Category3Mod7PageComponent } from './pages/category3-mod7-page/category3-mod7-page.component';
import { Category3Mod7GridComponent } from './pages/category3-mod7-page/components/category3-mod7-grid/category3-mod7-grid.component';
import { Category3Mod7FormComponent } from './pages/category3-mod7-page/components/category3-mod7-form/category3-mod7-form.component';
import { Category4Mod7PageComponent } from './pages/category4-mod7-page/category4-mod7-page.component';
import { Category4Mod7GridComponent } from './pages/category4-mod7-page/components/category4-mod7-grid/category4-mod7-grid.component';
import { Category4Mod7FormComponent } from './pages/category4-mod7-page/components/category4-mod7-form/category4-mod7-form.component';
import { Category5Mod7PageComponent } from './pages/category5-mod7-page/category5-mod7-page.component';
import { Category5Mod7GridComponent } from './pages/category5-mod7-page/components/category5-mod7-grid/category5-mod7-grid.component';
import { Category5Mod7FormComponent } from './pages/category5-mod7-page/components/category5-mod7-form/category5-mod7-form.component';
import { Category6Mod7PageComponent } from './pages/category6-mod7-page/category6-mod7-page.component';
import { Category6Mod7GridComponent } from './pages/category6-mod7-page/components/category6-mod7-grid/category6-mod7-grid.component';
import { Category6Mod7FormComponent } from './pages/category6-mod7-page/components/category6-mod7-form/category6-mod7-form.component';
import { Category7Mod7PageComponent } from './pages/category7-mod7-page/category7-mod7-page.component';
import { Category7Mod7GridComponent } from './pages/category7-mod7-page/components/category7-mod7-grid/category7-mod7-grid.component';
import { Category7Mod7FormComponent } from './pages/category7-mod7-page/components/category7-mod7-form/category7-mod7-form.component';
import { Category8Mod7PageComponent } from './pages/category8-mod7-page/category8-mod7-page.component';
import { Category8Mod7GridComponent } from './pages/category8-mod7-page/components/category8-mod7-grid/category8-mod7-grid.component';
import { Category8Mod7FormComponent } from './pages/category8-mod7-page/components/category8-mod7-form/category8-mod7-form.component';
import { Category9Mod7PageComponent } from './pages/category9-mod7-page/category9-mod7-page.component';
import { Category9Mod7GridComponent } from './pages/category9-mod7-page/components/category9-mod7-grid/category9-mod7-grid.component';
import { Category9Mod7FormComponent } from './pages/category9-mod7-page/components/category9-mod7-form/category9-mod7-form.component';
import { Issue10Mod7PageComponent } from './pages/issue10-mod7-page/issue10-mod7-page.component';
import { Issue10Mod7GridComponent } from './pages/issue10-mod7-page/components/issue10-mod7-grid/issue10-mod7-grid.component';
import { Issue10Mod7FormComponent } from './pages/issue10-mod7-page/components/issue10-mod7-form/issue10-mod7-form.component';
import { Issue1Mod7PageComponent } from './pages/issue1-mod7-page/issue1-mod7-page.component';
import { Issue1Mod7GridComponent } from './pages/issue1-mod7-page/components/issue1-mod7-grid/issue1-mod7-grid.component';
import { Issue1Mod7FormComponent } from './pages/issue1-mod7-page/components/issue1-mod7-form/issue1-mod7-form.component';
import { Issue2Mod7PageComponent } from './pages/issue2-mod7-page/issue2-mod7-page.component';
import { Issue2Mod7GridComponent } from './pages/issue2-mod7-page/components/issue2-mod7-grid/issue2-mod7-grid.component';
import { Issue2Mod7FormComponent } from './pages/issue2-mod7-page/components/issue2-mod7-form/issue2-mod7-form.component';
import { Issue3Mod7PageComponent } from './pages/issue3-mod7-page/issue3-mod7-page.component';
import { Issue3Mod7GridComponent } from './pages/issue3-mod7-page/components/issue3-mod7-grid/issue3-mod7-grid.component';
import { Issue3Mod7FormComponent } from './pages/issue3-mod7-page/components/issue3-mod7-form/issue3-mod7-form.component';
import { Issue4Mod7PageComponent } from './pages/issue4-mod7-page/issue4-mod7-page.component';
import { Issue4Mod7GridComponent } from './pages/issue4-mod7-page/components/issue4-mod7-grid/issue4-mod7-grid.component';
import { Issue4Mod7FormComponent } from './pages/issue4-mod7-page/components/issue4-mod7-form/issue4-mod7-form.component';
import { Issue5Mod7PageComponent } from './pages/issue5-mod7-page/issue5-mod7-page.component';
import { Issue5Mod7GridComponent } from './pages/issue5-mod7-page/components/issue5-mod7-grid/issue5-mod7-grid.component';
import { Issue5Mod7FormComponent } from './pages/issue5-mod7-page/components/issue5-mod7-form/issue5-mod7-form.component';
import { Issue6Mod7PageComponent } from './pages/issue6-mod7-page/issue6-mod7-page.component';
import { Issue6Mod7GridComponent } from './pages/issue6-mod7-page/components/issue6-mod7-grid/issue6-mod7-grid.component';
import { Issue6Mod7FormComponent } from './pages/issue6-mod7-page/components/issue6-mod7-form/issue6-mod7-form.component';
import { Issue7Mod7PageComponent } from './pages/issue7-mod7-page/issue7-mod7-page.component';
import { Issue7Mod7GridComponent } from './pages/issue7-mod7-page/components/issue7-mod7-grid/issue7-mod7-grid.component';
import { Issue7Mod7FormComponent } from './pages/issue7-mod7-page/components/issue7-mod7-form/issue7-mod7-form.component';
import { Issue8Mod7PageComponent } from './pages/issue8-mod7-page/issue8-mod7-page.component';
import { Issue8Mod7GridComponent } from './pages/issue8-mod7-page/components/issue8-mod7-grid/issue8-mod7-grid.component';
import { Issue8Mod7FormComponent } from './pages/issue8-mod7-page/components/issue8-mod7-form/issue8-mod7-form.component';
import { Issue9Mod7PageComponent } from './pages/issue9-mod7-page/issue9-mod7-page.component';
import { Issue9Mod7GridComponent } from './pages/issue9-mod7-page/components/issue9-mod7-grid/issue9-mod7-grid.component';
import { Issue9Mod7FormComponent } from './pages/issue9-mod7-page/components/issue9-mod7-form/issue9-mod7-form.component';
import { Project10Mod7PageComponent } from './pages/project10-mod7-page/project10-mod7-page.component';
import { Project10Mod7GridComponent } from './pages/project10-mod7-page/components/project10-mod7-grid/project10-mod7-grid.component';
import { Project10Mod7FormComponent } from './pages/project10-mod7-page/components/project10-mod7-form/project10-mod7-form.component';
import { Project1Mod7PageComponent } from './pages/project1-mod7-page/project1-mod7-page.component';
import { Project1Mod7GridComponent } from './pages/project1-mod7-page/components/project1-mod7-grid/project1-mod7-grid.component';
import { Project1Mod7FormComponent } from './pages/project1-mod7-page/components/project1-mod7-form/project1-mod7-form.component';
import { Project2Mod7PageComponent } from './pages/project2-mod7-page/project2-mod7-page.component';
import { Project2Mod7GridComponent } from './pages/project2-mod7-page/components/project2-mod7-grid/project2-mod7-grid.component';
import { Project2Mod7FormComponent } from './pages/project2-mod7-page/components/project2-mod7-form/project2-mod7-form.component';
import { Project3Mod7PageComponent } from './pages/project3-mod7-page/project3-mod7-page.component';
import { Project3Mod7GridComponent } from './pages/project3-mod7-page/components/project3-mod7-grid/project3-mod7-grid.component';
import { Project3Mod7FormComponent } from './pages/project3-mod7-page/components/project3-mod7-form/project3-mod7-form.component';
import { Project4Mod7PageComponent } from './pages/project4-mod7-page/project4-mod7-page.component';
import { Project4Mod7GridComponent } from './pages/project4-mod7-page/components/project4-mod7-grid/project4-mod7-grid.component';
import { Project4Mod7FormComponent } from './pages/project4-mod7-page/components/project4-mod7-form/project4-mod7-form.component';
import { Project5Mod7PageComponent } from './pages/project5-mod7-page/project5-mod7-page.component';
import { Project5Mod7GridComponent } from './pages/project5-mod7-page/components/project5-mod7-grid/project5-mod7-grid.component';
import { Project5Mod7FormComponent } from './pages/project5-mod7-page/components/project5-mod7-form/project5-mod7-form.component';
import { Project6Mod7PageComponent } from './pages/project6-mod7-page/project6-mod7-page.component';
import { Project6Mod7GridComponent } from './pages/project6-mod7-page/components/project6-mod7-grid/project6-mod7-grid.component';
import { Project6Mod7FormComponent } from './pages/project6-mod7-page/components/project6-mod7-form/project6-mod7-form.component';
import { Project7Mod7PageComponent } from './pages/project7-mod7-page/project7-mod7-page.component';
import { Project7Mod7GridComponent } from './pages/project7-mod7-page/components/project7-mod7-grid/project7-mod7-grid.component';
import { Project7Mod7FormComponent } from './pages/project7-mod7-page/components/project7-mod7-form/project7-mod7-form.component';
import { Project8Mod7PageComponent } from './pages/project8-mod7-page/project8-mod7-page.component';
import { Project8Mod7GridComponent } from './pages/project8-mod7-page/components/project8-mod7-grid/project8-mod7-grid.component';
import { Project8Mod7FormComponent } from './pages/project8-mod7-page/components/project8-mod7-form/project8-mod7-form.component';
import { Project9Mod7PageComponent } from './pages/project9-mod7-page/project9-mod7-page.component';
import { Project9Mod7GridComponent } from './pages/project9-mod7-page/components/project9-mod7-grid/project9-mod7-grid.component';
import { Project9Mod7FormComponent } from './pages/project9-mod7-page/components/project9-mod7-form/project9-mod7-form.component';
import { Severity10Mod7PageComponent } from './pages/severity10-mod7-page/severity10-mod7-page.component';
import { Severity10Mod7GridComponent } from './pages/severity10-mod7-page/components/severity10-mod7-grid/severity10-mod7-grid.component';
import { Severity10Mod7FormComponent } from './pages/severity10-mod7-page/components/severity10-mod7-form/severity10-mod7-form.component';
import { Severity1Mod7PageComponent } from './pages/severity1-mod7-page/severity1-mod7-page.component';
import { Severity1Mod7GridComponent } from './pages/severity1-mod7-page/components/severity1-mod7-grid/severity1-mod7-grid.component';
import { Severity1Mod7FormComponent } from './pages/severity1-mod7-page/components/severity1-mod7-form/severity1-mod7-form.component';
import { Severity2Mod7PageComponent } from './pages/severity2-mod7-page/severity2-mod7-page.component';
import { Severity2Mod7GridComponent } from './pages/severity2-mod7-page/components/severity2-mod7-grid/severity2-mod7-grid.component';
import { Severity2Mod7FormComponent } from './pages/severity2-mod7-page/components/severity2-mod7-form/severity2-mod7-form.component';
import { Severity3Mod7PageComponent } from './pages/severity3-mod7-page/severity3-mod7-page.component';
import { Severity3Mod7GridComponent } from './pages/severity3-mod7-page/components/severity3-mod7-grid/severity3-mod7-grid.component';
import { Severity3Mod7FormComponent } from './pages/severity3-mod7-page/components/severity3-mod7-form/severity3-mod7-form.component';
import { Severity4Mod7PageComponent } from './pages/severity4-mod7-page/severity4-mod7-page.component';
import { Severity4Mod7GridComponent } from './pages/severity4-mod7-page/components/severity4-mod7-grid/severity4-mod7-grid.component';
import { Severity4Mod7FormComponent } from './pages/severity4-mod7-page/components/severity4-mod7-form/severity4-mod7-form.component';
import { Severity5Mod7PageComponent } from './pages/severity5-mod7-page/severity5-mod7-page.component';
import { Severity5Mod7GridComponent } from './pages/severity5-mod7-page/components/severity5-mod7-grid/severity5-mod7-grid.component';
import { Severity5Mod7FormComponent } from './pages/severity5-mod7-page/components/severity5-mod7-form/severity5-mod7-form.component';
import { Severity6Mod7PageComponent } from './pages/severity6-mod7-page/severity6-mod7-page.component';
import { Severity6Mod7GridComponent } from './pages/severity6-mod7-page/components/severity6-mod7-grid/severity6-mod7-grid.component';
import { Severity6Mod7FormComponent } from './pages/severity6-mod7-page/components/severity6-mod7-form/severity6-mod7-form.component';
import { Severity7Mod7PageComponent } from './pages/severity7-mod7-page/severity7-mod7-page.component';
import { Severity7Mod7GridComponent } from './pages/severity7-mod7-page/components/severity7-mod7-grid/severity7-mod7-grid.component';
import { Severity7Mod7FormComponent } from './pages/severity7-mod7-page/components/severity7-mod7-form/severity7-mod7-form.component';
import { Severity8Mod7PageComponent } from './pages/severity8-mod7-page/severity8-mod7-page.component';
import { Severity8Mod7GridComponent } from './pages/severity8-mod7-page/components/severity8-mod7-grid/severity8-mod7-grid.component';
import { Severity8Mod7FormComponent } from './pages/severity8-mod7-page/components/severity8-mod7-form/severity8-mod7-form.component';
import { Severity9Mod7PageComponent } from './pages/severity9-mod7-page/severity9-mod7-page.component';
import { Severity9Mod7GridComponent } from './pages/severity9-mod7-page/components/severity9-mod7-grid/severity9-mod7-grid.component';
import { Severity9Mod7FormComponent } from './pages/severity9-mod7-page/components/severity9-mod7-form/severity9-mod7-form.component';
import { Status10Mod7PageComponent } from './pages/status10-mod7-page/status10-mod7-page.component';
import { Status10Mod7GridComponent } from './pages/status10-mod7-page/components/status10-mod7-grid/status10-mod7-grid.component';
import { Status10Mod7FormComponent } from './pages/status10-mod7-page/components/status10-mod7-form/status10-mod7-form.component';
import { Status1Mod7PageComponent } from './pages/status1-mod7-page/status1-mod7-page.component';
import { Status1Mod7GridComponent } from './pages/status1-mod7-page/components/status1-mod7-grid/status1-mod7-grid.component';
import { Status1Mod7FormComponent } from './pages/status1-mod7-page/components/status1-mod7-form/status1-mod7-form.component';
import { Status2Mod7PageComponent } from './pages/status2-mod7-page/status2-mod7-page.component';
import { Status2Mod7GridComponent } from './pages/status2-mod7-page/components/status2-mod7-grid/status2-mod7-grid.component';
import { Status2Mod7FormComponent } from './pages/status2-mod7-page/components/status2-mod7-form/status2-mod7-form.component';
import { Status3Mod7PageComponent } from './pages/status3-mod7-page/status3-mod7-page.component';
import { Status3Mod7GridComponent } from './pages/status3-mod7-page/components/status3-mod7-grid/status3-mod7-grid.component';
import { Status3Mod7FormComponent } from './pages/status3-mod7-page/components/status3-mod7-form/status3-mod7-form.component';
import { Status4Mod7PageComponent } from './pages/status4-mod7-page/status4-mod7-page.component';
import { Status4Mod7GridComponent } from './pages/status4-mod7-page/components/status4-mod7-grid/status4-mod7-grid.component';
import { Status4Mod7FormComponent } from './pages/status4-mod7-page/components/status4-mod7-form/status4-mod7-form.component';
import { Status5Mod7PageComponent } from './pages/status5-mod7-page/status5-mod7-page.component';
import { Status5Mod7GridComponent } from './pages/status5-mod7-page/components/status5-mod7-grid/status5-mod7-grid.component';
import { Status5Mod7FormComponent } from './pages/status5-mod7-page/components/status5-mod7-form/status5-mod7-form.component';
import { Status6Mod7PageComponent } from './pages/status6-mod7-page/status6-mod7-page.component';
import { Status6Mod7GridComponent } from './pages/status6-mod7-page/components/status6-mod7-grid/status6-mod7-grid.component';
import { Status6Mod7FormComponent } from './pages/status6-mod7-page/components/status6-mod7-form/status6-mod7-form.component';
import { Status7Mod7PageComponent } from './pages/status7-mod7-page/status7-mod7-page.component';
import { Status7Mod7GridComponent } from './pages/status7-mod7-page/components/status7-mod7-grid/status7-mod7-grid.component';
import { Status7Mod7FormComponent } from './pages/status7-mod7-page/components/status7-mod7-form/status7-mod7-form.component';
import { Status8Mod7PageComponent } from './pages/status8-mod7-page/status8-mod7-page.component';
import { Status8Mod7GridComponent } from './pages/status8-mod7-page/components/status8-mod7-grid/status8-mod7-grid.component';
import { Status8Mod7FormComponent } from './pages/status8-mod7-page/components/status8-mod7-form/status8-mod7-form.component';
import { Status9Mod7PageComponent } from './pages/status9-mod7-page/status9-mod7-page.component';
import { Status9Mod7GridComponent } from './pages/status9-mod7-page/components/status9-mod7-grid/status9-mod7-grid.component';
import { Status9Mod7FormComponent } from './pages/status9-mod7-page/components/status9-mod7-form/status9-mod7-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod7RoutingModule,
  ],
  declarations: [
    Category10Mod7PageComponent,
    Category10Mod7GridComponent,
    Category10Mod7FormComponent,
    Category1Mod7PageComponent,
    Category1Mod7GridComponent,
    Category1Mod7FormComponent,
    Category2Mod7PageComponent,
    Category2Mod7GridComponent,
    Category2Mod7FormComponent,
    Category3Mod7PageComponent,
    Category3Mod7GridComponent,
    Category3Mod7FormComponent,
    Category4Mod7PageComponent,
    Category4Mod7GridComponent,
    Category4Mod7FormComponent,
    Category5Mod7PageComponent,
    Category5Mod7GridComponent,
    Category5Mod7FormComponent,
    Category6Mod7PageComponent,
    Category6Mod7GridComponent,
    Category6Mod7FormComponent,
    Category7Mod7PageComponent,
    Category7Mod7GridComponent,
    Category7Mod7FormComponent,
    Category8Mod7PageComponent,
    Category8Mod7GridComponent,
    Category8Mod7FormComponent,
    Category9Mod7PageComponent,
    Category9Mod7GridComponent,
    Category9Mod7FormComponent,
    Issue10Mod7PageComponent,
    Issue10Mod7GridComponent,
    Issue10Mod7FormComponent,
    Issue1Mod7PageComponent,
    Issue1Mod7GridComponent,
    Issue1Mod7FormComponent,
    Issue2Mod7PageComponent,
    Issue2Mod7GridComponent,
    Issue2Mod7FormComponent,
    Issue3Mod7PageComponent,
    Issue3Mod7GridComponent,
    Issue3Mod7FormComponent,
    Issue4Mod7PageComponent,
    Issue4Mod7GridComponent,
    Issue4Mod7FormComponent,
    Issue5Mod7PageComponent,
    Issue5Mod7GridComponent,
    Issue5Mod7FormComponent,
    Issue6Mod7PageComponent,
    Issue6Mod7GridComponent,
    Issue6Mod7FormComponent,
    Issue7Mod7PageComponent,
    Issue7Mod7GridComponent,
    Issue7Mod7FormComponent,
    Issue8Mod7PageComponent,
    Issue8Mod7GridComponent,
    Issue8Mod7FormComponent,
    Issue9Mod7PageComponent,
    Issue9Mod7GridComponent,
    Issue9Mod7FormComponent,
    Project10Mod7PageComponent,
    Project10Mod7GridComponent,
    Project10Mod7FormComponent,
    Project1Mod7PageComponent,
    Project1Mod7GridComponent,
    Project1Mod7FormComponent,
    Project2Mod7PageComponent,
    Project2Mod7GridComponent,
    Project2Mod7FormComponent,
    Project3Mod7PageComponent,
    Project3Mod7GridComponent,
    Project3Mod7FormComponent,
    Project4Mod7PageComponent,
    Project4Mod7GridComponent,
    Project4Mod7FormComponent,
    Project5Mod7PageComponent,
    Project5Mod7GridComponent,
    Project5Mod7FormComponent,
    Project6Mod7PageComponent,
    Project6Mod7GridComponent,
    Project6Mod7FormComponent,
    Project7Mod7PageComponent,
    Project7Mod7GridComponent,
    Project7Mod7FormComponent,
    Project8Mod7PageComponent,
    Project8Mod7GridComponent,
    Project8Mod7FormComponent,
    Project9Mod7PageComponent,
    Project9Mod7GridComponent,
    Project9Mod7FormComponent,
    Severity10Mod7PageComponent,
    Severity10Mod7GridComponent,
    Severity10Mod7FormComponent,
    Severity1Mod7PageComponent,
    Severity1Mod7GridComponent,
    Severity1Mod7FormComponent,
    Severity2Mod7PageComponent,
    Severity2Mod7GridComponent,
    Severity2Mod7FormComponent,
    Severity3Mod7PageComponent,
    Severity3Mod7GridComponent,
    Severity3Mod7FormComponent,
    Severity4Mod7PageComponent,
    Severity4Mod7GridComponent,
    Severity4Mod7FormComponent,
    Severity5Mod7PageComponent,
    Severity5Mod7GridComponent,
    Severity5Mod7FormComponent,
    Severity6Mod7PageComponent,
    Severity6Mod7GridComponent,
    Severity6Mod7FormComponent,
    Severity7Mod7PageComponent,
    Severity7Mod7GridComponent,
    Severity7Mod7FormComponent,
    Severity8Mod7PageComponent,
    Severity8Mod7GridComponent,
    Severity8Mod7FormComponent,
    Severity9Mod7PageComponent,
    Severity9Mod7GridComponent,
    Severity9Mod7FormComponent,
    Status10Mod7PageComponent,
    Status10Mod7GridComponent,
    Status10Mod7FormComponent,
    Status1Mod7PageComponent,
    Status1Mod7GridComponent,
    Status1Mod7FormComponent,
    Status2Mod7PageComponent,
    Status2Mod7GridComponent,
    Status2Mod7FormComponent,
    Status3Mod7PageComponent,
    Status3Mod7GridComponent,
    Status3Mod7FormComponent,
    Status4Mod7PageComponent,
    Status4Mod7GridComponent,
    Status4Mod7FormComponent,
    Status5Mod7PageComponent,
    Status5Mod7GridComponent,
    Status5Mod7FormComponent,
    Status6Mod7PageComponent,
    Status6Mod7GridComponent,
    Status6Mod7FormComponent,
    Status7Mod7PageComponent,
    Status7Mod7GridComponent,
    Status7Mod7FormComponent,
    Status8Mod7PageComponent,
    Status8Mod7GridComponent,
    Status8Mod7FormComponent,
    Status9Mod7PageComponent,
    Status9Mod7GridComponent,
    Status9Mod7FormComponent,
  ],
  exports: [
  ]
})
export class Mod7Module { }
