import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }


  serverUrl: string = 'http://192.168.90.33:8080/';

  serverUrl: string = 'http://localhost:8080/';

 
  //add RolesFor assesssment
   data = {
    "roleName":"audit",
    "roleDescription":"well well",
    "averageRating":"3",
    "talentStrategy":"train",
    "currentState":"risky",
    "currentStrategy":"uuuwuwt",
    "strategicImportance":"3",
    "riskImpact":"5",
    "vacancyRisk":"2.5",
    "impactOnOperation":"3",

    "skillExpirience":"4"

    "skillExperience":"4"

   }

  createRoleAssessment(managerId:number,formData:any): Observable<any>{
    const url = `${this.serverUrl}addRole?managerId=${managerId}`
    const headers = new HttpHeaders({'content-type':'application/json'})

    return this.http.post<any>(url, this.data,{headers})

    return this.http.post<any>(url, formData)
  }

}
