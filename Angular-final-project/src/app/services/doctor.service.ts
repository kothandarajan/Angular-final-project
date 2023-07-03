import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  httpOptions: any
  constructor(private http: HttpClient) { }


  //To check avalailability of mail id and username

  getDoctors(): Observable<object> {

    this.httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      })
    }


    return this.http.get("http://localhost:4500/doctors", this.httpOptions);
  }

  postDoctor(obj: any, fflag: boolean): Observable<any> {

    //alert(sessionStorage.getItem("token"))
    this.httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      })
    }

    //console.log(this.httpOptions)
    if (!fflag)
      return this.http.post("http://localhost:4500/doctors", obj, this.httpOptions)
    return this.http.post("http://localhost:4500/doctors", obj)

  }


}
