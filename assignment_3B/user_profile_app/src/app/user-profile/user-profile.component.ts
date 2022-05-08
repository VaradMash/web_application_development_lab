import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user_name:string = "";
  age:string = "24";
  city:string = "Pune";
  state:string = "Maharashtra";
  password:string = "pwd"

  constructor(private route : ActivatedRoute, private registration : RegistrationService, private router : Router) 
  { 
    this.route.params.subscribe(params => {
      this.user_name = params["username"];
    });
    this.set_data();
  }

  delete_user()
  {
    fetch("http://localhost:3000/api/delete", {
      method:"POST",
      headers:{
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        username : this.user_name
      })
    })
    .then(response => response.json())
    .then((res) => {
      console.log(res)
      alert(res.msg)
      if(res.code == 200)
      {
        this.router.navigateByUrl("/login");
      }
    })

  }

  set_data()
  {
    // Conditionally redirect to profile page
    fetch("http://localhost:3000/api/user",{
      method:"POST",
      headers:{
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        "username" : this.user_name,
      })
    })
    .then(response => response.json())
    .then((res) => {
      if(res == null)
      {
        alert("Invalid username or password")
        this.user_name = "";
        this.age = "0";
        this.city = "null";
        this.state = "null";
        this.password = "null";
      }
      else
      {
        this.user_name = res.username;
        this.age = res.age;
        this.city = res.city;
        this.state = res.state;
        this.password = res.password;
      }
    });
  }

  ngOnInit(): void 
  {

  }

  log_out()
  {
    alert("Log out successful");
    this.router.navigateByUrl("/login");
  }

}
