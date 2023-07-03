import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedserviceService {

  httpOptions:any
  constructor(private http:HttpClient) { }


  getMedServices():Observable<any>{


    this.httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      })
    }


    return this.http.get("http://localhost:4500/medservices")

  }

  getMedDetails(id:number):Observable<any> {
    
    this.httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      })
    }

    return this.http.get("http://localhost:4500/medservices/"+id)
  }

  
  postMedService(obj: any,fflag:boolean): Observable<any> {
    
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
       return this.http.post("http://localhost:4500/medservices", obj, this.httpOptions)
    return this.http.post("http://localhost:4500/medservices", obj)
    
  }



}
