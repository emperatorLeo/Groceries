import { Component } from "@angular/core";
import { User} from "./shared/user/user";
import {UserService} from "./shared/user/user.service"

@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl:"pages/login/login.html",
  styleUrls: ["pages/login/login-common.css","pages/login/login.css"]
})
export class AppComponent {
  user : User;
  isLogginIn= true;

  constructor(private userService: UserService){
    this.user = new User();
  }

  submit(){
    if(this.isLogginIn){
      this.login();
    }else{
      this.signUp();
    }
}
login(){

}
signUp(){
  this.userService.register(this.user);
}
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
  }
}