import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

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
    "skillExperience":"4"
   }

  createRoleAssessment(managerId:number,formData:any): Observable<any>{
    const url = `${this.serverUrl}addRole?managerId=${managerId}`
    const headers = new HttpHeaders({'content-type':'application/json'})

    return this.http.post<any>(url, this.data,{headers})

    return this.http.post<any>(url, formData)
  }

  //adding attributes for assessment
  createAssessmentAttributes(managerId:number, data:any): Observable<any>{
    const url = `${this.serverUrl}addAttributeList?managerId=${managerId}`
    const headers = new HttpHeaders({'content-type':'application/json'})
    return  this.http.post<any>(url, data)
  }
  // adding assessment
  createAssessment(AttributeId:number, data:any):Observable<any>{
    const url = `${this.serverUrl}addAssessments?attributeId=${AttributeId}`
    const headers = new HttpHeaders({'content-type':'application/json'})
    return  this.http.post<any>(url, data)
  }
  //http://localhost:8080/addAQuestionList?assId=1
  //Adding assessment and questions
  createAssessmentQuestions(assId:number, data:any):Observable<any>{
    const url = `${this.serverUrl}addAQuestionList?assId=${assId}`
    const headers = new HttpHeaders({'content-type':'application/json'})
    return  this.http.post<any>(url, data)
  }

  //get assessments, atrributes and assesment questions
  //http://localhost:8080/getAssessments?managerId=1
  getAssessments(managerId:number):Observable<any>{
    const url = `${this.serverUrl}getAssessments?managerId=${managerId}`
    return this.http.get<any>(url);
  }
}
