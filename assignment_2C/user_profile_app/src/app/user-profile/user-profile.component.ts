import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  contact_number = "8888888888";

  constructor(private route : ActivatedRoute) 
  { 
    this.route.params.subscribe(params => {
      this.user_name = params["username"];
    });
  }

  ngOnInit(): void {
  }

  log_out()
  {
    console.log("Logging out user " + this.user_name);
  }

}
