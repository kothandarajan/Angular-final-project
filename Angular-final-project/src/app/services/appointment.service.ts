import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpOptions:any
  constructor(private http:HttpClient) { }


  postEnquiry(obj: any,fflag:boolean): Observable<any> {
    
    //alert(sessionStorage.getItem("token"))
    
    if (!fflag )
    this.httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+sessionStorage.getItem("token")
      })
      
     

    }
    else
    this.httpOptions = {
      Headers: new HttpHeaders({
        'Authorization': "Bearer "+sessionStorage.getItem("token")
      })
      
     

    }
    

    console.log(this.httpOptions)
    if (!fflag)
       return this.http.post("http://localhost:4500/appointments", obj, this.httpOptions)
    return this.http.post("http://localhost:4500/appointments", obj)
    
  }



}  

