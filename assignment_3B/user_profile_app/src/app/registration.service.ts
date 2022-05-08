import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() 
  { }

  register(user_data : object) {
    fetch("http://localhost:3000/api/register", {
      method:"POST",
      headers:{
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(user_data)
    }).then((response) => {
      console.log(response);
    });
  }
}
