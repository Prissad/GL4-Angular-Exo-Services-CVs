import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CvComponentComponent} from './ex-cv/cv-component/cv-component.component';

const routes: Routes = [
  {
    path:'',
    component: CvComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
