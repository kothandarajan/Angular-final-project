import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent implements OnInit {


  @Input() pictures:string[]=[];
@Input() strings:string[]=[];
@Input() urls:string[]=[];
cartshow:boolean=true;
cartCount:number=1;
username:string=""
  constructor(private log:LogService,private router:Router,private route:ActivatedRoute) { }
 

  ngOnInit(): void {
    let usertype=sessionStorage.getItem("usertype");
    this.username=sessionStorage.getItem("email");
    //alert(this.username)
    if(usertype=="admin")
     this.cartshow=false;
    let cart=localStorage.getItem("cart");
    if(cart)
       this.cartCount=JSON.parse(cart).length;
    else
       this.cartCount=0;

       
  }
  
  navigate(url:string){

    //alert(url)
    if(url=="")
    window.location.reload()
    else
    {
     this.router.navigate([url], {relativeTo:this.route});

      //this.router.navigate([url])
     // this.router.navigate(['../',url])
    
      /*
      this.router.navigate(['../',url ])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
    */

     // this.router.navigate([url], {relativeTo:this.route});

    }
  
  }
  logout(){
    this.log.logout();
    window.location.reload();
}


}
