import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private l : LoginService) 
  { }

  login (username:string, password:string)
  {
    // Conditionally redirect to profile page
    fetch("http://localhost:3000/api/user",{
      method:"POST",
      headers:{
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        "username" : username,
        "password" : password
      })
    })
    .then(response => response.json())
    .then((res) => {
      if(res == null)
      {
        alert("Invalid username or password")
      }
      else
      {
        console.log("response pw " + res.password);
        console.log("pw " + password);
        if(res.password == password)
        {
          let profile_url:string = "/profile/" + username
          this.router.navigateByUrl(profile_url);
        }
        else
        {
          alert("Invalid username or password");
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
