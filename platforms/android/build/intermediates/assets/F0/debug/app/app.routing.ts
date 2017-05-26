import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { InicioSesionComponent} from "./pages/inicioSesion/inicioSesion.component";
import { RecuperarComponent} from "./pages/recuperar/recuperar.component";
export const routes = [
    { path: "", component: LoginComponent},
    { path: "list",component: ListComponent },
    { path: "inicioSesion",component:InicioSesionComponent },
    { path: "recuperar",component:RecuperarComponent}
];

export const navigatableComponents = [
    LoginComponent,ListComponent,InicioSesionComponent,
    RecuperarComponent
];