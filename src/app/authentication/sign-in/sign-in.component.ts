import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../services/http-service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  systemUser: any 
  user = {
    // "username":"CM0001Mo",
    // "password":"2345"
      "username":"GK0001Ch",
    "password":"1234"

  }
  loginForm = this._fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required]
  })
  constructor(private route:Router, private _fb: FormBuilder,
     private http: HttpClient, private server: HttpServiceService){}
  login(){
    const url = `${this.server.serverUrl}/login`
    const response = this.http.post(url, this.user)

    response.subscribe(
      (response: any) => {
        if(response.status = 200){
            this.systemUser = response.item;
            localStorage.setItem("user", JSON.stringify(this.systemUser))
            // localStorage.setItem("user", JSON.stringify(this.systemUser));
            console.log(response)
            this.route.navigate(['/dashboard'])

        }
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  getUserDetails(user: any){
    
  }

}
