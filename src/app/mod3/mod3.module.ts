import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod3RoutingModule } from './mod3-routing.module';

// Components
import { Category10Mod3PageComponent } from './pages/category10-mod3-page/category10-mod3-page.component';
import { Category10Mod3GridComponent } from './pages/category10-mod3-page/components/category10-mod3-grid/category10-mod3-grid.component';
import { Category10Mod3FormComponent } from './pages/category10-mod3-page/components/category10-mod3-form/category10-mod3-form.component';
import { Category1Mod3PageComponent } from './pages/category1-mod3-page/category1-mod3-page.component';
import { Category1Mod3GridComponent } from './pages/category1-mod3-page/components/category1-mod3-grid/category1-mod3-grid.component';
import { Category1Mod3FormComponent } from './pages/category1-mod3-page/components/category1-mod3-form/category1-mod3-form.component';
import { Category2Mod3PageComponent } from './pages/category2-mod3-page/category2-mod3-page.component';
import { Category2Mod3GridComponent } from './pages/category2-mod3-page/components/category2-mod3-grid/category2-mod3-grid.component';
import { Category2Mod3FormComponent } from './pages/category2-mod3-page/components/category2-mod3-form/category2-mod3-form.component';
import { Category3Mod3PageComponent } from './pages/category3-mod3-page/category3-mod3-page.component';
import { Category3Mod3GridComponent } from './pages/category3-mod3-page/components/category3-mod3-grid/category3-mod3-grid.component';
import { Category3Mod3FormComponent } from './pages/category3-mod3-page/components/category3-mod3-form/category3-mod3-form.component';
import { Category4Mod3PageComponent } from './pages/category4-mod3-page/category4-mod3-page.component';
import { Category4Mod3GridComponent } from './pages/category4-mod3-page/components/category4-mod3-grid/category4-mod3-grid.component';
import { Category4Mod3FormComponent } from './pages/category4-mod3-page/components/category4-mod3-form/category4-mod3-form.component';
import { Category5Mod3PageComponent } from './pages/category5-mod3-page/category5-mod3-page.component';
import { Category5Mod3GridComponent } from './pages/category5-mod3-page/components/category5-mod3-grid/category5-mod3-grid.component';
import { Category5Mod3FormComponent } from './pages/category5-mod3-page/components/category5-mod3-form/category5-mod3-form.component';
import { Category6Mod3PageComponent } from './pages/category6-mod3-page/category6-mod3-page.component';
import { Category6Mod3GridComponent } from './pages/category6-mod3-page/components/category6-mod3-grid/category6-mod3-grid.component';
import { Category6Mod3FormComponent } from './pages/category6-mod3-page/components/category6-mod3-form/category6-mod3-form.component';
import { Category7Mod3PageComponent } from './pages/category7-mod3-page/category7-mod3-page.component';
import { Category7Mod3GridComponent } from './pages/category7-mod3-page/components/category7-mod3-grid/category7-mod3-grid.component';
import { Category7Mod3FormComponent } from './pages/category7-mod3-page/components/category7-mod3-form/category7-mod3-form.component';
import { Category8Mod3PageComponent } from './pages/category8-mod3-page/category8-mod3-page.component';
import { Category8Mod3GridComponent } from './pages/category8-mod3-page/components/category8-mod3-grid/category8-mod3-grid.component';
import { Category8Mod3FormComponent } from './pages/category8-mod3-page/components/category8-mod3-form/category8-mod3-form.component';
import { Category9Mod3PageComponent } from './pages/category9-mod3-page/category9-mod3-page.component';
import { Category9Mod3GridComponent } from './pages/category9-mod3-page/components/category9-mod3-grid/category9-mod3-grid.component';
import { Category9Mod3FormComponent } from './pages/category9-mod3-page/components/category9-mod3-form/category9-mod3-form.component';
import { Issue10Mod3PageComponent } from './pages/issue10-mod3-page/issue10-mod3-page.component';
import { Issue10Mod3GridComponent } from './pages/issue10-mod3-page/components/issue10-mod3-grid/issue10-mod3-grid.component';
import { Issue10Mod3FormComponent } from './pages/issue10-mod3-page/components/issue10-mod3-form/issue10-mod3-form.component';
import { Issue1Mod3PageComponent } from './pages/issue1-mod3-page/issue1-mod3-page.component';
import { Issue1Mod3GridComponent } from './pages/issue1-mod3-page/components/issue1-mod3-grid/issue1-mod3-grid.component';
import { Issue1Mod3FormComponent } from './pages/issue1-mod3-page/components/issue1-mod3-form/issue1-mod3-form.component';
import { Issue2Mod3PageComponent } from './pages/issue2-mod3-page/issue2-mod3-page.component';
import { Issue2Mod3GridComponent } from './pages/issue2-mod3-page/components/issue2-mod3-grid/issue2-mod3-grid.component';
import { Issue2Mod3FormComponent } from './pages/issue2-mod3-page/components/issue2-mod3-form/issue2-mod3-form.component';
import { Issue3Mod3PageComponent } from './pages/issue3-mod3-page/issue3-mod3-page.component';
import { Issue3Mod3GridComponent } from './pages/issue3-mod3-page/components/issue3-mod3-grid/issue3-mod3-grid.component';
import { Issue3Mod3FormComponent } from './pages/issue3-mod3-page/components/issue3-mod3-form/issue3-mod3-form.component';
import { Issue4Mod3PageComponent } from './pages/issue4-mod3-page/issue4-mod3-page.component';
import { Issue4Mod3GridComponent } from './pages/issue4-mod3-page/components/issue4-mod3-grid/issue4-mod3-grid.component';
import { Issue4Mod3FormComponent } from './pages/issue4-mod3-page/components/issue4-mod3-form/issue4-mod3-form.component';
import { Issue5Mod3PageComponent } from './pages/issue5-mod3-page/issue5-mod3-page.component';
import { Issue5Mod3GridComponent } from './pages/issue5-mod3-page/components/issue5-mod3-grid/issue5-mod3-grid.component';
import { Issue5Mod3FormComponent } from './pages/issue5-mod3-page/components/issue5-mod3-form/issue5-mod3-form.component';
import { Issue6Mod3PageComponent } from './pages/issue6-mod3-page/issue6-mod3-page.component';
import { Issue6Mod3GridComponent } from './pages/issue6-mod3-page/components/issue6-mod3-grid/issue6-mod3-grid.component';
import { Issue6Mod3FormComponent } from './pages/issue6-mod3-page/components/issue6-mod3-form/issue6-mod3-form.component';
import { Issue7Mod3PageComponent } from './pages/issue7-mod3-page/issue7-mod3-page.component';
import { Issue7Mod3GridComponent } from './pages/issue7-mod3-page/components/issue7-mod3-grid/issue7-mod3-grid.component';
import { Issue7Mod3FormComponent } from './pages/issue7-mod3-page/components/issue7-mod3-form/issue7-mod3-form.component';
import { Issue8Mod3PageComponent } from './pages/issue8-mod3-page/issue8-mod3-page.component';
import { Issue8Mod3GridComponent } from './pages/issue8-mod3-page/components/issue8-mod3-grid/issue8-mod3-grid.component';
import { Issue8Mod3FormComponent } from './pages/issue8-mod3-page/components/issue8-mod3-form/issue8-mod3-form.component';
import { Issue9Mod3PageComponent } from './pages/issue9-mod3-page/issue9-mod3-page.component';
import { Issue9Mod3GridComponent } from './pages/issue9-mod3-page/components/issue9-mod3-grid/issue9-mod3-grid.component';
import { Issue9Mod3FormComponent } from './pages/issue9-mod3-page/components/issue9-mod3-form/issue9-mod3-form.component';
import { Project10Mod3PageComponent } from './pages/project10-mod3-page/project10-mod3-page.component';
import { Project10Mod3GridComponent } from './pages/project10-mod3-page/components/project10-mod3-grid/project10-mod3-grid.component';
import { Project10Mod3FormComponent } from './pages/project10-mod3-page/components/project10-mod3-form/project10-mod3-form.component';
import { Project1Mod3PageComponent } from './pages/project1-mod3-page/project1-mod3-page.component';
import { Project1Mod3GridComponent } from './pages/project1-mod3-page/components/project1-mod3-grid/project1-mod3-grid.component';
import { Project1Mod3FormComponent } from './pages/project1-mod3-page/components/project1-mod3-form/project1-mod3-form.component';
import { Project2Mod3PageComponent } from './pages/project2-mod3-page/project2-mod3-page.component';
import { Project2Mod3GridComponent } from './pages/project2-mod3-page/components/project2-mod3-grid/project2-mod3-grid.component';
import { Project2Mod3FormComponent } from './pages/project2-mod3-page/components/project2-mod3-form/project2-mod3-form.component';
import { Project3Mod3PageComponent } from './pages/project3-mod3-page/project3-mod3-page.component';
import { Project3Mod3GridComponent } from './pages/project3-mod3-page/components/project3-mod3-grid/project3-mod3-grid.component';
import { Project3Mod3FormComponent } from './pages/project3-mod3-page/components/project3-mod3-form/project3-mod3-form.component';
import { Project4Mod3PageComponent } from './pages/project4-mod3-page/project4-mod3-page.component';
import { Project4Mod3GridComponent } from './pages/project4-mod3-page/components/project4-mod3-grid/project4-mod3-grid.component';
import { Project4Mod3FormComponent } from './pages/project4-mod3-page/components/project4-mod3-form/project4-mod3-form.component';
import { Project5Mod3PageComponent } from './pages/project5-mod3-page/project5-mod3-page.component';
import { Project5Mod3GridComponent } from './pages/project5-mod3-page/components/project5-mod3-grid/project5-mod3-grid.component';
import { Project5Mod3FormComponent } from './pages/project5-mod3-page/components/project5-mod3-form/project5-mod3-form.component';
import { Project6Mod3PageComponent } from './pages/project6-mod3-page/project6-mod3-page.component';
import { Project6Mod3GridComponent } from './pages/project6-mod3-page/components/project6-mod3-grid/project6-mod3-grid.component';
import { Project6Mod3FormComponent } from './pages/project6-mod3-page/components/project6-mod3-form/project6-mod3-form.component';
import { Project7Mod3PageComponent } from './pages/project7-mod3-page/project7-mod3-page.component';
import { Project7Mod3GridComponent } from './pages/project7-mod3-page/components/project7-mod3-grid/project7-mod3-grid.component';
import { Project7Mod3FormComponent } from './pages/project7-mod3-page/components/project7-mod3-form/project7-mod3-form.component';
import { Project8Mod3PageComponent } from './pages/project8-mod3-page/project8-mod3-page.component';
import { Project8Mod3GridComponent } from './pages/project8-mod3-page/components/project8-mod3-grid/project8-mod3-grid.component';
import { Project8Mod3FormComponent } from './pages/project8-mod3-page/components/project8-mod3-form/project8-mod3-form.component';
import { Project9Mod3PageComponent } from './pages/project9-mod3-page/project9-mod3-page.component';
import { Project9Mod3GridComponent } from './pages/project9-mod3-page/components/project9-mod3-grid/project9-mod3-grid.component';
import { Project9Mod3FormComponent } from './pages/project9-mod3-page/components/project9-mod3-form/project9-mod3-form.component';
import { Severity10Mod3PageComponent } from './pages/severity10-mod3-page/severity10-mod3-page.component';
import { Severity10Mod3GridComponent } from './pages/severity10-mod3-page/components/severity10-mod3-grid/severity10-mod3-grid.component';
import { Severity10Mod3FormComponent } from './pages/severity10-mod3-page/components/severity10-mod3-form/severity10-mod3-form.component';
import { Severity1Mod3PageComponent } from './pages/severity1-mod3-page/severity1-mod3-page.component';
import { Severity1Mod3GridComponent } from './pages/severity1-mod3-page/components/severity1-mod3-grid/severity1-mod3-grid.component';
import { Severity1Mod3FormComponent } from './pages/severity1-mod3-page/components/severity1-mod3-form/severity1-mod3-form.component';
import { Severity2Mod3PageComponent } from './pages/severity2-mod3-page/severity2-mod3-page.component';
import { Severity2Mod3GridComponent } from './pages/severity2-mod3-page/components/severity2-mod3-grid/severity2-mod3-grid.component';
import { Severity2Mod3FormComponent } from './pages/severity2-mod3-page/components/severity2-mod3-form/severity2-mod3-form.component';
import { Severity3Mod3PageComponent } from './pages/severity3-mod3-page/severity3-mod3-page.component';
import { Severity3Mod3GridComponent } from './pages/severity3-mod3-page/components/severity3-mod3-grid/severity3-mod3-grid.component';
import { Severity3Mod3FormComponent } from './pages/severity3-mod3-page/components/severity3-mod3-form/severity3-mod3-form.component';
import { Severity4Mod3PageComponent } from './pages/severity4-mod3-page/severity4-mod3-page.component';
import { Severity4Mod3GridComponent } from './pages/severity4-mod3-page/components/severity4-mod3-grid/severity4-mod3-grid.component';
import { Severity4Mod3FormComponent } from './pages/severity4-mod3-page/components/severity4-mod3-form/severity4-mod3-form.component';
import { Severity5Mod3PageComponent } from './pages/severity5-mod3-page/severity5-mod3-page.component';
import { Severity5Mod3GridComponent } from './pages/severity5-mod3-page/components/severity5-mod3-grid/severity5-mod3-grid.component';
import { Severity5Mod3FormComponent } from './pages/severity5-mod3-page/components/severity5-mod3-form/severity5-mod3-form.component';
import { Severity6Mod3PageComponent } from './pages/severity6-mod3-page/severity6-mod3-page.component';
import { Severity6Mod3GridComponent } from './pages/severity6-mod3-page/components/severity6-mod3-grid/severity6-mod3-grid.component';
import { Severity6Mod3FormComponent } from './pages/severity6-mod3-page/components/severity6-mod3-form/severity6-mod3-form.component';
import { Severity7Mod3PageComponent } from './pages/severity7-mod3-page/severity7-mod3-page.component';
import { Severity7Mod3GridComponent } from './pages/severity7-mod3-page/components/severity7-mod3-grid/severity7-mod3-grid.component';
import { Severity7Mod3FormComponent } from './pages/severity7-mod3-page/components/severity7-mod3-form/severity7-mod3-form.component';
import { Severity8Mod3PageComponent } from './pages/severity8-mod3-page/severity8-mod3-page.component';
import { Severity8Mod3GridComponent } from './pages/severity8-mod3-page/components/severity8-mod3-grid/severity8-mod3-grid.component';
import { Severity8Mod3FormComponent } from './pages/severity8-mod3-page/components/severity8-mod3-form/severity8-mod3-form.component';
import { Severity9Mod3PageComponent } from './pages/severity9-mod3-page/severity9-mod3-page.component';
import { Severity9Mod3GridComponent } from './pages/severity9-mod3-page/components/severity9-mod3-grid/severity9-mod3-grid.component';
import { Severity9Mod3FormComponent } from './pages/severity9-mod3-page/components/severity9-mod3-form/severity9-mod3-form.component';
import { Status10Mod3PageComponent } from './pages/status10-mod3-page/status10-mod3-page.component';
import { Status10Mod3GridComponent } from './pages/status10-mod3-page/components/status10-mod3-grid/status10-mod3-grid.component';
import { Status10Mod3FormComponent } from './pages/status10-mod3-page/components/status10-mod3-form/status10-mod3-form.component';
import { Status1Mod3PageComponent } from './pages/status1-mod3-page/status1-mod3-page.component';
import { Status1Mod3GridComponent } from './pages/status1-mod3-page/components/status1-mod3-grid/status1-mod3-grid.component';
import { Status1Mod3FormComponent } from './pages/status1-mod3-page/components/status1-mod3-form/status1-mod3-form.component';
import { Status2Mod3PageComponent } from './pages/status2-mod3-page/status2-mod3-page.component';
import { Status2Mod3GridComponent } from './pages/status2-mod3-page/components/status2-mod3-grid/status2-mod3-grid.component';
import { Status2Mod3FormComponent } from './pages/status2-mod3-page/components/status2-mod3-form/status2-mod3-form.component';
import { Status3Mod3PageComponent } from './pages/status3-mod3-page/status3-mod3-page.component';
import { Status3Mod3GridComponent } from './pages/status3-mod3-page/components/status3-mod3-grid/status3-mod3-grid.component';
import { Status3Mod3FormComponent } from './pages/status3-mod3-page/components/status3-mod3-form/status3-mod3-form.component';
import { Status4Mod3PageComponent } from './pages/status4-mod3-page/status4-mod3-page.component';
import { Status4Mod3GridComponent } from './pages/status4-mod3-page/components/status4-mod3-grid/status4-mod3-grid.component';
import { Status4Mod3FormComponent } from './pages/status4-mod3-page/components/status4-mod3-form/status4-mod3-form.component';
import { Status5Mod3PageComponent } from './pages/status5-mod3-page/status5-mod3-page.component';
import { Status5Mod3GridComponent } from './pages/status5-mod3-page/components/status5-mod3-grid/status5-mod3-grid.component';
import { Status5Mod3FormComponent } from './pages/status5-mod3-page/components/status5-mod3-form/status5-mod3-form.component';
import { Status6Mod3PageComponent } from './pages/status6-mod3-page/status6-mod3-page.component';
import { Status6Mod3GridComponent } from './pages/status6-mod3-page/components/status6-mod3-grid/status6-mod3-grid.component';
import { Status6Mod3FormComponent } from './pages/status6-mod3-page/components/status6-mod3-form/status6-mod3-form.component';
import { Status7Mod3PageComponent } from './pages/status7-mod3-page/status7-mod3-page.component';
import { Status7Mod3GridComponent } from './pages/status7-mod3-page/components/status7-mod3-grid/status7-mod3-grid.component';
import { Status7Mod3FormComponent } from './pages/status7-mod3-page/components/status7-mod3-form/status7-mod3-form.component';
import { Status8Mod3PageComponent } from './pages/status8-mod3-page/status8-mod3-page.component';
import { Status8Mod3GridComponent } from './pages/status8-mod3-page/components/status8-mod3-grid/status8-mod3-grid.component';
import { Status8Mod3FormComponent } from './pages/status8-mod3-page/components/status8-mod3-form/status8-mod3-form.component';
import { Status9Mod3PageComponent } from './pages/status9-mod3-page/status9-mod3-page.component';
import { Status9Mod3GridComponent } from './pages/status9-mod3-page/components/status9-mod3-grid/status9-mod3-grid.component';
import { Status9Mod3FormComponent } from './pages/status9-mod3-page/components/status9-mod3-form/status9-mod3-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod3RoutingModule,
  ],
  declarations: [
    Category10Mod3PageComponent,
    Category10Mod3GridComponent,
    Category10Mod3FormComponent,
    Category1Mod3PageComponent,
    Category1Mod3GridComponent,
    Category1Mod3FormComponent,
    Category2Mod3PageComponent,
    Category2Mod3GridComponent,
    Category2Mod3FormComponent,
    Category3Mod3PageComponent,
    Category3Mod3GridComponent,
    Category3Mod3FormComponent,
    Category4Mod3PageComponent,
    Category4Mod3GridComponent,
    Category4Mod3FormComponent,
    Category5Mod3PageComponent,
    Category5Mod3GridComponent,
    Category5Mod3FormComponent,
    Category6Mod3PageComponent,
    Category6Mod3GridComponent,
    Category6Mod3FormComponent,
    Category7Mod3PageComponent,
    Category7Mod3GridComponent,
    Category7Mod3FormComponent,
    Category8Mod3PageComponent,
    Category8Mod3GridComponent,
    Category8Mod3FormComponent,
    Category9Mod3PageComponent,
    Category9Mod3GridComponent,
    Category9Mod3FormComponent,
    Issue10Mod3PageComponent,
    Issue10Mod3GridComponent,
    Issue10Mod3FormComponent,
    Issue1Mod3PageComponent,
    Issue1Mod3GridComponent,
    Issue1Mod3FormComponent,
    Issue2Mod3PageComponent,
    Issue2Mod3GridComponent,
    Issue2Mod3FormComponent,
    Issue3Mod3PageComponent,
    Issue3Mod3GridComponent,
    Issue3Mod3FormComponent,
    Issue4Mod3PageComponent,
    Issue4Mod3GridComponent,
    Issue4Mod3FormComponent,
    Issue5Mod3PageComponent,
    Issue5Mod3GridComponent,
    Issue5Mod3FormComponent,
    Issue6Mod3PageComponent,
    Issue6Mod3GridComponent,
    Issue6Mod3FormComponent,
    Issue7Mod3PageComponent,
    Issue7Mod3GridComponent,
    Issue7Mod3FormComponent,
    Issue8Mod3PageComponent,
    Issue8Mod3GridComponent,
    Issue8Mod3FormComponent,
    Issue9Mod3PageComponent,
    Issue9Mod3GridComponent,
    Issue9Mod3FormComponent,
    Project10Mod3PageComponent,
    Project10Mod3GridComponent,
    Project10Mod3FormComponent,
    Project1Mod3PageComponent,
    Project1Mod3GridComponent,
    Project1Mod3FormComponent,
    Project2Mod3PageComponent,
    Project2Mod3GridComponent,
    Project2Mod3FormComponent,
    Project3Mod3PageComponent,
    Project3Mod3GridComponent,
    Project3Mod3FormComponent,
    Project4Mod3PageComponent,
    Project4Mod3GridComponent,
    Project4Mod3FormComponent,
    Project5Mod3PageComponent,
    Project5Mod3GridComponent,
    Project5Mod3FormComponent,
    Project6Mod3PageComponent,
    Project6Mod3GridComponent,
    Project6Mod3FormComponent,
    Project7Mod3PageComponent,
    Project7Mod3GridComponent,
    Project7Mod3FormComponent,
    Project8Mod3PageComponent,
    Project8Mod3GridComponent,
    Project8Mod3FormComponent,
    Project9Mod3PageComponent,
    Project9Mod3GridComponent,
    Project9Mod3FormComponent,
    Severity10Mod3PageComponent,
    Severity10Mod3GridComponent,
    Severity10Mod3FormComponent,
    Severity1Mod3PageComponent,
    Severity1Mod3GridComponent,
    Severity1Mod3FormComponent,
    Severity2Mod3PageComponent,
    Severity2Mod3GridComponent,
    Severity2Mod3FormComponent,
    Severity3Mod3PageComponent,
    Severity3Mod3GridComponent,
    Severity3Mod3FormComponent,
    Severity4Mod3PageComponent,
    Severity4Mod3GridComponent,
    Severity4Mod3FormComponent,
    Severity5Mod3PageComponent,
    Severity5Mod3GridComponent,
    Severity5Mod3FormComponent,
    Severity6Mod3PageComponent,
    Severity6Mod3GridComponent,
    Severity6Mod3FormComponent,
    Severity7Mod3PageComponent,
    Severity7Mod3GridComponent,
    Severity7Mod3FormComponent,
    Severity8Mod3PageComponent,
    Severity8Mod3GridComponent,
    Severity8Mod3FormComponent,
    Severity9Mod3PageComponent,
    Severity9Mod3GridComponent,
    Severity9Mod3FormComponent,
    Status10Mod3PageComponent,
    Status10Mod3GridComponent,
    Status10Mod3FormComponent,
    Status1Mod3PageComponent,
    Status1Mod3GridComponent,
    Status1Mod3FormComponent,
    Status2Mod3PageComponent,
    Status2Mod3GridComponent,
    Status2Mod3FormComponent,
    Status3Mod3PageComponent,
    Status3Mod3GridComponent,
    Status3Mod3FormComponent,
    Status4Mod3PageComponent,
    Status4Mod3GridComponent,
    Status4Mod3FormComponent,
    Status5Mod3PageComponent,
    Status5Mod3GridComponent,
    Status5Mod3FormComponent,
    Status6Mod3PageComponent,
    Status6Mod3GridComponent,
    Status6Mod3FormComponent,
    Status7Mod3PageComponent,
    Status7Mod3GridComponent,
    Status7Mod3FormComponent,
    Status8Mod3PageComponent,
    Status8Mod3GridComponent,
    Status8Mod3FormComponent,
    Status9Mod3PageComponent,
    Status9Mod3GridComponent,
    Status9Mod3FormComponent,
  ],
  exports: [
  ]
})
export class Mod3Module { }
