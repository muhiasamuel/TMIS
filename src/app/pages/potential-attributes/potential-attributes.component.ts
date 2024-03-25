import { Component } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { AttributesComponent } from '../attributes/attributes.component';
import { AddPotentialDescriptorComponent } from '../add-potential-descriptor/add-potential-descriptor.component';
import { AddAttributeComponent } from '../add-attribute/add-attribute.component';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-potential-attributes',
  templateUrl: './potential-attributes.component.html',
  styleUrl: './potential-attributes.component.scss'
})
export class PotentialAttributesComponent {
  systemUser: any
  userRoleId: any
  title = "Potential Attributes"
  potentialAttribute: any[] = []

  constructor(private route: Router, private http: HttpServiceService, private httpClient: HttpClient, private dialog: Dialog){}
  ngOnInit(){
    this.systemUser = JSON.parse(localStorage.getItem("user"))
    console.log(this.systemUser)
    if(this.systemUser != null){
      this.userRoleId = this.systemUser.roleId
      if(this.systemUser.roleId == 1){
        this.getManagerAttributes(this.systemUser.userId)
      }else{
        this.getManagerAttributes(this.systemUser.manager.userId)

      }

    }else{
      this.route.navigate([''])
    }
  }

  getManagerAttributes(managerId: any){
    const url = `${this.http.serverUrl}/getManagerAttributes?managerId=${managerId}`
    const res = this.httpClient.get(url)

    res.subscribe(
      (response: any) => {
        console.log("Api response", response)
        this.potentialAttribute = response.item
      },

      (error: any) => {
        console.log("Api response", error)

      }
    )

  }

  openDialog(){
      this.dialog.open(AddAttributeComponent,{
       
      })
  }

}
