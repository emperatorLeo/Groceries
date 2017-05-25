"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var RecuperarComponent = (function () {
    function RecuperarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "leo@gomail.ven";
        this.user.clave = "clave";
    }
    RecuperarComponent.prototype.submit = function () {
        if (this.isLogginIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    RecuperarComponent.prototype.login = function () {
        this.router.navigate(["/inicioSesion"]);
        /* this.userService.login(this.user).subscribe(
           ()=> this.router.navigate(["/list"]),
           (error) => alert("no pudimos encontrar tu cuenta")
         )
       */
    };
    RecuperarComponent.prototype.signUp = function () {
        this.router.navigate(["/list"]);
        /*this.userService.register(this.user)
        .subscribe(
          ()=>{
            alert("tu cuenta ha sido creada exitosamente");
            this.toggleDisplay();
          },()=> alert("no se pudo crear tu cuenta")
        );*/
    };
    RecuperarComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
        this.user.clave = null;
    };
    return RecuperarComponent;
}());
RecuperarComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/recuperar/recuperar.html",
        styleUrls: ["pages/recuperar/recuperar-common.css", "pages/recuperar/recuperar.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], RecuperarComponent);
exports.RecuperarComponent = RecuperarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXBlcmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3VwZXJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBQzdDLCtEQUEyRDtBQUMzRCwwQ0FBeUM7QUFRekMsSUFBYSxrQkFBa0I7SUFJN0IsNEJBQW9CLE1BQWUsRUFBVyxXQUF3QjtRQUFsRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGdEUsZUFBVSxHQUFFLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1FBQ3hDOzs7O1NBSUM7SUFDRixDQUFDO0lBQ0QsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUMvQjs7Ozs7O1lBTUk7SUFDTixDQUFDO0lBQ0MsMENBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztRQUN2QixXQUFXLEVBQUMsZ0NBQWdDO1FBQzVDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLCtCQUErQixDQUFDO0tBQ3BGLENBQUM7cUNBSzZCLGVBQU0sRUFBd0IsMEJBQVc7R0FKM0Qsa0JBQWtCLENBdUM5QjtBQXZDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9yZWN1cGVyYXIvcmVjdXBlcmFyLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yZWN1cGVyYXIvcmVjdXBlcmFyLWNvbW1vbi5jc3NcIixcInBhZ2VzL3JlY3VwZXJhci9yZWN1cGVyYXIuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFJlY3VwZXJhckNvbXBvbmVudCB7XG4gIHVzZXIgOiBVc2VyO1xuICBpc0xvZ2dpbkluPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2Upe1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsPVwibGVvQGdvbWFpbC52ZW5cIjtcbiAgICB0aGlzLnVzZXIuY2xhdmU9XCJjbGF2ZVwiO1xuICB9XG5cbiAgc3VibWl0KCl7XG4gICAgaWYodGhpcy5pc0xvZ2dpbkluKXtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxufVxubG9naW4oKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2luaWNpb1Nlc2lvblwiXSlcbiAvKiB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICgpPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxuICAgIChlcnJvcikgPT4gYWxlcnQoXCJubyBwdWRpbW9zIGVuY29udHJhciB0dSBjdWVudGFcIilcbiAgKVxuKi9cbn1cbnNpZ25VcCgpe1xuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSlcbiAgLyp0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgLnN1YnNjcmliZShcbiAgICAoKT0+e1xuICAgICAgYWxlcnQoXCJ0dSBjdWVudGEgaGEgc2lkbyBjcmVhZGEgZXhpdG9zYW1lbnRlXCIpO1xuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgfSwoKT0+IGFsZXJ0KFwibm8gc2UgcHVkbyBjcmVhciB0dSBjdWVudGFcIilcbiAgKTsqL1xufVxuICB0b2dnbGVEaXNwbGF5KCl7XG4gICAgdGhpcy5pc0xvZ2dpbkluID0gIXRoaXMuaXNMb2dnaW5JbjtcbiAgICB0aGlzLnVzZXIuY2xhdmUgPSBudWxsO1xuICB9XG59Il19