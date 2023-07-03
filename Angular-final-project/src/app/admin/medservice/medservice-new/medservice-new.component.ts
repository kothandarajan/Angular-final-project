import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MedserviceService } from 'src/app/services/medservice.service';

@Component({
  selector: 'app-medservice-new',
  templateUrl: './medservice-new.component.html',
  styleUrls: ['./medservice-new.component.css']
})
export class MedserviceNewComponent {

  ftoggle: boolean = false
 

  eform: any

  constructor(private fb: FormBuilder, private ms: MedserviceService) {
  
    this.eform = this.fb.group(

      {

        title: ['', [Validators.required, Validators.minLength(3)]],

        image: ['', [Validators.required]],

        description: ['', [Validators.required, Validators.minLength(20)]],

      }

    )

  }

  postMedService(): void {
    let title = this.eform.get('title').value
    let image = this.eform.get('image').value
    let description = this.eform.get('description').value
    let obj: any;
    if (this.ftoggle) {
      var formData: any = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      obj = formData
    }
    else {
      obj = { title: title, image : image ,description: description}
    }

    this.ms.postMedService(obj,this.ftoggle).subscribe (

      {

        next : () => {alert("New Medical Service Created");location.reload()},
        error :() => {alert("something went wrong")}
      }
    )

  }



}
