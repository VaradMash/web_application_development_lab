import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  profile_url:string ="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(username:string, age:string, password:string, confirm_password:string, city:string, state:string)
  {
    this.profile_url = "profile/" + username;
    this.router.navigateByUrl(this.profile_url);
  }
}
