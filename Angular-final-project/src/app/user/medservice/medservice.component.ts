import { Component,OnInit } from '@angular/core';
import { medservice } from 'src/app/Models/Models';
import { MedserviceService } from 'src/app/services/medservice.service';

@Component({
  selector: 'app-medservice',
  templateUrl: './medservice.component.html',
  styleUrls: ['./medservice.component.css']
})
export class MedserviceComponent implements OnInit {

  medservices: medservice[] = [];
  meddetails: medservice = {
    id:-1, title:"", description:[], image:""
  }

  meddetform: boolean = false;
  Newmedserform: boolean = false;

  meddetailid: number = -1
  constructor(private ms: MedserviceService) {

  }


  ngOnInit(): void {

    this.ms.getMedServices().subscribe(

      {
        next: (data: medservice[]) => this.medservices = data,
        error: (error: any) => this.medservices = []
      }

    )

  }
  toggle() {

    this.Newmedserform = this.Newmedserform == true ? false : true;

  }

  getmeddetails(id: number) {

    this.meddetform = this.meddetform == true ? false : true;

    if (this.meddetform) {
      if (id > 0) {

        this.ms.getMedDetails(id).subscribe(


          {
            next: (data: medservice) => {
              //alert('hi')
              this.meddetails = data
              
            
            },
            error: (error: any) => {}
          }

        )

        
      }

    }


  }


}
