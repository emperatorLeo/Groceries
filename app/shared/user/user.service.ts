import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService{
    register(user:User){
        alert("acerca del registro:"+user.email);
    }
}