import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }



  authenticate_user (username:string, password:string) 
  {
    var result:boolean = false;
    fetch("http://localhost:3000/api/login",{
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
    .then(response => response.json()).
    then((res) => {
      if(res == null)
      {
        result = false;
      }
      else
      {
        console.log("response pw " + res.password);
        console.log("pw " + password);
        if(res.password == password)
        {
          console.log("Password matched")
          result = true;
          console.log("Result value updated to : " + result)
        }
      }
    }).then((r) => {
      return result;
    })
  }
}
