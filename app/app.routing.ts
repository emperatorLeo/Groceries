import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { InicioSesionComponent} from "./pages/inicioSesion/inicioSesion.component";
import { RecuperarComponent} from "./pages/recuperar/recuperar.component";
import { IngresarCodigoComponent} from "./pages/ingresarCodigo/ingresarCodigo.component"
import { BienvenidaComponent} from "./pages/bienvenida/bienvenida.component";
export const routes = [
    { path: "", component: LoginComponent},
    { path: "list",component: ListComponent },
    { path: "inicioSesion",component:InicioSesionComponent },
    { path: "recuperar",component:RecuperarComponent},
    { path: "ingresarCodigo",component:IngresarCodigoComponent},
    { path: "bienvenida",component:BienvenidaComponent}
];

export const navigatableComponents = [
    LoginComponent,ListComponent,InicioSesionComponent,
    RecuperarComponent,IngresarCodigoComponent,BienvenidaComponent
];