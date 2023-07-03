import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorNewComponent } from './doctor/doctor-new/doctor-new.component';
import { DoctorBoxComponent } from './doctor/doctor-box/doctor-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { MedserviceComponent } from './medservice/medservice.component';
import { MedserviceDetailComponent } from './medservice/medservice-detail/medservice-detail.component';
import { MedserviceBoxComponent } from './medservice/medservice-box/medservice-box.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AboutComponent } from '../shared/about/about.component';
import { ttToggleDirective } from '../shared/directives/tt-toggle.directive';
import { MedserviceNewComponent } from './medservice/medservice-new/medservice-new.component';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,

  children: [
    {
      path:"",
      component: AboutComponent
    },
    {
      path:"service",
      component: MedserviceComponent
     
    },
    {
      path:"doctor",
      component: DoctorComponent
    },
    {
      path:"details",
      component: MedserviceDetailComponent
    }

  ]



}]


@NgModule({
  declarations: [
    HomeComponent,
    DoctorComponent,
    DoctorNewComponent,
    DoctorBoxComponent,
    DoctorBoxComponent,
    MedserviceComponent,
    MedserviceBoxComponent,
    ttToggleDirective,
    MedserviceDetailComponent,
    MedserviceNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    /*
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    */
    RouterModule.forChild(route)
  ],

  exports :[ReactiveFormsModule ]
})
export class AdminModule { }
