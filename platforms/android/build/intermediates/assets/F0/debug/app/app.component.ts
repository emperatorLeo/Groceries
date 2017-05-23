import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `<TextField hint ="Direccion E-mail" keyboardType="email"
  autocorrect="false" autocapitalizationType ="none"></TextField>
  <TextField hint ="Clave" secure="true"></Textfield>
  <Button text="Sign in"></Button>
  <Button text="Inscribete con Comestibles"></Button>
  `
})
export class AppComponent {}