import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-new',
  templateUrl: './doctor-new.component.html',
  styleUrls: ['./doctor-new.component.css']
})
export class DoctorNewComponent {

  
  ftoggle: boolean = false
 
  titles : string[] = ["Dr.","Mr.","Mrs.","Miss"] 

  eform: any

  specialtylist :string[]= [
    "General Practitioner",
    "Obstetrics and Gynecology",
    "Cardiology",
    "Neurology",
    "Family medicine"
] ;

  constructor( private ds: DoctorService) {
  
    
  }



 title: String
 name: String
 gender: String  = "Female"
 specialty: String
 contact: String


  
  
 dotogglegender(){
   this.gender=this.gender="Female"?"Male":"Female";
}

 postDoctor(): void {

    let obj: any;
    obj = {title:this.title, name: this.name, gender: this.gender, specialty: this.specialty, contact: this.contact }
  
    this.ds.postDoctor(obj,this.ftoggle).subscribe (

      {

        next : () => {alert("Doctor saved");location.reload()},
        error :() => {alert("something went wrong")}
      }
    )

  }



}
