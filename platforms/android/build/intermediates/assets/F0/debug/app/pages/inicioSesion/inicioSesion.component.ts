import { Component } from "@angular/core";
import { User} from "../../shared/user/user";
import { UserService} from "../../shared/user/user.service"
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl:"pages/inicioSesion/inicioSesion.html",
  styleUrls: ["pages/inicioSesion/inicioSesion-common.css","pages/inicioSesion/inicioSesion.css"]
})
export class InicioSesionComponent {
  user : User;
  isLogginIn= true;

  constructor(private router : Router , private userService: UserService){
    this.user = new User();
    this.user.email="leo@gomail.ven";
    this.user.clave="clave";
  }

  submit(){
    if(this.isLogginIn){
      this.login();
    }else{
      this.signUp();
    }
}
login(){
  
 /* this.router.navigate(["/"])
  this.userService.login(this.user).subscribe(
    ()=> this.router.navigate(["/list"]),
    (error) => alert("no pudimos encontrar tu cuenta")
  )
*/
}
signUp(){
  this.userService.register(this.user)
  .subscribe(
    ()=>{
      alert("tu cuenta ha sido creada exitosamente");
      this.toggleDisplay();
    },()=> alert("no se pudo crear tu cuenta")
  );
}
  toggleDisplay(){
    this.isLogginIn = !this.isLogginIn;
    this.user.clave = null;
  }
  forgot(){
    this.router.navigate(["/recuperar"])
  }
}