import { Component } from "@angular/core";
import { User} from "../../shared/user/user";
import { UserService} from "../../shared/user/user.service"
import { Router } from "@angular/router";
import { Page } from "ui/page";
@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl:"pages/login/login.html",
  styleUrls: ["pages/login/login-common.css","pages/login/login.css"]
})
export class LoginComponent {
  user : User;
  isLogginIn= true;

  constructor(private router : Router ,page:Page){
    this.user = new User();
    this.user.email="leo@gomail.ven";
    this.user.clave="clave";
    page.actionBarHidden=true;
  }

  submit(){
    if(this.isLogginIn){
      this.login();
    }else{
      this.signUp();
    }
}
login(){
  this.router.navigate(["/inicioSesion"])
 }
signUp(){
  this.router.navigate(["/list"])
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
    this.user.clave = null;
  }
}