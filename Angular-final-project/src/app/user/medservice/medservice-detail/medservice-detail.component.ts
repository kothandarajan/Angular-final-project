import { Component,Input } from '@angular/core';
import { medservice } from 'src/app/Models/Models';

@Component({
  selector: 'app-medservice-detail',
  templateUrl: './medservice-detail.component.html',
  styleUrls: ['./medservice-detail.component.css']
})
export class MedserviceDetailComponent {

  @Input('meddetail') current : medservice =
  {
    id :-1,
    title :"",
    description:[],
    image:""

  }


}
