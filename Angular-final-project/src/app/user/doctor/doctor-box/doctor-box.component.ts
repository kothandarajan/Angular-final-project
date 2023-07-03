import { Component , Input} from '@angular/core';
import { doctor } from 'src/app/Models/Models';

@Component({
  selector: 'app-doctor-box',
  templateUrl: './doctor-box.component.html',
  styleUrls: ['./doctor-box.component.css']
})
export class DoctorBoxComponent {

  @Input("doctor") current :  doctor= {

    id: -1,
    name:"",
    title:"",
    gender:"",
    specialty:"",
    contact: ""
   }


}
