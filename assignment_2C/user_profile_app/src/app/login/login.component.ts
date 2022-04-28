import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) 
  { }

  login (username:string, password:string)
  {
    // Replace next lines with server authentication
    console.log(username);
    console.log(password);
    // Conditionally redirect to profile page
    let profile_url:string = "/profile/" + username
    this.router.navigateByUrl(profile_url);
  }

  ngOnInit(): void {
  }

}
