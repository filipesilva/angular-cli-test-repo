import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod2RoutingModule } from './mod2-routing.module';

// Components
import { Category10Mod2PageComponent } from './pages/category10-mod2-page/category10-mod2-page.component';
import { Category10Mod2GridComponent } from './pages/category10-mod2-page/components/category10-mod2-grid/category10-mod2-grid.component';
import { Category10Mod2FormComponent } from './pages/category10-mod2-page/components/category10-mod2-form/category10-mod2-form.component';
import { Category1Mod2PageComponent } from './pages/category1-mod2-page/category1-mod2-page.component';
import { Category1Mod2GridComponent } from './pages/category1-mod2-page/components/category1-mod2-grid/category1-mod2-grid.component';
import { Category1Mod2FormComponent } from './pages/category1-mod2-page/components/category1-mod2-form/category1-mod2-form.component';
import { Category2Mod2PageComponent } from './pages/category2-mod2-page/category2-mod2-page.component';
import { Category2Mod2GridComponent } from './pages/category2-mod2-page/components/category2-mod2-grid/category2-mod2-grid.component';
import { Category2Mod2FormComponent } from './pages/category2-mod2-page/components/category2-mod2-form/category2-mod2-form.component';
import { Category3Mod2PageComponent } from './pages/category3-mod2-page/category3-mod2-page.component';
import { Category3Mod2GridComponent } from './pages/category3-mod2-page/components/category3-mod2-grid/category3-mod2-grid.component';
import { Category3Mod2FormComponent } from './pages/category3-mod2-page/components/category3-mod2-form/category3-mod2-form.component';
import { Category4Mod2PageComponent } from './pages/category4-mod2-page/category4-mod2-page.component';
import { Category4Mod2GridComponent } from './pages/category4-mod2-page/components/category4-mod2-grid/category4-mod2-grid.component';
import { Category4Mod2FormComponent } from './pages/category4-mod2-page/components/category4-mod2-form/category4-mod2-form.component';
import { Category5Mod2PageComponent } from './pages/category5-mod2-page/category5-mod2-page.component';
import { Category5Mod2GridComponent } from './pages/category5-mod2-page/components/category5-mod2-grid/category5-mod2-grid.component';
import { Category5Mod2FormComponent } from './pages/category5-mod2-page/components/category5-mod2-form/category5-mod2-form.component';
import { Category6Mod2PageComponent } from './pages/category6-mod2-page/category6-mod2-page.component';
import { Category6Mod2GridComponent } from './pages/category6-mod2-page/components/category6-mod2-grid/category6-mod2-grid.component';
import { Category6Mod2FormComponent } from './pages/category6-mod2-page/components/category6-mod2-form/category6-mod2-form.component';
import { Category7Mod2PageComponent } from './pages/category7-mod2-page/category7-mod2-page.component';
import { Category7Mod2GridComponent } from './pages/category7-mod2-page/components/category7-mod2-grid/category7-mod2-grid.component';
import { Category7Mod2FormComponent } from './pages/category7-mod2-page/components/category7-mod2-form/category7-mod2-form.component';
import { Category8Mod2PageComponent } from './pages/category8-mod2-page/category8-mod2-page.component';
import { Category8Mod2GridComponent } from './pages/category8-mod2-page/components/category8-mod2-grid/category8-mod2-grid.component';
import { Category8Mod2FormComponent } from './pages/category8-mod2-page/components/category8-mod2-form/category8-mod2-form.component';
import { Category9Mod2PageComponent } from './pages/category9-mod2-page/category9-mod2-page.component';
import { Category9Mod2GridComponent } from './pages/category9-mod2-page/components/category9-mod2-grid/category9-mod2-grid.component';
import { Category9Mod2FormComponent } from './pages/category9-mod2-page/components/category9-mod2-form/category9-mod2-form.component';
import { Issue10Mod2PageComponent } from './pages/issue10-mod2-page/issue10-mod2-page.component';
import { Issue10Mod2GridComponent } from './pages/issue10-mod2-page/components/issue10-mod2-grid/issue10-mod2-grid.component';
import { Issue10Mod2FormComponent } from './pages/issue10-mod2-page/components/issue10-mod2-form/issue10-mod2-form.component';
import { Issue1Mod2PageComponent } from './pages/issue1-mod2-page/issue1-mod2-page.component';
import { Issue1Mod2GridComponent } from './pages/issue1-mod2-page/components/issue1-mod2-grid/issue1-mod2-grid.component';
import { Issue1Mod2FormComponent } from './pages/issue1-mod2-page/components/issue1-mod2-form/issue1-mod2-form.component';
import { Issue2Mod2PageComponent } from './pages/issue2-mod2-page/issue2-mod2-page.component';
import { Issue2Mod2GridComponent } from './pages/issue2-mod2-page/components/issue2-mod2-grid/issue2-mod2-grid.component';
import { Issue2Mod2FormComponent } from './pages/issue2-mod2-page/components/issue2-mod2-form/issue2-mod2-form.component';
import { Issue3Mod2PageComponent } from './pages/issue3-mod2-page/issue3-mod2-page.component';
import { Issue3Mod2GridComponent } from './pages/issue3-mod2-page/components/issue3-mod2-grid/issue3-mod2-grid.component';
import { Issue3Mod2FormComponent } from './pages/issue3-mod2-page/components/issue3-mod2-form/issue3-mod2-form.component';
import { Issue4Mod2PageComponent } from './pages/issue4-mod2-page/issue4-mod2-page.component';
import { Issue4Mod2GridComponent } from './pages/issue4-mod2-page/components/issue4-mod2-grid/issue4-mod2-grid.component';
import { Issue4Mod2FormComponent } from './pages/issue4-mod2-page/components/issue4-mod2-form/issue4-mod2-form.component';
import { Issue5Mod2PageComponent } from './pages/issue5-mod2-page/issue5-mod2-page.component';
import { Issue5Mod2GridComponent } from './pages/issue5-mod2-page/components/issue5-mod2-grid/issue5-mod2-grid.component';
import { Issue5Mod2FormComponent } from './pages/issue5-mod2-page/components/issue5-mod2-form/issue5-mod2-form.component';
import { Issue6Mod2PageComponent } from './pages/issue6-mod2-page/issue6-mod2-page.component';
import { Issue6Mod2GridComponent } from './pages/issue6-mod2-page/components/issue6-mod2-grid/issue6-mod2-grid.component';
import { Issue6Mod2FormComponent } from './pages/issue6-mod2-page/components/issue6-mod2-form/issue6-mod2-form.component';
import { Issue7Mod2PageComponent } from './pages/issue7-mod2-page/issue7-mod2-page.component';
import { Issue7Mod2GridComponent } from './pages/issue7-mod2-page/components/issue7-mod2-grid/issue7-mod2-grid.component';
import { Issue7Mod2FormComponent } from './pages/issue7-mod2-page/components/issue7-mod2-form/issue7-mod2-form.component';
import { Issue8Mod2PageComponent } from './pages/issue8-mod2-page/issue8-mod2-page.component';
import { Issue8Mod2GridComponent } from './pages/issue8-mod2-page/components/issue8-mod2-grid/issue8-mod2-grid.component';
import { Issue8Mod2FormComponent } from './pages/issue8-mod2-page/components/issue8-mod2-form/issue8-mod2-form.component';
import { Issue9Mod2PageComponent } from './pages/issue9-mod2-page/issue9-mod2-page.component';
import { Issue9Mod2GridComponent } from './pages/issue9-mod2-page/components/issue9-mod2-grid/issue9-mod2-grid.component';
import { Issue9Mod2FormComponent } from './pages/issue9-mod2-page/components/issue9-mod2-form/issue9-mod2-form.component';
import { Project10Mod2PageComponent } from './pages/project10-mod2-page/project10-mod2-page.component';
import { Project10Mod2GridComponent } from './pages/project10-mod2-page/components/project10-mod2-grid/project10-mod2-grid.component';
import { Project10Mod2FormComponent } from './pages/project10-mod2-page/components/project10-mod2-form/project10-mod2-form.component';
import { Project1Mod2PageComponent } from './pages/project1-mod2-page/project1-mod2-page.component';
import { Project1Mod2GridComponent } from './pages/project1-mod2-page/components/project1-mod2-grid/project1-mod2-grid.component';
import { Project1Mod2FormComponent } from './pages/project1-mod2-page/components/project1-mod2-form/project1-mod2-form.component';
import { Project2Mod2PageComponent } from './pages/project2-mod2-page/project2-mod2-page.component';
import { Project2Mod2GridComponent } from './pages/project2-mod2-page/components/project2-mod2-grid/project2-mod2-grid.component';
import { Project2Mod2FormComponent } from './pages/project2-mod2-page/components/project2-mod2-form/project2-mod2-form.component';
import { Project3Mod2PageComponent } from './pages/project3-mod2-page/project3-mod2-page.component';
import { Project3Mod2GridComponent } from './pages/project3-mod2-page/components/project3-mod2-grid/project3-mod2-grid.component';
import { Project3Mod2FormComponent } from './pages/project3-mod2-page/components/project3-mod2-form/project3-mod2-form.component';
import { Project4Mod2PageComponent } from './pages/project4-mod2-page/project4-mod2-page.component';
import { Project4Mod2GridComponent } from './pages/project4-mod2-page/components/project4-mod2-grid/project4-mod2-grid.component';
import { Project4Mod2FormComponent } from './pages/project4-mod2-page/components/project4-mod2-form/project4-mod2-form.component';
import { Project5Mod2PageComponent } from './pages/project5-mod2-page/project5-mod2-page.component';
import { Project5Mod2GridComponent } from './pages/project5-mod2-page/components/project5-mod2-grid/project5-mod2-grid.component';
import { Project5Mod2FormComponent } from './pages/project5-mod2-page/components/project5-mod2-form/project5-mod2-form.component';
import { Project6Mod2PageComponent } from './pages/project6-mod2-page/project6-mod2-page.component';
import { Project6Mod2GridComponent } from './pages/project6-mod2-page/components/project6-mod2-grid/project6-mod2-grid.component';
import { Project6Mod2FormComponent } from './pages/project6-mod2-page/components/project6-mod2-form/project6-mod2-form.component';
import { Project7Mod2PageComponent } from './pages/project7-mod2-page/project7-mod2-page.component';
import { Project7Mod2GridComponent } from './pages/project7-mod2-page/components/project7-mod2-grid/project7-mod2-grid.component';
import { Project7Mod2FormComponent } from './pages/project7-mod2-page/components/project7-mod2-form/project7-mod2-form.component';
import { Project8Mod2PageComponent } from './pages/project8-mod2-page/project8-mod2-page.component';
import { Project8Mod2GridComponent } from './pages/project8-mod2-page/components/project8-mod2-grid/project8-mod2-grid.component';
import { Project8Mod2FormComponent } from './pages/project8-mod2-page/components/project8-mod2-form/project8-mod2-form.component';
import { Project9Mod2PageComponent } from './pages/project9-mod2-page/project9-mod2-page.component';
import { Project9Mod2GridComponent } from './pages/project9-mod2-page/components/project9-mod2-grid/project9-mod2-grid.component';
import { Project9Mod2FormComponent } from './pages/project9-mod2-page/components/project9-mod2-form/project9-mod2-form.component';
import { Severity10Mod2PageComponent } from './pages/severity10-mod2-page/severity10-mod2-page.component';
import { Severity10Mod2GridComponent } from './pages/severity10-mod2-page/components/severity10-mod2-grid/severity10-mod2-grid.component';
import { Severity10Mod2FormComponent } from './pages/severity10-mod2-page/components/severity10-mod2-form/severity10-mod2-form.component';
import { Severity1Mod2PageComponent } from './pages/severity1-mod2-page/severity1-mod2-page.component';
import { Severity1Mod2GridComponent } from './pages/severity1-mod2-page/components/severity1-mod2-grid/severity1-mod2-grid.component';
import { Severity1Mod2FormComponent } from './pages/severity1-mod2-page/components/severity1-mod2-form/severity1-mod2-form.component';
import { Severity2Mod2PageComponent } from './pages/severity2-mod2-page/severity2-mod2-page.component';
import { Severity2Mod2GridComponent } from './pages/severity2-mod2-page/components/severity2-mod2-grid/severity2-mod2-grid.component';
import { Severity2Mod2FormComponent } from './pages/severity2-mod2-page/components/severity2-mod2-form/severity2-mod2-form.component';
import { Severity3Mod2PageComponent } from './pages/severity3-mod2-page/severity3-mod2-page.component';
import { Severity3Mod2GridComponent } from './pages/severity3-mod2-page/components/severity3-mod2-grid/severity3-mod2-grid.component';
import { Severity3Mod2FormComponent } from './pages/severity3-mod2-page/components/severity3-mod2-form/severity3-mod2-form.component';
import { Severity4Mod2PageComponent } from './pages/severity4-mod2-page/severity4-mod2-page.component';
import { Severity4Mod2GridComponent } from './pages/severity4-mod2-page/components/severity4-mod2-grid/severity4-mod2-grid.component';
import { Severity4Mod2FormComponent } from './pages/severity4-mod2-page/components/severity4-mod2-form/severity4-mod2-form.component';
import { Severity5Mod2PageComponent } from './pages/severity5-mod2-page/severity5-mod2-page.component';
import { Severity5Mod2GridComponent } from './pages/severity5-mod2-page/components/severity5-mod2-grid/severity5-mod2-grid.component';
import { Severity5Mod2FormComponent } from './pages/severity5-mod2-page/components/severity5-mod2-form/severity5-mod2-form.component';
import { Severity6Mod2PageComponent } from './pages/severity6-mod2-page/severity6-mod2-page.component';
import { Severity6Mod2GridComponent } from './pages/severity6-mod2-page/components/severity6-mod2-grid/severity6-mod2-grid.component';
import { Severity6Mod2FormComponent } from './pages/severity6-mod2-page/components/severity6-mod2-form/severity6-mod2-form.component';
import { Severity7Mod2PageComponent } from './pages/severity7-mod2-page/severity7-mod2-page.component';
import { Severity7Mod2GridComponent } from './pages/severity7-mod2-page/components/severity7-mod2-grid/severity7-mod2-grid.component';
import { Severity7Mod2FormComponent } from './pages/severity7-mod2-page/components/severity7-mod2-form/severity7-mod2-form.component';
import { Severity8Mod2PageComponent } from './pages/severity8-mod2-page/severity8-mod2-page.component';
import { Severity8Mod2GridComponent } from './pages/severity8-mod2-page/components/severity8-mod2-grid/severity8-mod2-grid.component';
import { Severity8Mod2FormComponent } from './pages/severity8-mod2-page/components/severity8-mod2-form/severity8-mod2-form.component';
import { Severity9Mod2PageComponent } from './pages/severity9-mod2-page/severity9-mod2-page.component';
import { Severity9Mod2GridComponent } from './pages/severity9-mod2-page/components/severity9-mod2-grid/severity9-mod2-grid.component';
import { Severity9Mod2FormComponent } from './pages/severity9-mod2-page/components/severity9-mod2-form/severity9-mod2-form.component';
import { Status10Mod2PageComponent } from './pages/status10-mod2-page/status10-mod2-page.component';
import { Status10Mod2GridComponent } from './pages/status10-mod2-page/components/status10-mod2-grid/status10-mod2-grid.component';
import { Status10Mod2FormComponent } from './pages/status10-mod2-page/components/status10-mod2-form/status10-mod2-form.component';
import { Status1Mod2PageComponent } from './pages/status1-mod2-page/status1-mod2-page.component';
import { Status1Mod2GridComponent } from './pages/status1-mod2-page/components/status1-mod2-grid/status1-mod2-grid.component';
import { Status1Mod2FormComponent } from './pages/status1-mod2-page/components/status1-mod2-form/status1-mod2-form.component';
import { Status2Mod2PageComponent } from './pages/status2-mod2-page/status2-mod2-page.component';
import { Status2Mod2GridComponent } from './pages/status2-mod2-page/components/status2-mod2-grid/status2-mod2-grid.component';
import { Status2Mod2FormComponent } from './pages/status2-mod2-page/components/status2-mod2-form/status2-mod2-form.component';
import { Status3Mod2PageComponent } from './pages/status3-mod2-page/status3-mod2-page.component';
import { Status3Mod2GridComponent } from './pages/status3-mod2-page/components/status3-mod2-grid/status3-mod2-grid.component';
import { Status3Mod2FormComponent } from './pages/status3-mod2-page/components/status3-mod2-form/status3-mod2-form.component';
import { Status4Mod2PageComponent } from './pages/status4-mod2-page/status4-mod2-page.component';
import { Status4Mod2GridComponent } from './pages/status4-mod2-page/components/status4-mod2-grid/status4-mod2-grid.component';
import { Status4Mod2FormComponent } from './pages/status4-mod2-page/components/status4-mod2-form/status4-mod2-form.component';
import { Status5Mod2PageComponent } from './pages/status5-mod2-page/status5-mod2-page.component';
import { Status5Mod2GridComponent } from './pages/status5-mod2-page/components/status5-mod2-grid/status5-mod2-grid.component';
import { Status5Mod2FormComponent } from './pages/status5-mod2-page/components/status5-mod2-form/status5-mod2-form.component';
import { Status6Mod2PageComponent } from './pages/status6-mod2-page/status6-mod2-page.component';
import { Status6Mod2GridComponent } from './pages/status6-mod2-page/components/status6-mod2-grid/status6-mod2-grid.component';
import { Status6Mod2FormComponent } from './pages/status6-mod2-page/components/status6-mod2-form/status6-mod2-form.component';
import { Status7Mod2PageComponent } from './pages/status7-mod2-page/status7-mod2-page.component';
import { Status7Mod2GridComponent } from './pages/status7-mod2-page/components/status7-mod2-grid/status7-mod2-grid.component';
import { Status7Mod2FormComponent } from './pages/status7-mod2-page/components/status7-mod2-form/status7-mod2-form.component';
import { Status8Mod2PageComponent } from './pages/status8-mod2-page/status8-mod2-page.component';
import { Status8Mod2GridComponent } from './pages/status8-mod2-page/components/status8-mod2-grid/status8-mod2-grid.component';
import { Status8Mod2FormComponent } from './pages/status8-mod2-page/components/status8-mod2-form/status8-mod2-form.component';
import { Status9Mod2PageComponent } from './pages/status9-mod2-page/status9-mod2-page.component';
import { Status9Mod2GridComponent } from './pages/status9-mod2-page/components/status9-mod2-grid/status9-mod2-grid.component';
import { Status9Mod2FormComponent } from './pages/status9-mod2-page/components/status9-mod2-form/status9-mod2-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod2RoutingModule,
  ],
  declarations: [
    Category10Mod2PageComponent,
    Category10Mod2GridComponent,
    Category10Mod2FormComponent,
    Category1Mod2PageComponent,
    Category1Mod2GridComponent,
    Category1Mod2FormComponent,
    Category2Mod2PageComponent,
    Category2Mod2GridComponent,
    Category2Mod2FormComponent,
    Category3Mod2PageComponent,
    Category3Mod2GridComponent,
    Category3Mod2FormComponent,
    Category4Mod2PageComponent,
    Category4Mod2GridComponent,
    Category4Mod2FormComponent,
    Category5Mod2PageComponent,
    Category5Mod2GridComponent,
    Category5Mod2FormComponent,
    Category6Mod2PageComponent,
    Category6Mod2GridComponent,
    Category6Mod2FormComponent,
    Category7Mod2PageComponent,
    Category7Mod2GridComponent,
    Category7Mod2FormComponent,
    Category8Mod2PageComponent,
    Category8Mod2GridComponent,
    Category8Mod2FormComponent,
    Category9Mod2PageComponent,
    Category9Mod2GridComponent,
    Category9Mod2FormComponent,
    Issue10Mod2PageComponent,
    Issue10Mod2GridComponent,
    Issue10Mod2FormComponent,
    Issue1Mod2PageComponent,
    Issue1Mod2GridComponent,
    Issue1Mod2FormComponent,
    Issue2Mod2PageComponent,
    Issue2Mod2GridComponent,
    Issue2Mod2FormComponent,
    Issue3Mod2PageComponent,
    Issue3Mod2GridComponent,
    Issue3Mod2FormComponent,
    Issue4Mod2PageComponent,
    Issue4Mod2GridComponent,
    Issue4Mod2FormComponent,
    Issue5Mod2PageComponent,
    Issue5Mod2GridComponent,
    Issue5Mod2FormComponent,
    Issue6Mod2PageComponent,
    Issue6Mod2GridComponent,
    Issue6Mod2FormComponent,
    Issue7Mod2PageComponent,
    Issue7Mod2GridComponent,
    Issue7Mod2FormComponent,
    Issue8Mod2PageComponent,
    Issue8Mod2GridComponent,
    Issue8Mod2FormComponent,
    Issue9Mod2PageComponent,
    Issue9Mod2GridComponent,
    Issue9Mod2FormComponent,
    Project10Mod2PageComponent,
    Project10Mod2GridComponent,
    Project10Mod2FormComponent,
    Project1Mod2PageComponent,
    Project1Mod2GridComponent,
    Project1Mod2FormComponent,
    Project2Mod2PageComponent,
    Project2Mod2GridComponent,
    Project2Mod2FormComponent,
    Project3Mod2PageComponent,
    Project3Mod2GridComponent,
    Project3Mod2FormComponent,
    Project4Mod2PageComponent,
    Project4Mod2GridComponent,
    Project4Mod2FormComponent,
    Project5Mod2PageComponent,
    Project5Mod2GridComponent,
    Project5Mod2FormComponent,
    Project6Mod2PageComponent,
    Project6Mod2GridComponent,
    Project6Mod2FormComponent,
    Project7Mod2PageComponent,
    Project7Mod2GridComponent,
    Project7Mod2FormComponent,
    Project8Mod2PageComponent,
    Project8Mod2GridComponent,
    Project8Mod2FormComponent,
    Project9Mod2PageComponent,
    Project9Mod2GridComponent,
    Project9Mod2FormComponent,
    Severity10Mod2PageComponent,
    Severity10Mod2GridComponent,
    Severity10Mod2FormComponent,
    Severity1Mod2PageComponent,
    Severity1Mod2GridComponent,
    Severity1Mod2FormComponent,
    Severity2Mod2PageComponent,
    Severity2Mod2GridComponent,
    Severity2Mod2FormComponent,
    Severity3Mod2PageComponent,
    Severity3Mod2GridComponent,
    Severity3Mod2FormComponent,
    Severity4Mod2PageComponent,
    Severity4Mod2GridComponent,
    Severity4Mod2FormComponent,
    Severity5Mod2PageComponent,
    Severity5Mod2GridComponent,
    Severity5Mod2FormComponent,
    Severity6Mod2PageComponent,
    Severity6Mod2GridComponent,
    Severity6Mod2FormComponent,
    Severity7Mod2PageComponent,
    Severity7Mod2GridComponent,
    Severity7Mod2FormComponent,
    Severity8Mod2PageComponent,
    Severity8Mod2GridComponent,
    Severity8Mod2FormComponent,
    Severity9Mod2PageComponent,
    Severity9Mod2GridComponent,
    Severity9Mod2FormComponent,
    Status10Mod2PageComponent,
    Status10Mod2GridComponent,
    Status10Mod2FormComponent,
    Status1Mod2PageComponent,
    Status1Mod2GridComponent,
    Status1Mod2FormComponent,
    Status2Mod2PageComponent,
    Status2Mod2GridComponent,
    Status2Mod2FormComponent,
    Status3Mod2PageComponent,
    Status3Mod2GridComponent,
    Status3Mod2FormComponent,
    Status4Mod2PageComponent,
    Status4Mod2GridComponent,
    Status4Mod2FormComponent,
    Status5Mod2PageComponent,
    Status5Mod2GridComponent,
    Status5Mod2FormComponent,
    Status6Mod2PageComponent,
    Status6Mod2GridComponent,
    Status6Mod2FormComponent,
    Status7Mod2PageComponent,
    Status7Mod2GridComponent,
    Status7Mod2FormComponent,
    Status8Mod2PageComponent,
    Status8Mod2GridComponent,
    Status8Mod2FormComponent,
    Status9Mod2PageComponent,
    Status9Mod2GridComponent,
    Status9Mod2FormComponent,
  ],
  exports: [
  ]
})
export class Mod2Module { }
