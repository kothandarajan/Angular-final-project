import { Component,Input } from '@angular/core';
import { medservice } from 'src/app/Models/Models';

@Component({
  selector: 'app-medservice-box',
  templateUrl: './medservice-box.component.html',
  styleUrls: ['./medservice-box.component.css']
})
export class MedserviceBoxComponent {

  @Input('medservice') current : medservice =
  {
    id :-1,
    title :"",
    description:[],
    image:""

  }

  




   
   
 

}
