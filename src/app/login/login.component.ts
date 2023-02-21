import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public logForm:FormGroup
  constructor(public http:HttpClient){
    this.logForm = new FormGroup({
      email : new FormControl (null,[Validators.required,Validators.email]),
      pwd : new FormControl (null,[Validators.required])
    })
  }

  loginForm(){
    let url;
    // this.http.post(url,JSON.stringify({Details:this.logForm})).subscribe((res) => {
    //   if(res){
    //     console.log("Login Successful")
    //   }
    //   else
    //     console.log("Login Failed!");
    // })
  }
}
