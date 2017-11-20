import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Mod5RoutingModule } from './mod5-routing.module';

// Components
import { Category10Mod5PageComponent } from './pages/category10-mod5-page/category10-mod5-page.component';
import { Category10Mod5GridComponent } from './pages/category10-mod5-page/components/category10-mod5-grid/category10-mod5-grid.component';
import { Category10Mod5FormComponent } from './pages/category10-mod5-page/components/category10-mod5-form/category10-mod5-form.component';
import { Category1Mod5PageComponent } from './pages/category1-mod5-page/category1-mod5-page.component';
import { Category1Mod5GridComponent } from './pages/category1-mod5-page/components/category1-mod5-grid/category1-mod5-grid.component';
import { Category1Mod5FormComponent } from './pages/category1-mod5-page/components/category1-mod5-form/category1-mod5-form.component';
import { Category2Mod5PageComponent } from './pages/category2-mod5-page/category2-mod5-page.component';
import { Category2Mod5GridComponent } from './pages/category2-mod5-page/components/category2-mod5-grid/category2-mod5-grid.component';
import { Category2Mod5FormComponent } from './pages/category2-mod5-page/components/category2-mod5-form/category2-mod5-form.component';
import { Category3Mod5PageComponent } from './pages/category3-mod5-page/category3-mod5-page.component';
import { Category3Mod5GridComponent } from './pages/category3-mod5-page/components/category3-mod5-grid/category3-mod5-grid.component';
import { Category3Mod5FormComponent } from './pages/category3-mod5-page/components/category3-mod5-form/category3-mod5-form.component';
import { Category4Mod5PageComponent } from './pages/category4-mod5-page/category4-mod5-page.component';
import { Category4Mod5GridComponent } from './pages/category4-mod5-page/components/category4-mod5-grid/category4-mod5-grid.component';
import { Category4Mod5FormComponent } from './pages/category4-mod5-page/components/category4-mod5-form/category4-mod5-form.component';
import { Category5Mod5PageComponent } from './pages/category5-mod5-page/category5-mod5-page.component';
import { Category5Mod5GridComponent } from './pages/category5-mod5-page/components/category5-mod5-grid/category5-mod5-grid.component';
import { Category5Mod5FormComponent } from './pages/category5-mod5-page/components/category5-mod5-form/category5-mod5-form.component';
import { Category6Mod5PageComponent } from './pages/category6-mod5-page/category6-mod5-page.component';
import { Category6Mod5GridComponent } from './pages/category6-mod5-page/components/category6-mod5-grid/category6-mod5-grid.component';
import { Category6Mod5FormComponent } from './pages/category6-mod5-page/components/category6-mod5-form/category6-mod5-form.component';
import { Category7Mod5PageComponent } from './pages/category7-mod5-page/category7-mod5-page.component';
import { Category7Mod5GridComponent } from './pages/category7-mod5-page/components/category7-mod5-grid/category7-mod5-grid.component';
import { Category7Mod5FormComponent } from './pages/category7-mod5-page/components/category7-mod5-form/category7-mod5-form.component';
import { Category8Mod5PageComponent } from './pages/category8-mod5-page/category8-mod5-page.component';
import { Category8Mod5GridComponent } from './pages/category8-mod5-page/components/category8-mod5-grid/category8-mod5-grid.component';
import { Category8Mod5FormComponent } from './pages/category8-mod5-page/components/category8-mod5-form/category8-mod5-form.component';
import { Category9Mod5PageComponent } from './pages/category9-mod5-page/category9-mod5-page.component';
import { Category9Mod5GridComponent } from './pages/category9-mod5-page/components/category9-mod5-grid/category9-mod5-grid.component';
import { Category9Mod5FormComponent } from './pages/category9-mod5-page/components/category9-mod5-form/category9-mod5-form.component';
import { Issue10Mod5PageComponent } from './pages/issue10-mod5-page/issue10-mod5-page.component';
import { Issue10Mod5GridComponent } from './pages/issue10-mod5-page/components/issue10-mod5-grid/issue10-mod5-grid.component';
import { Issue10Mod5FormComponent } from './pages/issue10-mod5-page/components/issue10-mod5-form/issue10-mod5-form.component';
import { Issue1Mod5PageComponent } from './pages/issue1-mod5-page/issue1-mod5-page.component';
import { Issue1Mod5GridComponent } from './pages/issue1-mod5-page/components/issue1-mod5-grid/issue1-mod5-grid.component';
import { Issue1Mod5FormComponent } from './pages/issue1-mod5-page/components/issue1-mod5-form/issue1-mod5-form.component';
import { Issue2Mod5PageComponent } from './pages/issue2-mod5-page/issue2-mod5-page.component';
import { Issue2Mod5GridComponent } from './pages/issue2-mod5-page/components/issue2-mod5-grid/issue2-mod5-grid.component';
import { Issue2Mod5FormComponent } from './pages/issue2-mod5-page/components/issue2-mod5-form/issue2-mod5-form.component';
import { Issue3Mod5PageComponent } from './pages/issue3-mod5-page/issue3-mod5-page.component';
import { Issue3Mod5GridComponent } from './pages/issue3-mod5-page/components/issue3-mod5-grid/issue3-mod5-grid.component';
import { Issue3Mod5FormComponent } from './pages/issue3-mod5-page/components/issue3-mod5-form/issue3-mod5-form.component';
import { Issue4Mod5PageComponent } from './pages/issue4-mod5-page/issue4-mod5-page.component';
import { Issue4Mod5GridComponent } from './pages/issue4-mod5-page/components/issue4-mod5-grid/issue4-mod5-grid.component';
import { Issue4Mod5FormComponent } from './pages/issue4-mod5-page/components/issue4-mod5-form/issue4-mod5-form.component';
import { Issue5Mod5PageComponent } from './pages/issue5-mod5-page/issue5-mod5-page.component';
import { Issue5Mod5GridComponent } from './pages/issue5-mod5-page/components/issue5-mod5-grid/issue5-mod5-grid.component';
import { Issue5Mod5FormComponent } from './pages/issue5-mod5-page/components/issue5-mod5-form/issue5-mod5-form.component';
import { Issue6Mod5PageComponent } from './pages/issue6-mod5-page/issue6-mod5-page.component';
import { Issue6Mod5GridComponent } from './pages/issue6-mod5-page/components/issue6-mod5-grid/issue6-mod5-grid.component';
import { Issue6Mod5FormComponent } from './pages/issue6-mod5-page/components/issue6-mod5-form/issue6-mod5-form.component';
import { Issue7Mod5PageComponent } from './pages/issue7-mod5-page/issue7-mod5-page.component';
import { Issue7Mod5GridComponent } from './pages/issue7-mod5-page/components/issue7-mod5-grid/issue7-mod5-grid.component';
import { Issue7Mod5FormComponent } from './pages/issue7-mod5-page/components/issue7-mod5-form/issue7-mod5-form.component';
import { Issue8Mod5PageComponent } from './pages/issue8-mod5-page/issue8-mod5-page.component';
import { Issue8Mod5GridComponent } from './pages/issue8-mod5-page/components/issue8-mod5-grid/issue8-mod5-grid.component';
import { Issue8Mod5FormComponent } from './pages/issue8-mod5-page/components/issue8-mod5-form/issue8-mod5-form.component';
import { Issue9Mod5PageComponent } from './pages/issue9-mod5-page/issue9-mod5-page.component';
import { Issue9Mod5GridComponent } from './pages/issue9-mod5-page/components/issue9-mod5-grid/issue9-mod5-grid.component';
import { Issue9Mod5FormComponent } from './pages/issue9-mod5-page/components/issue9-mod5-form/issue9-mod5-form.component';
import { Project10Mod5PageComponent } from './pages/project10-mod5-page/project10-mod5-page.component';
import { Project10Mod5GridComponent } from './pages/project10-mod5-page/components/project10-mod5-grid/project10-mod5-grid.component';
import { Project10Mod5FormComponent } from './pages/project10-mod5-page/components/project10-mod5-form/project10-mod5-form.component';
import { Project1Mod5PageComponent } from './pages/project1-mod5-page/project1-mod5-page.component';
import { Project1Mod5GridComponent } from './pages/project1-mod5-page/components/project1-mod5-grid/project1-mod5-grid.component';
import { Project1Mod5FormComponent } from './pages/project1-mod5-page/components/project1-mod5-form/project1-mod5-form.component';
import { Project2Mod5PageComponent } from './pages/project2-mod5-page/project2-mod5-page.component';
import { Project2Mod5GridComponent } from './pages/project2-mod5-page/components/project2-mod5-grid/project2-mod5-grid.component';
import { Project2Mod5FormComponent } from './pages/project2-mod5-page/components/project2-mod5-form/project2-mod5-form.component';
import { Project3Mod5PageComponent } from './pages/project3-mod5-page/project3-mod5-page.component';
import { Project3Mod5GridComponent } from './pages/project3-mod5-page/components/project3-mod5-grid/project3-mod5-grid.component';
import { Project3Mod5FormComponent } from './pages/project3-mod5-page/components/project3-mod5-form/project3-mod5-form.component';
import { Project4Mod5PageComponent } from './pages/project4-mod5-page/project4-mod5-page.component';
import { Project4Mod5GridComponent } from './pages/project4-mod5-page/components/project4-mod5-grid/project4-mod5-grid.component';
import { Project4Mod5FormComponent } from './pages/project4-mod5-page/components/project4-mod5-form/project4-mod5-form.component';
import { Project5Mod5PageComponent } from './pages/project5-mod5-page/project5-mod5-page.component';
import { Project5Mod5GridComponent } from './pages/project5-mod5-page/components/project5-mod5-grid/project5-mod5-grid.component';
import { Project5Mod5FormComponent } from './pages/project5-mod5-page/components/project5-mod5-form/project5-mod5-form.component';
import { Project6Mod5PageComponent } from './pages/project6-mod5-page/project6-mod5-page.component';
import { Project6Mod5GridComponent } from './pages/project6-mod5-page/components/project6-mod5-grid/project6-mod5-grid.component';
import { Project6Mod5FormComponent } from './pages/project6-mod5-page/components/project6-mod5-form/project6-mod5-form.component';
import { Project7Mod5PageComponent } from './pages/project7-mod5-page/project7-mod5-page.component';
import { Project7Mod5GridComponent } from './pages/project7-mod5-page/components/project7-mod5-grid/project7-mod5-grid.component';
import { Project7Mod5FormComponent } from './pages/project7-mod5-page/components/project7-mod5-form/project7-mod5-form.component';
import { Project8Mod5PageComponent } from './pages/project8-mod5-page/project8-mod5-page.component';
import { Project8Mod5GridComponent } from './pages/project8-mod5-page/components/project8-mod5-grid/project8-mod5-grid.component';
import { Project8Mod5FormComponent } from './pages/project8-mod5-page/components/project8-mod5-form/project8-mod5-form.component';
import { Project9Mod5PageComponent } from './pages/project9-mod5-page/project9-mod5-page.component';
import { Project9Mod5GridComponent } from './pages/project9-mod5-page/components/project9-mod5-grid/project9-mod5-grid.component';
import { Project9Mod5FormComponent } from './pages/project9-mod5-page/components/project9-mod5-form/project9-mod5-form.component';
import { Severity10Mod5PageComponent } from './pages/severity10-mod5-page/severity10-mod5-page.component';
import { Severity10Mod5GridComponent } from './pages/severity10-mod5-page/components/severity10-mod5-grid/severity10-mod5-grid.component';
import { Severity10Mod5FormComponent } from './pages/severity10-mod5-page/components/severity10-mod5-form/severity10-mod5-form.component';
import { Severity1Mod5PageComponent } from './pages/severity1-mod5-page/severity1-mod5-page.component';
import { Severity1Mod5GridComponent } from './pages/severity1-mod5-page/components/severity1-mod5-grid/severity1-mod5-grid.component';
import { Severity1Mod5FormComponent } from './pages/severity1-mod5-page/components/severity1-mod5-form/severity1-mod5-form.component';
import { Severity2Mod5PageComponent } from './pages/severity2-mod5-page/severity2-mod5-page.component';
import { Severity2Mod5GridComponent } from './pages/severity2-mod5-page/components/severity2-mod5-grid/severity2-mod5-grid.component';
import { Severity2Mod5FormComponent } from './pages/severity2-mod5-page/components/severity2-mod5-form/severity2-mod5-form.component';
import { Severity3Mod5PageComponent } from './pages/severity3-mod5-page/severity3-mod5-page.component';
import { Severity3Mod5GridComponent } from './pages/severity3-mod5-page/components/severity3-mod5-grid/severity3-mod5-grid.component';
import { Severity3Mod5FormComponent } from './pages/severity3-mod5-page/components/severity3-mod5-form/severity3-mod5-form.component';
import { Severity4Mod5PageComponent } from './pages/severity4-mod5-page/severity4-mod5-page.component';
import { Severity4Mod5GridComponent } from './pages/severity4-mod5-page/components/severity4-mod5-grid/severity4-mod5-grid.component';
import { Severity4Mod5FormComponent } from './pages/severity4-mod5-page/components/severity4-mod5-form/severity4-mod5-form.component';
import { Severity5Mod5PageComponent } from './pages/severity5-mod5-page/severity5-mod5-page.component';
import { Severity5Mod5GridComponent } from './pages/severity5-mod5-page/components/severity5-mod5-grid/severity5-mod5-grid.component';
import { Severity5Mod5FormComponent } from './pages/severity5-mod5-page/components/severity5-mod5-form/severity5-mod5-form.component';
import { Severity6Mod5PageComponent } from './pages/severity6-mod5-page/severity6-mod5-page.component';
import { Severity6Mod5GridComponent } from './pages/severity6-mod5-page/components/severity6-mod5-grid/severity6-mod5-grid.component';
import { Severity6Mod5FormComponent } from './pages/severity6-mod5-page/components/severity6-mod5-form/severity6-mod5-form.component';
import { Severity7Mod5PageComponent } from './pages/severity7-mod5-page/severity7-mod5-page.component';
import { Severity7Mod5GridComponent } from './pages/severity7-mod5-page/components/severity7-mod5-grid/severity7-mod5-grid.component';
import { Severity7Mod5FormComponent } from './pages/severity7-mod5-page/components/severity7-mod5-form/severity7-mod5-form.component';
import { Severity8Mod5PageComponent } from './pages/severity8-mod5-page/severity8-mod5-page.component';
import { Severity8Mod5GridComponent } from './pages/severity8-mod5-page/components/severity8-mod5-grid/severity8-mod5-grid.component';
import { Severity8Mod5FormComponent } from './pages/severity8-mod5-page/components/severity8-mod5-form/severity8-mod5-form.component';
import { Severity9Mod5PageComponent } from './pages/severity9-mod5-page/severity9-mod5-page.component';
import { Severity9Mod5GridComponent } from './pages/severity9-mod5-page/components/severity9-mod5-grid/severity9-mod5-grid.component';
import { Severity9Mod5FormComponent } from './pages/severity9-mod5-page/components/severity9-mod5-form/severity9-mod5-form.component';
import { Status10Mod5PageComponent } from './pages/status10-mod5-page/status10-mod5-page.component';
import { Status10Mod5GridComponent } from './pages/status10-mod5-page/components/status10-mod5-grid/status10-mod5-grid.component';
import { Status10Mod5FormComponent } from './pages/status10-mod5-page/components/status10-mod5-form/status10-mod5-form.component';
import { Status1Mod5PageComponent } from './pages/status1-mod5-page/status1-mod5-page.component';
import { Status1Mod5GridComponent } from './pages/status1-mod5-page/components/status1-mod5-grid/status1-mod5-grid.component';
import { Status1Mod5FormComponent } from './pages/status1-mod5-page/components/status1-mod5-form/status1-mod5-form.component';
import { Status2Mod5PageComponent } from './pages/status2-mod5-page/status2-mod5-page.component';
import { Status2Mod5GridComponent } from './pages/status2-mod5-page/components/status2-mod5-grid/status2-mod5-grid.component';
import { Status2Mod5FormComponent } from './pages/status2-mod5-page/components/status2-mod5-form/status2-mod5-form.component';
import { Status3Mod5PageComponent } from './pages/status3-mod5-page/status3-mod5-page.component';
import { Status3Mod5GridComponent } from './pages/status3-mod5-page/components/status3-mod5-grid/status3-mod5-grid.component';
import { Status3Mod5FormComponent } from './pages/status3-mod5-page/components/status3-mod5-form/status3-mod5-form.component';
import { Status4Mod5PageComponent } from './pages/status4-mod5-page/status4-mod5-page.component';
import { Status4Mod5GridComponent } from './pages/status4-mod5-page/components/status4-mod5-grid/status4-mod5-grid.component';
import { Status4Mod5FormComponent } from './pages/status4-mod5-page/components/status4-mod5-form/status4-mod5-form.component';
import { Status5Mod5PageComponent } from './pages/status5-mod5-page/status5-mod5-page.component';
import { Status5Mod5GridComponent } from './pages/status5-mod5-page/components/status5-mod5-grid/status5-mod5-grid.component';
import { Status5Mod5FormComponent } from './pages/status5-mod5-page/components/status5-mod5-form/status5-mod5-form.component';
import { Status6Mod5PageComponent } from './pages/status6-mod5-page/status6-mod5-page.component';
import { Status6Mod5GridComponent } from './pages/status6-mod5-page/components/status6-mod5-grid/status6-mod5-grid.component';
import { Status6Mod5FormComponent } from './pages/status6-mod5-page/components/status6-mod5-form/status6-mod5-form.component';
import { Status7Mod5PageComponent } from './pages/status7-mod5-page/status7-mod5-page.component';
import { Status7Mod5GridComponent } from './pages/status7-mod5-page/components/status7-mod5-grid/status7-mod5-grid.component';
import { Status7Mod5FormComponent } from './pages/status7-mod5-page/components/status7-mod5-form/status7-mod5-form.component';
import { Status8Mod5PageComponent } from './pages/status8-mod5-page/status8-mod5-page.component';
import { Status8Mod5GridComponent } from './pages/status8-mod5-page/components/status8-mod5-grid/status8-mod5-grid.component';
import { Status8Mod5FormComponent } from './pages/status8-mod5-page/components/status8-mod5-form/status8-mod5-form.component';
import { Status9Mod5PageComponent } from './pages/status9-mod5-page/status9-mod5-page.component';
import { Status9Mod5GridComponent } from './pages/status9-mod5-page/components/status9-mod5-grid/status9-mod5-grid.component';
import { Status9Mod5FormComponent } from './pages/status9-mod5-page/components/status9-mod5-form/status9-mod5-form.component';

@NgModule({
  imports: [
    SharedModule,
    Mod5RoutingModule,
  ],
  declarations: [
    Category10Mod5PageComponent,
    Category10Mod5GridComponent,
    Category10Mod5FormComponent,
    Category1Mod5PageComponent,
    Category1Mod5GridComponent,
    Category1Mod5FormComponent,
    Category2Mod5PageComponent,
    Category2Mod5GridComponent,
    Category2Mod5FormComponent,
    Category3Mod5PageComponent,
    Category3Mod5GridComponent,
    Category3Mod5FormComponent,
    Category4Mod5PageComponent,
    Category4Mod5GridComponent,
    Category4Mod5FormComponent,
    Category5Mod5PageComponent,
    Category5Mod5GridComponent,
    Category5Mod5FormComponent,
    Category6Mod5PageComponent,
    Category6Mod5GridComponent,
    Category6Mod5FormComponent,
    Category7Mod5PageComponent,
    Category7Mod5GridComponent,
    Category7Mod5FormComponent,
    Category8Mod5PageComponent,
    Category8Mod5GridComponent,
    Category8Mod5FormComponent,
    Category9Mod5PageComponent,
    Category9Mod5GridComponent,
    Category9Mod5FormComponent,
    Issue10Mod5PageComponent,
    Issue10Mod5GridComponent,
    Issue10Mod5FormComponent,
    Issue1Mod5PageComponent,
    Issue1Mod5GridComponent,
    Issue1Mod5FormComponent,
    Issue2Mod5PageComponent,
    Issue2Mod5GridComponent,
    Issue2Mod5FormComponent,
    Issue3Mod5PageComponent,
    Issue3Mod5GridComponent,
    Issue3Mod5FormComponent,
    Issue4Mod5PageComponent,
    Issue4Mod5GridComponent,
    Issue4Mod5FormComponent,
    Issue5Mod5PageComponent,
    Issue5Mod5GridComponent,
    Issue5Mod5FormComponent,
    Issue6Mod5PageComponent,
    Issue6Mod5GridComponent,
    Issue6Mod5FormComponent,
    Issue7Mod5PageComponent,
    Issue7Mod5GridComponent,
    Issue7Mod5FormComponent,
    Issue8Mod5PageComponent,
    Issue8Mod5GridComponent,
    Issue8Mod5FormComponent,
    Issue9Mod5PageComponent,
    Issue9Mod5GridComponent,
    Issue9Mod5FormComponent,
    Project10Mod5PageComponent,
    Project10Mod5GridComponent,
    Project10Mod5FormComponent,
    Project1Mod5PageComponent,
    Project1Mod5GridComponent,
    Project1Mod5FormComponent,
    Project2Mod5PageComponent,
    Project2Mod5GridComponent,
    Project2Mod5FormComponent,
    Project3Mod5PageComponent,
    Project3Mod5GridComponent,
    Project3Mod5FormComponent,
    Project4Mod5PageComponent,
    Project4Mod5GridComponent,
    Project4Mod5FormComponent,
    Project5Mod5PageComponent,
    Project5Mod5GridComponent,
    Project5Mod5FormComponent,
    Project6Mod5PageComponent,
    Project6Mod5GridComponent,
    Project6Mod5FormComponent,
    Project7Mod5PageComponent,
    Project7Mod5GridComponent,
    Project7Mod5FormComponent,
    Project8Mod5PageComponent,
    Project8Mod5GridComponent,
    Project8Mod5FormComponent,
    Project9Mod5PageComponent,
    Project9Mod5GridComponent,
    Project9Mod5FormComponent,
    Severity10Mod5PageComponent,
    Severity10Mod5GridComponent,
    Severity10Mod5FormComponent,
    Severity1Mod5PageComponent,
    Severity1Mod5GridComponent,
    Severity1Mod5FormComponent,
    Severity2Mod5PageComponent,
    Severity2Mod5GridComponent,
    Severity2Mod5FormComponent,
    Severity3Mod5PageComponent,
    Severity3Mod5GridComponent,
    Severity3Mod5FormComponent,
    Severity4Mod5PageComponent,
    Severity4Mod5GridComponent,
    Severity4Mod5FormComponent,
    Severity5Mod5PageComponent,
    Severity5Mod5GridComponent,
    Severity5Mod5FormComponent,
    Severity6Mod5PageComponent,
    Severity6Mod5GridComponent,
    Severity6Mod5FormComponent,
    Severity7Mod5PageComponent,
    Severity7Mod5GridComponent,
    Severity7Mod5FormComponent,
    Severity8Mod5PageComponent,
    Severity8Mod5GridComponent,
    Severity8Mod5FormComponent,
    Severity9Mod5PageComponent,
    Severity9Mod5GridComponent,
    Severity9Mod5FormComponent,
    Status10Mod5PageComponent,
    Status10Mod5GridComponent,
    Status10Mod5FormComponent,
    Status1Mod5PageComponent,
    Status1Mod5GridComponent,
    Status1Mod5FormComponent,
    Status2Mod5PageComponent,
    Status2Mod5GridComponent,
    Status2Mod5FormComponent,
    Status3Mod5PageComponent,
    Status3Mod5GridComponent,
    Status3Mod5FormComponent,
    Status4Mod5PageComponent,
    Status4Mod5GridComponent,
    Status4Mod5FormComponent,
    Status5Mod5PageComponent,
    Status5Mod5GridComponent,
    Status5Mod5FormComponent,
    Status6Mod5PageComponent,
    Status6Mod5GridComponent,
    Status6Mod5FormComponent,
    Status7Mod5PageComponent,
    Status7Mod5GridComponent,
    Status7Mod5FormComponent,
    Status8Mod5PageComponent,
    Status8Mod5GridComponent,
    Status8Mod5FormComponent,
    Status9Mod5PageComponent,
    Status9Mod5GridComponent,
    Status9Mod5FormComponent,
  ],
  exports: [
  ]
})
export class Mod5Module { }
