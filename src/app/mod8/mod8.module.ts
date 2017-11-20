import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod8RoutingModule } from './mod8-routing.module';

// Components
import { Category10Mod8PageComponent } from './pages/category10-mod8-page/category10-mod8-page.component';
import { Category10Mod8GridComponent } from './pages/category10-mod8-page/components/category10-mod8-grid/category10-mod8-grid.component';
import { Category10Mod8FormComponent } from './pages/category10-mod8-page/components/category10-mod8-form/category10-mod8-form.component';
import { Category1Mod8PageComponent } from './pages/category1-mod8-page/category1-mod8-page.component';
import { Category1Mod8GridComponent } from './pages/category1-mod8-page/components/category1-mod8-grid/category1-mod8-grid.component';
import { Category1Mod8FormComponent } from './pages/category1-mod8-page/components/category1-mod8-form/category1-mod8-form.component';
import { Category2Mod8PageComponent } from './pages/category2-mod8-page/category2-mod8-page.component';
import { Category2Mod8GridComponent } from './pages/category2-mod8-page/components/category2-mod8-grid/category2-mod8-grid.component';
import { Category2Mod8FormComponent } from './pages/category2-mod8-page/components/category2-mod8-form/category2-mod8-form.component';
import { Category3Mod8PageComponent } from './pages/category3-mod8-page/category3-mod8-page.component';
import { Category3Mod8GridComponent } from './pages/category3-mod8-page/components/category3-mod8-grid/category3-mod8-grid.component';
import { Category3Mod8FormComponent } from './pages/category3-mod8-page/components/category3-mod8-form/category3-mod8-form.component';
import { Category4Mod8PageComponent } from './pages/category4-mod8-page/category4-mod8-page.component';
import { Category4Mod8GridComponent } from './pages/category4-mod8-page/components/category4-mod8-grid/category4-mod8-grid.component';
import { Category4Mod8FormComponent } from './pages/category4-mod8-page/components/category4-mod8-form/category4-mod8-form.component';
import { Category5Mod8PageComponent } from './pages/category5-mod8-page/category5-mod8-page.component';
import { Category5Mod8GridComponent } from './pages/category5-mod8-page/components/category5-mod8-grid/category5-mod8-grid.component';
import { Category5Mod8FormComponent } from './pages/category5-mod8-page/components/category5-mod8-form/category5-mod8-form.component';
import { Category6Mod8PageComponent } from './pages/category6-mod8-page/category6-mod8-page.component';
import { Category6Mod8GridComponent } from './pages/category6-mod8-page/components/category6-mod8-grid/category6-mod8-grid.component';
import { Category6Mod8FormComponent } from './pages/category6-mod8-page/components/category6-mod8-form/category6-mod8-form.component';
import { Category7Mod8PageComponent } from './pages/category7-mod8-page/category7-mod8-page.component';
import { Category7Mod8GridComponent } from './pages/category7-mod8-page/components/category7-mod8-grid/category7-mod8-grid.component';
import { Category7Mod8FormComponent } from './pages/category7-mod8-page/components/category7-mod8-form/category7-mod8-form.component';
import { Category8Mod8PageComponent } from './pages/category8-mod8-page/category8-mod8-page.component';
import { Category8Mod8GridComponent } from './pages/category8-mod8-page/components/category8-mod8-grid/category8-mod8-grid.component';
import { Category8Mod8FormComponent } from './pages/category8-mod8-page/components/category8-mod8-form/category8-mod8-form.component';
import { Category9Mod8PageComponent } from './pages/category9-mod8-page/category9-mod8-page.component';
import { Category9Mod8GridComponent } from './pages/category9-mod8-page/components/category9-mod8-grid/category9-mod8-grid.component';
import { Category9Mod8FormComponent } from './pages/category9-mod8-page/components/category9-mod8-form/category9-mod8-form.component';
import { Issue10Mod8PageComponent } from './pages/issue10-mod8-page/issue10-mod8-page.component';
import { Issue10Mod8GridComponent } from './pages/issue10-mod8-page/components/issue10-mod8-grid/issue10-mod8-grid.component';
import { Issue10Mod8FormComponent } from './pages/issue10-mod8-page/components/issue10-mod8-form/issue10-mod8-form.component';
import { Issue1Mod8PageComponent } from './pages/issue1-mod8-page/issue1-mod8-page.component';
import { Issue1Mod8GridComponent } from './pages/issue1-mod8-page/components/issue1-mod8-grid/issue1-mod8-grid.component';
import { Issue1Mod8FormComponent } from './pages/issue1-mod8-page/components/issue1-mod8-form/issue1-mod8-form.component';
import { Issue2Mod8PageComponent } from './pages/issue2-mod8-page/issue2-mod8-page.component';
import { Issue2Mod8GridComponent } from './pages/issue2-mod8-page/components/issue2-mod8-grid/issue2-mod8-grid.component';
import { Issue2Mod8FormComponent } from './pages/issue2-mod8-page/components/issue2-mod8-form/issue2-mod8-form.component';
import { Issue3Mod8PageComponent } from './pages/issue3-mod8-page/issue3-mod8-page.component';
import { Issue3Mod8GridComponent } from './pages/issue3-mod8-page/components/issue3-mod8-grid/issue3-mod8-grid.component';
import { Issue3Mod8FormComponent } from './pages/issue3-mod8-page/components/issue3-mod8-form/issue3-mod8-form.component';
import { Issue4Mod8PageComponent } from './pages/issue4-mod8-page/issue4-mod8-page.component';
import { Issue4Mod8GridComponent } from './pages/issue4-mod8-page/components/issue4-mod8-grid/issue4-mod8-grid.component';
import { Issue4Mod8FormComponent } from './pages/issue4-mod8-page/components/issue4-mod8-form/issue4-mod8-form.component';
import { Issue5Mod8PageComponent } from './pages/issue5-mod8-page/issue5-mod8-page.component';
import { Issue5Mod8GridComponent } from './pages/issue5-mod8-page/components/issue5-mod8-grid/issue5-mod8-grid.component';
import { Issue5Mod8FormComponent } from './pages/issue5-mod8-page/components/issue5-mod8-form/issue5-mod8-form.component';
import { Issue6Mod8PageComponent } from './pages/issue6-mod8-page/issue6-mod8-page.component';
import { Issue6Mod8GridComponent } from './pages/issue6-mod8-page/components/issue6-mod8-grid/issue6-mod8-grid.component';
import { Issue6Mod8FormComponent } from './pages/issue6-mod8-page/components/issue6-mod8-form/issue6-mod8-form.component';
import { Issue7Mod8PageComponent } from './pages/issue7-mod8-page/issue7-mod8-page.component';
import { Issue7Mod8GridComponent } from './pages/issue7-mod8-page/components/issue7-mod8-grid/issue7-mod8-grid.component';
import { Issue7Mod8FormComponent } from './pages/issue7-mod8-page/components/issue7-mod8-form/issue7-mod8-form.component';
import { Issue8Mod8PageComponent } from './pages/issue8-mod8-page/issue8-mod8-page.component';
import { Issue8Mod8GridComponent } from './pages/issue8-mod8-page/components/issue8-mod8-grid/issue8-mod8-grid.component';
import { Issue8Mod8FormComponent } from './pages/issue8-mod8-page/components/issue8-mod8-form/issue8-mod8-form.component';
import { Issue9Mod8PageComponent } from './pages/issue9-mod8-page/issue9-mod8-page.component';
import { Issue9Mod8GridComponent } from './pages/issue9-mod8-page/components/issue9-mod8-grid/issue9-mod8-grid.component';
import { Issue9Mod8FormComponent } from './pages/issue9-mod8-page/components/issue9-mod8-form/issue9-mod8-form.component';
import { Project10Mod8PageComponent } from './pages/project10-mod8-page/project10-mod8-page.component';
import { Project10Mod8GridComponent } from './pages/project10-mod8-page/components/project10-mod8-grid/project10-mod8-grid.component';
import { Project10Mod8FormComponent } from './pages/project10-mod8-page/components/project10-mod8-form/project10-mod8-form.component';
import { Project1Mod8PageComponent } from './pages/project1-mod8-page/project1-mod8-page.component';
import { Project1Mod8GridComponent } from './pages/project1-mod8-page/components/project1-mod8-grid/project1-mod8-grid.component';
import { Project1Mod8FormComponent } from './pages/project1-mod8-page/components/project1-mod8-form/project1-mod8-form.component';
import { Project2Mod8PageComponent } from './pages/project2-mod8-page/project2-mod8-page.component';
import { Project2Mod8GridComponent } from './pages/project2-mod8-page/components/project2-mod8-grid/project2-mod8-grid.component';
import { Project2Mod8FormComponent } from './pages/project2-mod8-page/components/project2-mod8-form/project2-mod8-form.component';
import { Project3Mod8PageComponent } from './pages/project3-mod8-page/project3-mod8-page.component';
import { Project3Mod8GridComponent } from './pages/project3-mod8-page/components/project3-mod8-grid/project3-mod8-grid.component';
import { Project3Mod8FormComponent } from './pages/project3-mod8-page/components/project3-mod8-form/project3-mod8-form.component';
import { Project4Mod8PageComponent } from './pages/project4-mod8-page/project4-mod8-page.component';
import { Project4Mod8GridComponent } from './pages/project4-mod8-page/components/project4-mod8-grid/project4-mod8-grid.component';
import { Project4Mod8FormComponent } from './pages/project4-mod8-page/components/project4-mod8-form/project4-mod8-form.component';
import { Project5Mod8PageComponent } from './pages/project5-mod8-page/project5-mod8-page.component';
import { Project5Mod8GridComponent } from './pages/project5-mod8-page/components/project5-mod8-grid/project5-mod8-grid.component';
import { Project5Mod8FormComponent } from './pages/project5-mod8-page/components/project5-mod8-form/project5-mod8-form.component';
import { Project6Mod8PageComponent } from './pages/project6-mod8-page/project6-mod8-page.component';
import { Project6Mod8GridComponent } from './pages/project6-mod8-page/components/project6-mod8-grid/project6-mod8-grid.component';
import { Project6Mod8FormComponent } from './pages/project6-mod8-page/components/project6-mod8-form/project6-mod8-form.component';
import { Project7Mod8PageComponent } from './pages/project7-mod8-page/project7-mod8-page.component';
import { Project7Mod8GridComponent } from './pages/project7-mod8-page/components/project7-mod8-grid/project7-mod8-grid.component';
import { Project7Mod8FormComponent } from './pages/project7-mod8-page/components/project7-mod8-form/project7-mod8-form.component';
import { Project8Mod8PageComponent } from './pages/project8-mod8-page/project8-mod8-page.component';
import { Project8Mod8GridComponent } from './pages/project8-mod8-page/components/project8-mod8-grid/project8-mod8-grid.component';
import { Project8Mod8FormComponent } from './pages/project8-mod8-page/components/project8-mod8-form/project8-mod8-form.component';
import { Project9Mod8PageComponent } from './pages/project9-mod8-page/project9-mod8-page.component';
import { Project9Mod8GridComponent } from './pages/project9-mod8-page/components/project9-mod8-grid/project9-mod8-grid.component';
import { Project9Mod8FormComponent } from './pages/project9-mod8-page/components/project9-mod8-form/project9-mod8-form.component';
import { Severity10Mod8PageComponent } from './pages/severity10-mod8-page/severity10-mod8-page.component';
import { Severity10Mod8GridComponent } from './pages/severity10-mod8-page/components/severity10-mod8-grid/severity10-mod8-grid.component';
import { Severity10Mod8FormComponent } from './pages/severity10-mod8-page/components/severity10-mod8-form/severity10-mod8-form.component';
import { Severity1Mod8PageComponent } from './pages/severity1-mod8-page/severity1-mod8-page.component';
import { Severity1Mod8GridComponent } from './pages/severity1-mod8-page/components/severity1-mod8-grid/severity1-mod8-grid.component';
import { Severity1Mod8FormComponent } from './pages/severity1-mod8-page/components/severity1-mod8-form/severity1-mod8-form.component';
import { Severity2Mod8PageComponent } from './pages/severity2-mod8-page/severity2-mod8-page.component';
import { Severity2Mod8GridComponent } from './pages/severity2-mod8-page/components/severity2-mod8-grid/severity2-mod8-grid.component';
import { Severity2Mod8FormComponent } from './pages/severity2-mod8-page/components/severity2-mod8-form/severity2-mod8-form.component';
import { Severity3Mod8PageComponent } from './pages/severity3-mod8-page/severity3-mod8-page.component';
import { Severity3Mod8GridComponent } from './pages/severity3-mod8-page/components/severity3-mod8-grid/severity3-mod8-grid.component';
import { Severity3Mod8FormComponent } from './pages/severity3-mod8-page/components/severity3-mod8-form/severity3-mod8-form.component';
import { Severity4Mod8PageComponent } from './pages/severity4-mod8-page/severity4-mod8-page.component';
import { Severity4Mod8GridComponent } from './pages/severity4-mod8-page/components/severity4-mod8-grid/severity4-mod8-grid.component';
import { Severity4Mod8FormComponent } from './pages/severity4-mod8-page/components/severity4-mod8-form/severity4-mod8-form.component';
import { Severity5Mod8PageComponent } from './pages/severity5-mod8-page/severity5-mod8-page.component';
import { Severity5Mod8GridComponent } from './pages/severity5-mod8-page/components/severity5-mod8-grid/severity5-mod8-grid.component';
import { Severity5Mod8FormComponent } from './pages/severity5-mod8-page/components/severity5-mod8-form/severity5-mod8-form.component';
import { Severity6Mod8PageComponent } from './pages/severity6-mod8-page/severity6-mod8-page.component';
import { Severity6Mod8GridComponent } from './pages/severity6-mod8-page/components/severity6-mod8-grid/severity6-mod8-grid.component';
import { Severity6Mod8FormComponent } from './pages/severity6-mod8-page/components/severity6-mod8-form/severity6-mod8-form.component';
import { Severity7Mod8PageComponent } from './pages/severity7-mod8-page/severity7-mod8-page.component';
import { Severity7Mod8GridComponent } from './pages/severity7-mod8-page/components/severity7-mod8-grid/severity7-mod8-grid.component';
import { Severity7Mod8FormComponent } from './pages/severity7-mod8-page/components/severity7-mod8-form/severity7-mod8-form.component';
import { Severity8Mod8PageComponent } from './pages/severity8-mod8-page/severity8-mod8-page.component';
import { Severity8Mod8GridComponent } from './pages/severity8-mod8-page/components/severity8-mod8-grid/severity8-mod8-grid.component';
import { Severity8Mod8FormComponent } from './pages/severity8-mod8-page/components/severity8-mod8-form/severity8-mod8-form.component';
import { Severity9Mod8PageComponent } from './pages/severity9-mod8-page/severity9-mod8-page.component';
import { Severity9Mod8GridComponent } from './pages/severity9-mod8-page/components/severity9-mod8-grid/severity9-mod8-grid.component';
import { Severity9Mod8FormComponent } from './pages/severity9-mod8-page/components/severity9-mod8-form/severity9-mod8-form.component';
import { Status10Mod8PageComponent } from './pages/status10-mod8-page/status10-mod8-page.component';
import { Status10Mod8GridComponent } from './pages/status10-mod8-page/components/status10-mod8-grid/status10-mod8-grid.component';
import { Status10Mod8FormComponent } from './pages/status10-mod8-page/components/status10-mod8-form/status10-mod8-form.component';
import { Status1Mod8PageComponent } from './pages/status1-mod8-page/status1-mod8-page.component';
import { Status1Mod8GridComponent } from './pages/status1-mod8-page/components/status1-mod8-grid/status1-mod8-grid.component';
import { Status1Mod8FormComponent } from './pages/status1-mod8-page/components/status1-mod8-form/status1-mod8-form.component';
import { Status2Mod8PageComponent } from './pages/status2-mod8-page/status2-mod8-page.component';
import { Status2Mod8GridComponent } from './pages/status2-mod8-page/components/status2-mod8-grid/status2-mod8-grid.component';
import { Status2Mod8FormComponent } from './pages/status2-mod8-page/components/status2-mod8-form/status2-mod8-form.component';
import { Status3Mod8PageComponent } from './pages/status3-mod8-page/status3-mod8-page.component';
import { Status3Mod8GridComponent } from './pages/status3-mod8-page/components/status3-mod8-grid/status3-mod8-grid.component';
import { Status3Mod8FormComponent } from './pages/status3-mod8-page/components/status3-mod8-form/status3-mod8-form.component';
import { Status4Mod8PageComponent } from './pages/status4-mod8-page/status4-mod8-page.component';
import { Status4Mod8GridComponent } from './pages/status4-mod8-page/components/status4-mod8-grid/status4-mod8-grid.component';
import { Status4Mod8FormComponent } from './pages/status4-mod8-page/components/status4-mod8-form/status4-mod8-form.component';
import { Status5Mod8PageComponent } from './pages/status5-mod8-page/status5-mod8-page.component';
import { Status5Mod8GridComponent } from './pages/status5-mod8-page/components/status5-mod8-grid/status5-mod8-grid.component';
import { Status5Mod8FormComponent } from './pages/status5-mod8-page/components/status5-mod8-form/status5-mod8-form.component';
import { Status6Mod8PageComponent } from './pages/status6-mod8-page/status6-mod8-page.component';
import { Status6Mod8GridComponent } from './pages/status6-mod8-page/components/status6-mod8-grid/status6-mod8-grid.component';
import { Status6Mod8FormComponent } from './pages/status6-mod8-page/components/status6-mod8-form/status6-mod8-form.component';
import { Status7Mod8PageComponent } from './pages/status7-mod8-page/status7-mod8-page.component';
import { Status7Mod8GridComponent } from './pages/status7-mod8-page/components/status7-mod8-grid/status7-mod8-grid.component';
import { Status7Mod8FormComponent } from './pages/status7-mod8-page/components/status7-mod8-form/status7-mod8-form.component';
import { Status8Mod8PageComponent } from './pages/status8-mod8-page/status8-mod8-page.component';
import { Status8Mod8GridComponent } from './pages/status8-mod8-page/components/status8-mod8-grid/status8-mod8-grid.component';
import { Status8Mod8FormComponent } from './pages/status8-mod8-page/components/status8-mod8-form/status8-mod8-form.component';
import { Status9Mod8PageComponent } from './pages/status9-mod8-page/status9-mod8-page.component';
import { Status9Mod8GridComponent } from './pages/status9-mod8-page/components/status9-mod8-grid/status9-mod8-grid.component';
import { Status9Mod8FormComponent } from './pages/status9-mod8-page/components/status9-mod8-form/status9-mod8-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod8RoutingModule,
  ],
  declarations: [
    Category10Mod8PageComponent,
    Category10Mod8GridComponent,
    Category10Mod8FormComponent,
    Category1Mod8PageComponent,
    Category1Mod8GridComponent,
    Category1Mod8FormComponent,
    Category2Mod8PageComponent,
    Category2Mod8GridComponent,
    Category2Mod8FormComponent,
    Category3Mod8PageComponent,
    Category3Mod8GridComponent,
    Category3Mod8FormComponent,
    Category4Mod8PageComponent,
    Category4Mod8GridComponent,
    Category4Mod8FormComponent,
    Category5Mod8PageComponent,
    Category5Mod8GridComponent,
    Category5Mod8FormComponent,
    Category6Mod8PageComponent,
    Category6Mod8GridComponent,
    Category6Mod8FormComponent,
    Category7Mod8PageComponent,
    Category7Mod8GridComponent,
    Category7Mod8FormComponent,
    Category8Mod8PageComponent,
    Category8Mod8GridComponent,
    Category8Mod8FormComponent,
    Category9Mod8PageComponent,
    Category9Mod8GridComponent,
    Category9Mod8FormComponent,
    Issue10Mod8PageComponent,
    Issue10Mod8GridComponent,
    Issue10Mod8FormComponent,
    Issue1Mod8PageComponent,
    Issue1Mod8GridComponent,
    Issue1Mod8FormComponent,
    Issue2Mod8PageComponent,
    Issue2Mod8GridComponent,
    Issue2Mod8FormComponent,
    Issue3Mod8PageComponent,
    Issue3Mod8GridComponent,
    Issue3Mod8FormComponent,
    Issue4Mod8PageComponent,
    Issue4Mod8GridComponent,
    Issue4Mod8FormComponent,
    Issue5Mod8PageComponent,
    Issue5Mod8GridComponent,
    Issue5Mod8FormComponent,
    Issue6Mod8PageComponent,
    Issue6Mod8GridComponent,
    Issue6Mod8FormComponent,
    Issue7Mod8PageComponent,
    Issue7Mod8GridComponent,
    Issue7Mod8FormComponent,
    Issue8Mod8PageComponent,
    Issue8Mod8GridComponent,
    Issue8Mod8FormComponent,
    Issue9Mod8PageComponent,
    Issue9Mod8GridComponent,
    Issue9Mod8FormComponent,
    Project10Mod8PageComponent,
    Project10Mod8GridComponent,
    Project10Mod8FormComponent,
    Project1Mod8PageComponent,
    Project1Mod8GridComponent,
    Project1Mod8FormComponent,
    Project2Mod8PageComponent,
    Project2Mod8GridComponent,
    Project2Mod8FormComponent,
    Project3Mod8PageComponent,
    Project3Mod8GridComponent,
    Project3Mod8FormComponent,
    Project4Mod8PageComponent,
    Project4Mod8GridComponent,
    Project4Mod8FormComponent,
    Project5Mod8PageComponent,
    Project5Mod8GridComponent,
    Project5Mod8FormComponent,
    Project6Mod8PageComponent,
    Project6Mod8GridComponent,
    Project6Mod8FormComponent,
    Project7Mod8PageComponent,
    Project7Mod8GridComponent,
    Project7Mod8FormComponent,
    Project8Mod8PageComponent,
    Project8Mod8GridComponent,
    Project8Mod8FormComponent,
    Project9Mod8PageComponent,
    Project9Mod8GridComponent,
    Project9Mod8FormComponent,
    Severity10Mod8PageComponent,
    Severity10Mod8GridComponent,
    Severity10Mod8FormComponent,
    Severity1Mod8PageComponent,
    Severity1Mod8GridComponent,
    Severity1Mod8FormComponent,
    Severity2Mod8PageComponent,
    Severity2Mod8GridComponent,
    Severity2Mod8FormComponent,
    Severity3Mod8PageComponent,
    Severity3Mod8GridComponent,
    Severity3Mod8FormComponent,
    Severity4Mod8PageComponent,
    Severity4Mod8GridComponent,
    Severity4Mod8FormComponent,
    Severity5Mod8PageComponent,
    Severity5Mod8GridComponent,
    Severity5Mod8FormComponent,
    Severity6Mod8PageComponent,
    Severity6Mod8GridComponent,
    Severity6Mod8FormComponent,
    Severity7Mod8PageComponent,
    Severity7Mod8GridComponent,
    Severity7Mod8FormComponent,
    Severity8Mod8PageComponent,
    Severity8Mod8GridComponent,
    Severity8Mod8FormComponent,
    Severity9Mod8PageComponent,
    Severity9Mod8GridComponent,
    Severity9Mod8FormComponent,
    Status10Mod8PageComponent,
    Status10Mod8GridComponent,
    Status10Mod8FormComponent,
    Status1Mod8PageComponent,
    Status1Mod8GridComponent,
    Status1Mod8FormComponent,
    Status2Mod8PageComponent,
    Status2Mod8GridComponent,
    Status2Mod8FormComponent,
    Status3Mod8PageComponent,
    Status3Mod8GridComponent,
    Status3Mod8FormComponent,
    Status4Mod8PageComponent,
    Status4Mod8GridComponent,
    Status4Mod8FormComponent,
    Status5Mod8PageComponent,
    Status5Mod8GridComponent,
    Status5Mod8FormComponent,
    Status6Mod8PageComponent,
    Status6Mod8GridComponent,
    Status6Mod8FormComponent,
    Status7Mod8PageComponent,
    Status7Mod8GridComponent,
    Status7Mod8FormComponent,
    Status8Mod8PageComponent,
    Status8Mod8GridComponent,
    Status8Mod8FormComponent,
    Status9Mod8PageComponent,
    Status9Mod8GridComponent,
    Status9Mod8FormComponent,
  ],
  exports: [
  ]
})
export class Mod8Module { }
