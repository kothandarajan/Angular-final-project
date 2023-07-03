import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { DoctorFilterPipe } from './pipes/doctor-filter.pipe';





@NgModule({
  declarations: [
    MenuOutlineComponent,
    DoctorFilterPipe,
    AboutComponent
 
  ],
  
  imports: [
    CommonModule,
    FormsModule
 
  ],

  exports : [MenuOutlineComponent,DoctorFilterPipe]
})
export class SharedModule { }
