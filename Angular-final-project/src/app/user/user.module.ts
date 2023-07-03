import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../shared/about/about.component';
import { DoctorComponent } from './doctor/doctor.component';
//import { ServiceComponent } from '../shared/service/service.component';
import { MaterialModule } from '../material/material.module';
import { MedserviceComponent } from './medservice/medservice.component';
import { MedserviceBoxComponent } from './medservice/medservice-box/medservice-box.component';
import { MedserviceDetailComponent } from './medservice/medservice-detail/medservice-detail.component';
import { DoctorBoxComponent } from './doctor/doctor-box/doctor-box.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  
  children: [
    {
      path: "",
      component: AboutComponent
    },
    {
      path:"about",
      component: AboutComponent
    },
    {
      path:"service",
      component: MedserviceComponent
    },
    {
      path:"doctor",
      component: DoctorComponent
    }

  ]


}

]

@NgModule({
  declarations: [
    HomeComponent,
    DoctorComponent,
    MedserviceComponent,
    MedserviceBoxComponent,
    MedserviceDetailComponent,
    DoctorBoxComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    MaterialModule

    ]
})
export class UserModule { }
