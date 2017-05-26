import { Component } from "@angular/core";
import { User} from "../../shared/user/user";
import { UserService} from "../../shared/user/user.service"
import { Router } from "@angular/router";
import { Page} from "ui/page"

@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl:"pages/bienvenida/bienvenida.html",
  styleUrls: ["pages/bienvenida/bienvenida-common.css","pages/bienvenida/bienvenida.css"]
})
export class BienvenidaComponent {
  user : User;
  isLogginIn= true;
  constructor(private router : Router,page:Page){
    this.user = new User();
    this.user.email="leo@gomail.ven";
    this.user.clave="clave";
    page.actionBarHidden = true;
  }

  submit(){
    }
okButton(){
  
}
signUp(){
  }
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
    this.user.clave = null;
  }
  forgot(){
    this.router.navigate(["/recuperar"])
  }
}