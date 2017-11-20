import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod1RoutingModule } from './mod1-routing.module';

// Components
import { Category10Mod1PageComponent } from './pages/category10-mod1-page/category10-mod1-page.component';
import { Category10Mod1GridComponent } from './pages/category10-mod1-page/components/category10-mod1-grid/category10-mod1-grid.component';
import { Category10Mod1FormComponent } from './pages/category10-mod1-page/components/category10-mod1-form/category10-mod1-form.component';
import { Category1Mod1PageComponent } from './pages/category1-mod1-page/category1-mod1-page.component';
import { Category1Mod1GridComponent } from './pages/category1-mod1-page/components/category1-mod1-grid/category1-mod1-grid.component';
import { Category1Mod1FormComponent } from './pages/category1-mod1-page/components/category1-mod1-form/category1-mod1-form.component';
import { Category2Mod1PageComponent } from './pages/category2-mod1-page/category2-mod1-page.component';
import { Category2Mod1GridComponent } from './pages/category2-mod1-page/components/category2-mod1-grid/category2-mod1-grid.component';
import { Category2Mod1FormComponent } from './pages/category2-mod1-page/components/category2-mod1-form/category2-mod1-form.component';
import { Category3Mod1PageComponent } from './pages/category3-mod1-page/category3-mod1-page.component';
import { Category3Mod1GridComponent } from './pages/category3-mod1-page/components/category3-mod1-grid/category3-mod1-grid.component';
import { Category3Mod1FormComponent } from './pages/category3-mod1-page/components/category3-mod1-form/category3-mod1-form.component';
import { Category4Mod1PageComponent } from './pages/category4-mod1-page/category4-mod1-page.component';
import { Category4Mod1GridComponent } from './pages/category4-mod1-page/components/category4-mod1-grid/category4-mod1-grid.component';
import { Category4Mod1FormComponent } from './pages/category4-mod1-page/components/category4-mod1-form/category4-mod1-form.component';
import { Category5Mod1PageComponent } from './pages/category5-mod1-page/category5-mod1-page.component';
import { Category5Mod1GridComponent } from './pages/category5-mod1-page/components/category5-mod1-grid/category5-mod1-grid.component';
import { Category5Mod1FormComponent } from './pages/category5-mod1-page/components/category5-mod1-form/category5-mod1-form.component';
import { Category6Mod1PageComponent } from './pages/category6-mod1-page/category6-mod1-page.component';
import { Category6Mod1GridComponent } from './pages/category6-mod1-page/components/category6-mod1-grid/category6-mod1-grid.component';
import { Category6Mod1FormComponent } from './pages/category6-mod1-page/components/category6-mod1-form/category6-mod1-form.component';
import { Category7Mod1PageComponent } from './pages/category7-mod1-page/category7-mod1-page.component';
import { Category7Mod1GridComponent } from './pages/category7-mod1-page/components/category7-mod1-grid/category7-mod1-grid.component';
import { Category7Mod1FormComponent } from './pages/category7-mod1-page/components/category7-mod1-form/category7-mod1-form.component';
import { Category8Mod1PageComponent } from './pages/category8-mod1-page/category8-mod1-page.component';
import { Category8Mod1GridComponent } from './pages/category8-mod1-page/components/category8-mod1-grid/category8-mod1-grid.component';
import { Category8Mod1FormComponent } from './pages/category8-mod1-page/components/category8-mod1-form/category8-mod1-form.component';
import { Category9Mod1PageComponent } from './pages/category9-mod1-page/category9-mod1-page.component';
import { Category9Mod1GridComponent } from './pages/category9-mod1-page/components/category9-mod1-grid/category9-mod1-grid.component';
import { Category9Mod1FormComponent } from './pages/category9-mod1-page/components/category9-mod1-form/category9-mod1-form.component';
import { Issue10Mod1PageComponent } from './pages/issue10-mod1-page/issue10-mod1-page.component';
import { Issue10Mod1GridComponent } from './pages/issue10-mod1-page/components/issue10-mod1-grid/issue10-mod1-grid.component';
import { Issue10Mod1FormComponent } from './pages/issue10-mod1-page/components/issue10-mod1-form/issue10-mod1-form.component';
import { Issue1Mod1PageComponent } from './pages/issue1-mod1-page/issue1-mod1-page.component';
import { Issue1Mod1GridComponent } from './pages/issue1-mod1-page/components/issue1-mod1-grid/issue1-mod1-grid.component';
import { Issue1Mod1FormComponent } from './pages/issue1-mod1-page/components/issue1-mod1-form/issue1-mod1-form.component';
import { Issue2Mod1PageComponent } from './pages/issue2-mod1-page/issue2-mod1-page.component';
import { Issue2Mod1GridComponent } from './pages/issue2-mod1-page/components/issue2-mod1-grid/issue2-mod1-grid.component';
import { Issue2Mod1FormComponent } from './pages/issue2-mod1-page/components/issue2-mod1-form/issue2-mod1-form.component';
import { Issue3Mod1PageComponent } from './pages/issue3-mod1-page/issue3-mod1-page.component';
import { Issue3Mod1GridComponent } from './pages/issue3-mod1-page/components/issue3-mod1-grid/issue3-mod1-grid.component';
import { Issue3Mod1FormComponent } from './pages/issue3-mod1-page/components/issue3-mod1-form/issue3-mod1-form.component';
import { Issue4Mod1PageComponent } from './pages/issue4-mod1-page/issue4-mod1-page.component';
import { Issue4Mod1GridComponent } from './pages/issue4-mod1-page/components/issue4-mod1-grid/issue4-mod1-grid.component';
import { Issue4Mod1FormComponent } from './pages/issue4-mod1-page/components/issue4-mod1-form/issue4-mod1-form.component';
import { Issue5Mod1PageComponent } from './pages/issue5-mod1-page/issue5-mod1-page.component';
import { Issue5Mod1GridComponent } from './pages/issue5-mod1-page/components/issue5-mod1-grid/issue5-mod1-grid.component';
import { Issue5Mod1FormComponent } from './pages/issue5-mod1-page/components/issue5-mod1-form/issue5-mod1-form.component';
import { Issue6Mod1PageComponent } from './pages/issue6-mod1-page/issue6-mod1-page.component';
import { Issue6Mod1GridComponent } from './pages/issue6-mod1-page/components/issue6-mod1-grid/issue6-mod1-grid.component';
import { Issue6Mod1FormComponent } from './pages/issue6-mod1-page/components/issue6-mod1-form/issue6-mod1-form.component';
import { Issue7Mod1PageComponent } from './pages/issue7-mod1-page/issue7-mod1-page.component';
import { Issue7Mod1GridComponent } from './pages/issue7-mod1-page/components/issue7-mod1-grid/issue7-mod1-grid.component';
import { Issue7Mod1FormComponent } from './pages/issue7-mod1-page/components/issue7-mod1-form/issue7-mod1-form.component';
import { Issue8Mod1PageComponent } from './pages/issue8-mod1-page/issue8-mod1-page.component';
import { Issue8Mod1GridComponent } from './pages/issue8-mod1-page/components/issue8-mod1-grid/issue8-mod1-grid.component';
import { Issue8Mod1FormComponent } from './pages/issue8-mod1-page/components/issue8-mod1-form/issue8-mod1-form.component';
import { Issue9Mod1PageComponent } from './pages/issue9-mod1-page/issue9-mod1-page.component';
import { Issue9Mod1GridComponent } from './pages/issue9-mod1-page/components/issue9-mod1-grid/issue9-mod1-grid.component';
import { Issue9Mod1FormComponent } from './pages/issue9-mod1-page/components/issue9-mod1-form/issue9-mod1-form.component';
import { Project10Mod1PageComponent } from './pages/project10-mod1-page/project10-mod1-page.component';
import { Project10Mod1GridComponent } from './pages/project10-mod1-page/components/project10-mod1-grid/project10-mod1-grid.component';
import { Project10Mod1FormComponent } from './pages/project10-mod1-page/components/project10-mod1-form/project10-mod1-form.component';
import { Project1Mod1PageComponent } from './pages/project1-mod1-page/project1-mod1-page.component';
import { Project1Mod1GridComponent } from './pages/project1-mod1-page/components/project1-mod1-grid/project1-mod1-grid.component';
import { Project1Mod1FormComponent } from './pages/project1-mod1-page/components/project1-mod1-form/project1-mod1-form.component';
import { Project2Mod1PageComponent } from './pages/project2-mod1-page/project2-mod1-page.component';
import { Project2Mod1GridComponent } from './pages/project2-mod1-page/components/project2-mod1-grid/project2-mod1-grid.component';
import { Project2Mod1FormComponent } from './pages/project2-mod1-page/components/project2-mod1-form/project2-mod1-form.component';
import { Project3Mod1PageComponent } from './pages/project3-mod1-page/project3-mod1-page.component';
import { Project3Mod1GridComponent } from './pages/project3-mod1-page/components/project3-mod1-grid/project3-mod1-grid.component';
import { Project3Mod1FormComponent } from './pages/project3-mod1-page/components/project3-mod1-form/project3-mod1-form.component';
import { Project4Mod1PageComponent } from './pages/project4-mod1-page/project4-mod1-page.component';
import { Project4Mod1GridComponent } from './pages/project4-mod1-page/components/project4-mod1-grid/project4-mod1-grid.component';
import { Project4Mod1FormComponent } from './pages/project4-mod1-page/components/project4-mod1-form/project4-mod1-form.component';
import { Project5Mod1PageComponent } from './pages/project5-mod1-page/project5-mod1-page.component';
import { Project5Mod1GridComponent } from './pages/project5-mod1-page/components/project5-mod1-grid/project5-mod1-grid.component';
import { Project5Mod1FormComponent } from './pages/project5-mod1-page/components/project5-mod1-form/project5-mod1-form.component';
import { Project6Mod1PageComponent } from './pages/project6-mod1-page/project6-mod1-page.component';
import { Project6Mod1GridComponent } from './pages/project6-mod1-page/components/project6-mod1-grid/project6-mod1-grid.component';
import { Project6Mod1FormComponent } from './pages/project6-mod1-page/components/project6-mod1-form/project6-mod1-form.component';
import { Project7Mod1PageComponent } from './pages/project7-mod1-page/project7-mod1-page.component';
import { Project7Mod1GridComponent } from './pages/project7-mod1-page/components/project7-mod1-grid/project7-mod1-grid.component';
import { Project7Mod1FormComponent } from './pages/project7-mod1-page/components/project7-mod1-form/project7-mod1-form.component';
import { Project8Mod1PageComponent } from './pages/project8-mod1-page/project8-mod1-page.component';
import { Project8Mod1GridComponent } from './pages/project8-mod1-page/components/project8-mod1-grid/project8-mod1-grid.component';
import { Project8Mod1FormComponent } from './pages/project8-mod1-page/components/project8-mod1-form/project8-mod1-form.component';
import { Project9Mod1PageComponent } from './pages/project9-mod1-page/project9-mod1-page.component';
import { Project9Mod1GridComponent } from './pages/project9-mod1-page/components/project9-mod1-grid/project9-mod1-grid.component';
import { Project9Mod1FormComponent } from './pages/project9-mod1-page/components/project9-mod1-form/project9-mod1-form.component';
import { Severity10Mod1PageComponent } from './pages/severity10-mod1-page/severity10-mod1-page.component';
import { Severity10Mod1GridComponent } from './pages/severity10-mod1-page/components/severity10-mod1-grid/severity10-mod1-grid.component';
import { Severity10Mod1FormComponent } from './pages/severity10-mod1-page/components/severity10-mod1-form/severity10-mod1-form.component';
import { Severity1Mod1PageComponent } from './pages/severity1-mod1-page/severity1-mod1-page.component';
import { Severity1Mod1GridComponent } from './pages/severity1-mod1-page/components/severity1-mod1-grid/severity1-mod1-grid.component';
import { Severity1Mod1FormComponent } from './pages/severity1-mod1-page/components/severity1-mod1-form/severity1-mod1-form.component';
import { Severity2Mod1PageComponent } from './pages/severity2-mod1-page/severity2-mod1-page.component';
import { Severity2Mod1GridComponent } from './pages/severity2-mod1-page/components/severity2-mod1-grid/severity2-mod1-grid.component';
import { Severity2Mod1FormComponent } from './pages/severity2-mod1-page/components/severity2-mod1-form/severity2-mod1-form.component';
import { Severity3Mod1PageComponent } from './pages/severity3-mod1-page/severity3-mod1-page.component';
import { Severity3Mod1GridComponent } from './pages/severity3-mod1-page/components/severity3-mod1-grid/severity3-mod1-grid.component';
import { Severity3Mod1FormComponent } from './pages/severity3-mod1-page/components/severity3-mod1-form/severity3-mod1-form.component';
import { Severity4Mod1PageComponent } from './pages/severity4-mod1-page/severity4-mod1-page.component';
import { Severity4Mod1GridComponent } from './pages/severity4-mod1-page/components/severity4-mod1-grid/severity4-mod1-grid.component';
import { Severity4Mod1FormComponent } from './pages/severity4-mod1-page/components/severity4-mod1-form/severity4-mod1-form.component';
import { Severity5Mod1PageComponent } from './pages/severity5-mod1-page/severity5-mod1-page.component';
import { Severity5Mod1GridComponent } from './pages/severity5-mod1-page/components/severity5-mod1-grid/severity5-mod1-grid.component';
import { Severity5Mod1FormComponent } from './pages/severity5-mod1-page/components/severity5-mod1-form/severity5-mod1-form.component';
import { Severity6Mod1PageComponent } from './pages/severity6-mod1-page/severity6-mod1-page.component';
import { Severity6Mod1GridComponent } from './pages/severity6-mod1-page/components/severity6-mod1-grid/severity6-mod1-grid.component';
import { Severity6Mod1FormComponent } from './pages/severity6-mod1-page/components/severity6-mod1-form/severity6-mod1-form.component';
import { Severity7Mod1PageComponent } from './pages/severity7-mod1-page/severity7-mod1-page.component';
import { Severity7Mod1GridComponent } from './pages/severity7-mod1-page/components/severity7-mod1-grid/severity7-mod1-grid.component';
import { Severity7Mod1FormComponent } from './pages/severity7-mod1-page/components/severity7-mod1-form/severity7-mod1-form.component';
import { Severity8Mod1PageComponent } from './pages/severity8-mod1-page/severity8-mod1-page.component';
import { Severity8Mod1GridComponent } from './pages/severity8-mod1-page/components/severity8-mod1-grid/severity8-mod1-grid.component';
import { Severity8Mod1FormComponent } from './pages/severity8-mod1-page/components/severity8-mod1-form/severity8-mod1-form.component';
import { Severity9Mod1PageComponent } from './pages/severity9-mod1-page/severity9-mod1-page.component';
import { Severity9Mod1GridComponent } from './pages/severity9-mod1-page/components/severity9-mod1-grid/severity9-mod1-grid.component';
import { Severity9Mod1FormComponent } from './pages/severity9-mod1-page/components/severity9-mod1-form/severity9-mod1-form.component';
import { Status10Mod1PageComponent } from './pages/status10-mod1-page/status10-mod1-page.component';
import { Status10Mod1GridComponent } from './pages/status10-mod1-page/components/status10-mod1-grid/status10-mod1-grid.component';
import { Status10Mod1FormComponent } from './pages/status10-mod1-page/components/status10-mod1-form/status10-mod1-form.component';
import { Status1Mod1PageComponent } from './pages/status1-mod1-page/status1-mod1-page.component';
import { Status1Mod1GridComponent } from './pages/status1-mod1-page/components/status1-mod1-grid/status1-mod1-grid.component';
import { Status1Mod1FormComponent } from './pages/status1-mod1-page/components/status1-mod1-form/status1-mod1-form.component';
import { Status2Mod1PageComponent } from './pages/status2-mod1-page/status2-mod1-page.component';
import { Status2Mod1GridComponent } from './pages/status2-mod1-page/components/status2-mod1-grid/status2-mod1-grid.component';
import { Status2Mod1FormComponent } from './pages/status2-mod1-page/components/status2-mod1-form/status2-mod1-form.component';
import { Status3Mod1PageComponent } from './pages/status3-mod1-page/status3-mod1-page.component';
import { Status3Mod1GridComponent } from './pages/status3-mod1-page/components/status3-mod1-grid/status3-mod1-grid.component';
import { Status3Mod1FormComponent } from './pages/status3-mod1-page/components/status3-mod1-form/status3-mod1-form.component';
import { Status4Mod1PageComponent } from './pages/status4-mod1-page/status4-mod1-page.component';
import { Status4Mod1GridComponent } from './pages/status4-mod1-page/components/status4-mod1-grid/status4-mod1-grid.component';
import { Status4Mod1FormComponent } from './pages/status4-mod1-page/components/status4-mod1-form/status4-mod1-form.component';
import { Status5Mod1PageComponent } from './pages/status5-mod1-page/status5-mod1-page.component';
import { Status5Mod1GridComponent } from './pages/status5-mod1-page/components/status5-mod1-grid/status5-mod1-grid.component';
import { Status5Mod1FormComponent } from './pages/status5-mod1-page/components/status5-mod1-form/status5-mod1-form.component';
import { Status6Mod1PageComponent } from './pages/status6-mod1-page/status6-mod1-page.component';
import { Status6Mod1GridComponent } from './pages/status6-mod1-page/components/status6-mod1-grid/status6-mod1-grid.component';
import { Status6Mod1FormComponent } from './pages/status6-mod1-page/components/status6-mod1-form/status6-mod1-form.component';
import { Status7Mod1PageComponent } from './pages/status7-mod1-page/status7-mod1-page.component';
import { Status7Mod1GridComponent } from './pages/status7-mod1-page/components/status7-mod1-grid/status7-mod1-grid.component';
import { Status7Mod1FormComponent } from './pages/status7-mod1-page/components/status7-mod1-form/status7-mod1-form.component';
import { Status8Mod1PageComponent } from './pages/status8-mod1-page/status8-mod1-page.component';
import { Status8Mod1GridComponent } from './pages/status8-mod1-page/components/status8-mod1-grid/status8-mod1-grid.component';
import { Status8Mod1FormComponent } from './pages/status8-mod1-page/components/status8-mod1-form/status8-mod1-form.component';
import { Status9Mod1PageComponent } from './pages/status9-mod1-page/status9-mod1-page.component';
import { Status9Mod1GridComponent } from './pages/status9-mod1-page/components/status9-mod1-grid/status9-mod1-grid.component';
import { Status9Mod1FormComponent } from './pages/status9-mod1-page/components/status9-mod1-form/status9-mod1-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod1RoutingModule,
  ],
  declarations: [
    Category10Mod1PageComponent,
    Category10Mod1GridComponent,
    Category10Mod1FormComponent,
    Category1Mod1PageComponent,
    Category1Mod1GridComponent,
    Category1Mod1FormComponent,
    Category2Mod1PageComponent,
    Category2Mod1GridComponent,
    Category2Mod1FormComponent,
    Category3Mod1PageComponent,
    Category3Mod1GridComponent,
    Category3Mod1FormComponent,
    Category4Mod1PageComponent,
    Category4Mod1GridComponent,
    Category4Mod1FormComponent,
    Category5Mod1PageComponent,
    Category5Mod1GridComponent,
    Category5Mod1FormComponent,
    Category6Mod1PageComponent,
    Category6Mod1GridComponent,
    Category6Mod1FormComponent,
    Category7Mod1PageComponent,
    Category7Mod1GridComponent,
    Category7Mod1FormComponent,
    Category8Mod1PageComponent,
    Category8Mod1GridComponent,
    Category8Mod1FormComponent,
    Category9Mod1PageComponent,
    Category9Mod1GridComponent,
    Category9Mod1FormComponent,
    Issue10Mod1PageComponent,
    Issue10Mod1GridComponent,
    Issue10Mod1FormComponent,
    Issue1Mod1PageComponent,
    Issue1Mod1GridComponent,
    Issue1Mod1FormComponent,
    Issue2Mod1PageComponent,
    Issue2Mod1GridComponent,
    Issue2Mod1FormComponent,
    Issue3Mod1PageComponent,
    Issue3Mod1GridComponent,
    Issue3Mod1FormComponent,
    Issue4Mod1PageComponent,
    Issue4Mod1GridComponent,
    Issue4Mod1FormComponent,
    Issue5Mod1PageComponent,
    Issue5Mod1GridComponent,
    Issue5Mod1FormComponent,
    Issue6Mod1PageComponent,
    Issue6Mod1GridComponent,
    Issue6Mod1FormComponent,
    Issue7Mod1PageComponent,
    Issue7Mod1GridComponent,
    Issue7Mod1FormComponent,
    Issue8Mod1PageComponent,
    Issue8Mod1GridComponent,
    Issue8Mod1FormComponent,
    Issue9Mod1PageComponent,
    Issue9Mod1GridComponent,
    Issue9Mod1FormComponent,
    Project10Mod1PageComponent,
    Project10Mod1GridComponent,
    Project10Mod1FormComponent,
    Project1Mod1PageComponent,
    Project1Mod1GridComponent,
    Project1Mod1FormComponent,
    Project2Mod1PageComponent,
    Project2Mod1GridComponent,
    Project2Mod1FormComponent,
    Project3Mod1PageComponent,
    Project3Mod1GridComponent,
    Project3Mod1FormComponent,
    Project4Mod1PageComponent,
    Project4Mod1GridComponent,
    Project4Mod1FormComponent,
    Project5Mod1PageComponent,
    Project5Mod1GridComponent,
    Project5Mod1FormComponent,
    Project6Mod1PageComponent,
    Project6Mod1GridComponent,
    Project6Mod1FormComponent,
    Project7Mod1PageComponent,
    Project7Mod1GridComponent,
    Project7Mod1FormComponent,
    Project8Mod1PageComponent,
    Project8Mod1GridComponent,
    Project8Mod1FormComponent,
    Project9Mod1PageComponent,
    Project9Mod1GridComponent,
    Project9Mod1FormComponent,
    Severity10Mod1PageComponent,
    Severity10Mod1GridComponent,
    Severity10Mod1FormComponent,
    Severity1Mod1PageComponent,
    Severity1Mod1GridComponent,
    Severity1Mod1FormComponent,
    Severity2Mod1PageComponent,
    Severity2Mod1GridComponent,
    Severity2Mod1FormComponent,
    Severity3Mod1PageComponent,
    Severity3Mod1GridComponent,
    Severity3Mod1FormComponent,
    Severity4Mod1PageComponent,
    Severity4Mod1GridComponent,
    Severity4Mod1FormComponent,
    Severity5Mod1PageComponent,
    Severity5Mod1GridComponent,
    Severity5Mod1FormComponent,
    Severity6Mod1PageComponent,
    Severity6Mod1GridComponent,
    Severity6Mod1FormComponent,
    Severity7Mod1PageComponent,
    Severity7Mod1GridComponent,
    Severity7Mod1FormComponent,
    Severity8Mod1PageComponent,
    Severity8Mod1GridComponent,
    Severity8Mod1FormComponent,
    Severity9Mod1PageComponent,
    Severity9Mod1GridComponent,
    Severity9Mod1FormComponent,
    Status10Mod1PageComponent,
    Status10Mod1GridComponent,
    Status10Mod1FormComponent,
    Status1Mod1PageComponent,
    Status1Mod1GridComponent,
    Status1Mod1FormComponent,
    Status2Mod1PageComponent,
    Status2Mod1GridComponent,
    Status2Mod1FormComponent,
    Status3Mod1PageComponent,
    Status3Mod1GridComponent,
    Status3Mod1FormComponent,
    Status4Mod1PageComponent,
    Status4Mod1GridComponent,
    Status4Mod1FormComponent,
    Status5Mod1PageComponent,
    Status5Mod1GridComponent,
    Status5Mod1FormComponent,
    Status6Mod1PageComponent,
    Status6Mod1GridComponent,
    Status6Mod1FormComponent,
    Status7Mod1PageComponent,
    Status7Mod1GridComponent,
    Status7Mod1FormComponent,
    Status8Mod1PageComponent,
    Status8Mod1GridComponent,
    Status8Mod1FormComponent,
    Status9Mod1PageComponent,
    Status9Mod1GridComponent,
    Status9Mod1FormComponent,
  ],
  exports: [
  ]
})
export class Mod1Module { }
