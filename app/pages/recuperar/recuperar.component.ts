import { Component } from "@angular/core";
import { User} from "../../shared/user/user";
import { UserService} from "../../shared/user/user.service"
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl:"pages/recuperar/recuperar.html",
  styleUrls: ["pages/recuperar/recuperar-common.css","pages/recuperar/recuperar.css"]
})
export class RecuperarComponent {
  user : User;
  isLogginIn= true;

  constructor(private router : Router ,page : Page){
    this.user = new User();
    this.user.email="leo@gomail.ven";
    this.user.clave="clave";
    page.actionBarHidden=true;
  }
login(){
  this.router.navigate(["/inicioSesion"])
 }
ingresar(){
  this.router.navigate(["/ingresarCodigo"])
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
    this.user.clave = null;
  }
}