import { Component } from '@angular/core';
import { doctor } from 'src/app/Models/Models';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor( private ds: DoctorService) {}

  doctors: doctor[] = [];

  
  types :string[]= [
    "General Practitioner",
    "Obstetrics and Gynecology",
    "Cardiology",
    "Neurology",
    "Family medicine",
    "All"
] ;

  selected : string = "All" 
  selectedname : string = "" 
  selectedgender : string = "Female"
  
  doctorlistform:boolean=true;

  
  toggle(){
    this.doctorlistform=this.doctorlistform?false:true;
 }
  

  ngOnInit(): void {

    this.ds.getDoctors().subscribe(

      {
        next: (data: doctor[]) => this.doctors = data,
        error: (error: any) => this.doctors = []
      }

    )

  }



}
