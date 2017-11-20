import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod4RoutingModule } from './mod4-routing.module';

// Components
import { Category10Mod4PageComponent } from './pages/category10-mod4-page/category10-mod4-page.component';
import { Category10Mod4GridComponent } from './pages/category10-mod4-page/components/category10-mod4-grid/category10-mod4-grid.component';
import { Category10Mod4FormComponent } from './pages/category10-mod4-page/components/category10-mod4-form/category10-mod4-form.component';
import { Category1Mod4PageComponent } from './pages/category1-mod4-page/category1-mod4-page.component';
import { Category1Mod4GridComponent } from './pages/category1-mod4-page/components/category1-mod4-grid/category1-mod4-grid.component';
import { Category1Mod4FormComponent } from './pages/category1-mod4-page/components/category1-mod4-form/category1-mod4-form.component';
import { Category2Mod4PageComponent } from './pages/category2-mod4-page/category2-mod4-page.component';
import { Category2Mod4GridComponent } from './pages/category2-mod4-page/components/category2-mod4-grid/category2-mod4-grid.component';
import { Category2Mod4FormComponent } from './pages/category2-mod4-page/components/category2-mod4-form/category2-mod4-form.component';
import { Category3Mod4PageComponent } from './pages/category3-mod4-page/category3-mod4-page.component';
import { Category3Mod4GridComponent } from './pages/category3-mod4-page/components/category3-mod4-grid/category3-mod4-grid.component';
import { Category3Mod4FormComponent } from './pages/category3-mod4-page/components/category3-mod4-form/category3-mod4-form.component';
import { Category4Mod4PageComponent } from './pages/category4-mod4-page/category4-mod4-page.component';
import { Category4Mod4GridComponent } from './pages/category4-mod4-page/components/category4-mod4-grid/category4-mod4-grid.component';
import { Category4Mod4FormComponent } from './pages/category4-mod4-page/components/category4-mod4-form/category4-mod4-form.component';
import { Category5Mod4PageComponent } from './pages/category5-mod4-page/category5-mod4-page.component';
import { Category5Mod4GridComponent } from './pages/category5-mod4-page/components/category5-mod4-grid/category5-mod4-grid.component';
import { Category5Mod4FormComponent } from './pages/category5-mod4-page/components/category5-mod4-form/category5-mod4-form.component';
import { Category6Mod4PageComponent } from './pages/category6-mod4-page/category6-mod4-page.component';
import { Category6Mod4GridComponent } from './pages/category6-mod4-page/components/category6-mod4-grid/category6-mod4-grid.component';
import { Category6Mod4FormComponent } from './pages/category6-mod4-page/components/category6-mod4-form/category6-mod4-form.component';
import { Category7Mod4PageComponent } from './pages/category7-mod4-page/category7-mod4-page.component';
import { Category7Mod4GridComponent } from './pages/category7-mod4-page/components/category7-mod4-grid/category7-mod4-grid.component';
import { Category7Mod4FormComponent } from './pages/category7-mod4-page/components/category7-mod4-form/category7-mod4-form.component';
import { Category8Mod4PageComponent } from './pages/category8-mod4-page/category8-mod4-page.component';
import { Category8Mod4GridComponent } from './pages/category8-mod4-page/components/category8-mod4-grid/category8-mod4-grid.component';
import { Category8Mod4FormComponent } from './pages/category8-mod4-page/components/category8-mod4-form/category8-mod4-form.component';
import { Category9Mod4PageComponent } from './pages/category9-mod4-page/category9-mod4-page.component';
import { Category9Mod4GridComponent } from './pages/category9-mod4-page/components/category9-mod4-grid/category9-mod4-grid.component';
import { Category9Mod4FormComponent } from './pages/category9-mod4-page/components/category9-mod4-form/category9-mod4-form.component';
import { Issue10Mod4PageComponent } from './pages/issue10-mod4-page/issue10-mod4-page.component';
import { Issue10Mod4GridComponent } from './pages/issue10-mod4-page/components/issue10-mod4-grid/issue10-mod4-grid.component';
import { Issue10Mod4FormComponent } from './pages/issue10-mod4-page/components/issue10-mod4-form/issue10-mod4-form.component';
import { Issue1Mod4PageComponent } from './pages/issue1-mod4-page/issue1-mod4-page.component';
import { Issue1Mod4GridComponent } from './pages/issue1-mod4-page/components/issue1-mod4-grid/issue1-mod4-grid.component';
import { Issue1Mod4FormComponent } from './pages/issue1-mod4-page/components/issue1-mod4-form/issue1-mod4-form.component';
import { Issue2Mod4PageComponent } from './pages/issue2-mod4-page/issue2-mod4-page.component';
import { Issue2Mod4GridComponent } from './pages/issue2-mod4-page/components/issue2-mod4-grid/issue2-mod4-grid.component';
import { Issue2Mod4FormComponent } from './pages/issue2-mod4-page/components/issue2-mod4-form/issue2-mod4-form.component';
import { Issue3Mod4PageComponent } from './pages/issue3-mod4-page/issue3-mod4-page.component';
import { Issue3Mod4GridComponent } from './pages/issue3-mod4-page/components/issue3-mod4-grid/issue3-mod4-grid.component';
import { Issue3Mod4FormComponent } from './pages/issue3-mod4-page/components/issue3-mod4-form/issue3-mod4-form.component';
import { Issue4Mod4PageComponent } from './pages/issue4-mod4-page/issue4-mod4-page.component';
import { Issue4Mod4GridComponent } from './pages/issue4-mod4-page/components/issue4-mod4-grid/issue4-mod4-grid.component';
import { Issue4Mod4FormComponent } from './pages/issue4-mod4-page/components/issue4-mod4-form/issue4-mod4-form.component';
import { Issue5Mod4PageComponent } from './pages/issue5-mod4-page/issue5-mod4-page.component';
import { Issue5Mod4GridComponent } from './pages/issue5-mod4-page/components/issue5-mod4-grid/issue5-mod4-grid.component';
import { Issue5Mod4FormComponent } from './pages/issue5-mod4-page/components/issue5-mod4-form/issue5-mod4-form.component';
import { Issue6Mod4PageComponent } from './pages/issue6-mod4-page/issue6-mod4-page.component';
import { Issue6Mod4GridComponent } from './pages/issue6-mod4-page/components/issue6-mod4-grid/issue6-mod4-grid.component';
import { Issue6Mod4FormComponent } from './pages/issue6-mod4-page/components/issue6-mod4-form/issue6-mod4-form.component';
import { Issue7Mod4PageComponent } from './pages/issue7-mod4-page/issue7-mod4-page.component';
import { Issue7Mod4GridComponent } from './pages/issue7-mod4-page/components/issue7-mod4-grid/issue7-mod4-grid.component';
import { Issue7Mod4FormComponent } from './pages/issue7-mod4-page/components/issue7-mod4-form/issue7-mod4-form.component';
import { Issue8Mod4PageComponent } from './pages/issue8-mod4-page/issue8-mod4-page.component';
import { Issue8Mod4GridComponent } from './pages/issue8-mod4-page/components/issue8-mod4-grid/issue8-mod4-grid.component';
import { Issue8Mod4FormComponent } from './pages/issue8-mod4-page/components/issue8-mod4-form/issue8-mod4-form.component';
import { Issue9Mod4PageComponent } from './pages/issue9-mod4-page/issue9-mod4-page.component';
import { Issue9Mod4GridComponent } from './pages/issue9-mod4-page/components/issue9-mod4-grid/issue9-mod4-grid.component';
import { Issue9Mod4FormComponent } from './pages/issue9-mod4-page/components/issue9-mod4-form/issue9-mod4-form.component';
import { Project10Mod4PageComponent } from './pages/project10-mod4-page/project10-mod4-page.component';
import { Project10Mod4GridComponent } from './pages/project10-mod4-page/components/project10-mod4-grid/project10-mod4-grid.component';
import { Project10Mod4FormComponent } from './pages/project10-mod4-page/components/project10-mod4-form/project10-mod4-form.component';
import { Project1Mod4PageComponent } from './pages/project1-mod4-page/project1-mod4-page.component';
import { Project1Mod4GridComponent } from './pages/project1-mod4-page/components/project1-mod4-grid/project1-mod4-grid.component';
import { Project1Mod4FormComponent } from './pages/project1-mod4-page/components/project1-mod4-form/project1-mod4-form.component';
import { Project2Mod4PageComponent } from './pages/project2-mod4-page/project2-mod4-page.component';
import { Project2Mod4GridComponent } from './pages/project2-mod4-page/components/project2-mod4-grid/project2-mod4-grid.component';
import { Project2Mod4FormComponent } from './pages/project2-mod4-page/components/project2-mod4-form/project2-mod4-form.component';
import { Project3Mod4PageComponent } from './pages/project3-mod4-page/project3-mod4-page.component';
import { Project3Mod4GridComponent } from './pages/project3-mod4-page/components/project3-mod4-grid/project3-mod4-grid.component';
import { Project3Mod4FormComponent } from './pages/project3-mod4-page/components/project3-mod4-form/project3-mod4-form.component';
import { Project4Mod4PageComponent } from './pages/project4-mod4-page/project4-mod4-page.component';
import { Project4Mod4GridComponent } from './pages/project4-mod4-page/components/project4-mod4-grid/project4-mod4-grid.component';
import { Project4Mod4FormComponent } from './pages/project4-mod4-page/components/project4-mod4-form/project4-mod4-form.component';
import { Project5Mod4PageComponent } from './pages/project5-mod4-page/project5-mod4-page.component';
import { Project5Mod4GridComponent } from './pages/project5-mod4-page/components/project5-mod4-grid/project5-mod4-grid.component';
import { Project5Mod4FormComponent } from './pages/project5-mod4-page/components/project5-mod4-form/project5-mod4-form.component';
import { Project6Mod4PageComponent } from './pages/project6-mod4-page/project6-mod4-page.component';
import { Project6Mod4GridComponent } from './pages/project6-mod4-page/components/project6-mod4-grid/project6-mod4-grid.component';
import { Project6Mod4FormComponent } from './pages/project6-mod4-page/components/project6-mod4-form/project6-mod4-form.component';
import { Project7Mod4PageComponent } from './pages/project7-mod4-page/project7-mod4-page.component';
import { Project7Mod4GridComponent } from './pages/project7-mod4-page/components/project7-mod4-grid/project7-mod4-grid.component';
import { Project7Mod4FormComponent } from './pages/project7-mod4-page/components/project7-mod4-form/project7-mod4-form.component';
import { Project8Mod4PageComponent } from './pages/project8-mod4-page/project8-mod4-page.component';
import { Project8Mod4GridComponent } from './pages/project8-mod4-page/components/project8-mod4-grid/project8-mod4-grid.component';
import { Project8Mod4FormComponent } from './pages/project8-mod4-page/components/project8-mod4-form/project8-mod4-form.component';
import { Project9Mod4PageComponent } from './pages/project9-mod4-page/project9-mod4-page.component';
import { Project9Mod4GridComponent } from './pages/project9-mod4-page/components/project9-mod4-grid/project9-mod4-grid.component';
import { Project9Mod4FormComponent } from './pages/project9-mod4-page/components/project9-mod4-form/project9-mod4-form.component';
import { Severity10Mod4PageComponent } from './pages/severity10-mod4-page/severity10-mod4-page.component';
import { Severity10Mod4GridComponent } from './pages/severity10-mod4-page/components/severity10-mod4-grid/severity10-mod4-grid.component';
import { Severity10Mod4FormComponent } from './pages/severity10-mod4-page/components/severity10-mod4-form/severity10-mod4-form.component';
import { Severity1Mod4PageComponent } from './pages/severity1-mod4-page/severity1-mod4-page.component';
import { Severity1Mod4GridComponent } from './pages/severity1-mod4-page/components/severity1-mod4-grid/severity1-mod4-grid.component';
import { Severity1Mod4FormComponent } from './pages/severity1-mod4-page/components/severity1-mod4-form/severity1-mod4-form.component';
import { Severity2Mod4PageComponent } from './pages/severity2-mod4-page/severity2-mod4-page.component';
import { Severity2Mod4GridComponent } from './pages/severity2-mod4-page/components/severity2-mod4-grid/severity2-mod4-grid.component';
import { Severity2Mod4FormComponent } from './pages/severity2-mod4-page/components/severity2-mod4-form/severity2-mod4-form.component';
import { Severity3Mod4PageComponent } from './pages/severity3-mod4-page/severity3-mod4-page.component';
import { Severity3Mod4GridComponent } from './pages/severity3-mod4-page/components/severity3-mod4-grid/severity3-mod4-grid.component';
import { Severity3Mod4FormComponent } from './pages/severity3-mod4-page/components/severity3-mod4-form/severity3-mod4-form.component';
import { Severity4Mod4PageComponent } from './pages/severity4-mod4-page/severity4-mod4-page.component';
import { Severity4Mod4GridComponent } from './pages/severity4-mod4-page/components/severity4-mod4-grid/severity4-mod4-grid.component';
import { Severity4Mod4FormComponent } from './pages/severity4-mod4-page/components/severity4-mod4-form/severity4-mod4-form.component';
import { Severity5Mod4PageComponent } from './pages/severity5-mod4-page/severity5-mod4-page.component';
import { Severity5Mod4GridComponent } from './pages/severity5-mod4-page/components/severity5-mod4-grid/severity5-mod4-grid.component';
import { Severity5Mod4FormComponent } from './pages/severity5-mod4-page/components/severity5-mod4-form/severity5-mod4-form.component';
import { Severity6Mod4PageComponent } from './pages/severity6-mod4-page/severity6-mod4-page.component';
import { Severity6Mod4GridComponent } from './pages/severity6-mod4-page/components/severity6-mod4-grid/severity6-mod4-grid.component';
import { Severity6Mod4FormComponent } from './pages/severity6-mod4-page/components/severity6-mod4-form/severity6-mod4-form.component';
import { Severity7Mod4PageComponent } from './pages/severity7-mod4-page/severity7-mod4-page.component';
import { Severity7Mod4GridComponent } from './pages/severity7-mod4-page/components/severity7-mod4-grid/severity7-mod4-grid.component';
import { Severity7Mod4FormComponent } from './pages/severity7-mod4-page/components/severity7-mod4-form/severity7-mod4-form.component';
import { Severity8Mod4PageComponent } from './pages/severity8-mod4-page/severity8-mod4-page.component';
import { Severity8Mod4GridComponent } from './pages/severity8-mod4-page/components/severity8-mod4-grid/severity8-mod4-grid.component';
import { Severity8Mod4FormComponent } from './pages/severity8-mod4-page/components/severity8-mod4-form/severity8-mod4-form.component';
import { Severity9Mod4PageComponent } from './pages/severity9-mod4-page/severity9-mod4-page.component';
import { Severity9Mod4GridComponent } from './pages/severity9-mod4-page/components/severity9-mod4-grid/severity9-mod4-grid.component';
import { Severity9Mod4FormComponent } from './pages/severity9-mod4-page/components/severity9-mod4-form/severity9-mod4-form.component';
import { Status10Mod4PageComponent } from './pages/status10-mod4-page/status10-mod4-page.component';
import { Status10Mod4GridComponent } from './pages/status10-mod4-page/components/status10-mod4-grid/status10-mod4-grid.component';
import { Status10Mod4FormComponent } from './pages/status10-mod4-page/components/status10-mod4-form/status10-mod4-form.component';
import { Status1Mod4PageComponent } from './pages/status1-mod4-page/status1-mod4-page.component';
import { Status1Mod4GridComponent } from './pages/status1-mod4-page/components/status1-mod4-grid/status1-mod4-grid.component';
import { Status1Mod4FormComponent } from './pages/status1-mod4-page/components/status1-mod4-form/status1-mod4-form.component';
import { Status2Mod4PageComponent } from './pages/status2-mod4-page/status2-mod4-page.component';
import { Status2Mod4GridComponent } from './pages/status2-mod4-page/components/status2-mod4-grid/status2-mod4-grid.component';
import { Status2Mod4FormComponent } from './pages/status2-mod4-page/components/status2-mod4-form/status2-mod4-form.component';
import { Status3Mod4PageComponent } from './pages/status3-mod4-page/status3-mod4-page.component';
import { Status3Mod4GridComponent } from './pages/status3-mod4-page/components/status3-mod4-grid/status3-mod4-grid.component';
import { Status3Mod4FormComponent } from './pages/status3-mod4-page/components/status3-mod4-form/status3-mod4-form.component';
import { Status4Mod4PageComponent } from './pages/status4-mod4-page/status4-mod4-page.component';
import { Status4Mod4GridComponent } from './pages/status4-mod4-page/components/status4-mod4-grid/status4-mod4-grid.component';
import { Status4Mod4FormComponent } from './pages/status4-mod4-page/components/status4-mod4-form/status4-mod4-form.component';
import { Status5Mod4PageComponent } from './pages/status5-mod4-page/status5-mod4-page.component';
import { Status5Mod4GridComponent } from './pages/status5-mod4-page/components/status5-mod4-grid/status5-mod4-grid.component';
import { Status5Mod4FormComponent } from './pages/status5-mod4-page/components/status5-mod4-form/status5-mod4-form.component';
import { Status6Mod4PageComponent } from './pages/status6-mod4-page/status6-mod4-page.component';
import { Status6Mod4GridComponent } from './pages/status6-mod4-page/components/status6-mod4-grid/status6-mod4-grid.component';
import { Status6Mod4FormComponent } from './pages/status6-mod4-page/components/status6-mod4-form/status6-mod4-form.component';
import { Status7Mod4PageComponent } from './pages/status7-mod4-page/status7-mod4-page.component';
import { Status7Mod4GridComponent } from './pages/status7-mod4-page/components/status7-mod4-grid/status7-mod4-grid.component';
import { Status7Mod4FormComponent } from './pages/status7-mod4-page/components/status7-mod4-form/status7-mod4-form.component';
import { Status8Mod4PageComponent } from './pages/status8-mod4-page/status8-mod4-page.component';
import { Status8Mod4GridComponent } from './pages/status8-mod4-page/components/status8-mod4-grid/status8-mod4-grid.component';
import { Status8Mod4FormComponent } from './pages/status8-mod4-page/components/status8-mod4-form/status8-mod4-form.component';
import { Status9Mod4PageComponent } from './pages/status9-mod4-page/status9-mod4-page.component';
import { Status9Mod4GridComponent } from './pages/status9-mod4-page/components/status9-mod4-grid/status9-mod4-grid.component';
import { Status9Mod4FormComponent } from './pages/status9-mod4-page/components/status9-mod4-form/status9-mod4-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod4RoutingModule,
  ],
  declarations: [
    Category10Mod4PageComponent,
    Category10Mod4GridComponent,
    Category10Mod4FormComponent,
    Category1Mod4PageComponent,
    Category1Mod4GridComponent,
    Category1Mod4FormComponent,
    Category2Mod4PageComponent,
    Category2Mod4GridComponent,
    Category2Mod4FormComponent,
    Category3Mod4PageComponent,
    Category3Mod4GridComponent,
    Category3Mod4FormComponent,
    Category4Mod4PageComponent,
    Category4Mod4GridComponent,
    Category4Mod4FormComponent,
    Category5Mod4PageComponent,
    Category5Mod4GridComponent,
    Category5Mod4FormComponent,
    Category6Mod4PageComponent,
    Category6Mod4GridComponent,
    Category6Mod4FormComponent,
    Category7Mod4PageComponent,
    Category7Mod4GridComponent,
    Category7Mod4FormComponent,
    Category8Mod4PageComponent,
    Category8Mod4GridComponent,
    Category8Mod4FormComponent,
    Category9Mod4PageComponent,
    Category9Mod4GridComponent,
    Category9Mod4FormComponent,
    Issue10Mod4PageComponent,
    Issue10Mod4GridComponent,
    Issue10Mod4FormComponent,
    Issue1Mod4PageComponent,
    Issue1Mod4GridComponent,
    Issue1Mod4FormComponent,
    Issue2Mod4PageComponent,
    Issue2Mod4GridComponent,
    Issue2Mod4FormComponent,
    Issue3Mod4PageComponent,
    Issue3Mod4GridComponent,
    Issue3Mod4FormComponent,
    Issue4Mod4PageComponent,
    Issue4Mod4GridComponent,
    Issue4Mod4FormComponent,
    Issue5Mod4PageComponent,
    Issue5Mod4GridComponent,
    Issue5Mod4FormComponent,
    Issue6Mod4PageComponent,
    Issue6Mod4GridComponent,
    Issue6Mod4FormComponent,
    Issue7Mod4PageComponent,
    Issue7Mod4GridComponent,
    Issue7Mod4FormComponent,
    Issue8Mod4PageComponent,
    Issue8Mod4GridComponent,
    Issue8Mod4FormComponent,
    Issue9Mod4PageComponent,
    Issue9Mod4GridComponent,
    Issue9Mod4FormComponent,
    Project10Mod4PageComponent,
    Project10Mod4GridComponent,
    Project10Mod4FormComponent,
    Project1Mod4PageComponent,
    Project1Mod4GridComponent,
    Project1Mod4FormComponent,
    Project2Mod4PageComponent,
    Project2Mod4GridComponent,
    Project2Mod4FormComponent,
    Project3Mod4PageComponent,
    Project3Mod4GridComponent,
    Project3Mod4FormComponent,
    Project4Mod4PageComponent,
    Project4Mod4GridComponent,
    Project4Mod4FormComponent,
    Project5Mod4PageComponent,
    Project5Mod4GridComponent,
    Project5Mod4FormComponent,
    Project6Mod4PageComponent,
    Project6Mod4GridComponent,
    Project6Mod4FormComponent,
    Project7Mod4PageComponent,
    Project7Mod4GridComponent,
    Project7Mod4FormComponent,
    Project8Mod4PageComponent,
    Project8Mod4GridComponent,
    Project8Mod4FormComponent,
    Project9Mod4PageComponent,
    Project9Mod4GridComponent,
    Project9Mod4FormComponent,
    Severity10Mod4PageComponent,
    Severity10Mod4GridComponent,
    Severity10Mod4FormComponent,
    Severity1Mod4PageComponent,
    Severity1Mod4GridComponent,
    Severity1Mod4FormComponent,
    Severity2Mod4PageComponent,
    Severity2Mod4GridComponent,
    Severity2Mod4FormComponent,
    Severity3Mod4PageComponent,
    Severity3Mod4GridComponent,
    Severity3Mod4FormComponent,
    Severity4Mod4PageComponent,
    Severity4Mod4GridComponent,
    Severity4Mod4FormComponent,
    Severity5Mod4PageComponent,
    Severity5Mod4GridComponent,
    Severity5Mod4FormComponent,
    Severity6Mod4PageComponent,
    Severity6Mod4GridComponent,
    Severity6Mod4FormComponent,
    Severity7Mod4PageComponent,
    Severity7Mod4GridComponent,
    Severity7Mod4FormComponent,
    Severity8Mod4PageComponent,
    Severity8Mod4GridComponent,
    Severity8Mod4FormComponent,
    Severity9Mod4PageComponent,
    Severity9Mod4GridComponent,
    Severity9Mod4FormComponent,
    Status10Mod4PageComponent,
    Status10Mod4GridComponent,
    Status10Mod4FormComponent,
    Status1Mod4PageComponent,
    Status1Mod4GridComponent,
    Status1Mod4FormComponent,
    Status2Mod4PageComponent,
    Status2Mod4GridComponent,
    Status2Mod4FormComponent,
    Status3Mod4PageComponent,
    Status3Mod4GridComponent,
    Status3Mod4FormComponent,
    Status4Mod4PageComponent,
    Status4Mod4GridComponent,
    Status4Mod4FormComponent,
    Status5Mod4PageComponent,
    Status5Mod4GridComponent,
    Status5Mod4FormComponent,
    Status6Mod4PageComponent,
    Status6Mod4GridComponent,
    Status6Mod4FormComponent,
    Status7Mod4PageComponent,
    Status7Mod4GridComponent,
    Status7Mod4FormComponent,
    Status8Mod4PageComponent,
    Status8Mod4GridComponent,
    Status8Mod4FormComponent,
    Status9Mod4PageComponent,
    Status9Mod4GridComponent,
    Status9Mod4FormComponent,
  ],
  exports: [
  ]
})
export class Mod4Module { }
