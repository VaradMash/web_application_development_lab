import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  profile_url:string ="";

  constructor(private router:Router, private reg:RegistrationService) { }

  ngOnInit(): void {
  }

  register(username:string, age:string, password:string, confirm_password:string, city:string, state:string)
  {
    let user_data = {
      "username" : username,
      "age" : age,
      "password" : password,
      "city" : city,
      "state" : state
    }
    this.reg.register(user_data);
    this.profile_url = "profile/" + username;
    this.router.navigateByUrl(this.profile_url);
  }
}
