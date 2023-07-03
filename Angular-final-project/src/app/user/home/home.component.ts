import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

/*
  constructor (private log:LogService,public router : Router,public route:ActivatedRoute) {};


  
  logout(){
    this.log.logout();
    window.location.reload();
}


  aboutclick()
  {

    this.router.navigate(['about'],{relativeTo:this.route});

  }

  appointmentclick()
  {

    this.router.navigate(['appointment'],{relativeTo:this.route});

  }

  doctorclick()
  {

    this.router.navigate(['doctor'],{relativeTo:this.route});

    
  }

  serviceclick(){

    this.router.navigate(['service'],{relativeTo:this.route});

    
  }
*/


pictures:string[]=["shipping.png","wishlist.png","profile.png"];
urls:string[]=["orders","wishlist","profile"];
strings:string[]=["Orders","Wishlist","Profile"];

constructor() { }

ngOnInit(): void {
}


}
