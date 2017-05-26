import { Component } from "@angular/core";
import { User} from "../../shared/user/user";
import { UserService} from "../../shared/user/user.service"
import { Router } from "@angular/router";
import { Page} from "ui/page";
@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl:"pages/ingresarCodigo/ingresarCodigo.html",
  styleUrls: ["pages/ingresarCodigo/ingresarCodigo-common.css","pages/ingresarCodigo/ingresarCodigo.css"]
})
export class IngresarCodigoComponent {
  user : User;
  isLogginIn= true;

  constructor(private router : Router , page:Page){
    this.user = new User();
    this.user.email="leo@gomail.ven";
    this.user.clave="clave";
    page.actionBarHidden=true;
  }

  submit(){
    this.router.navigate(["/inicioSesion"])
}
login(){
  }
signUp(){
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
    this.user.clave = null;
  }
  forgot(){
    
  }
}