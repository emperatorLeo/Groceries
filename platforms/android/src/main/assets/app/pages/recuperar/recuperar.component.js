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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXBlcmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3VwZXJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBQzdDLCtEQUEyRDtBQUMzRCwwQ0FBeUM7QUFRekMsSUFBYSxrQkFBa0I7SUFJN0IsNEJBQW9CLE1BQWUsRUFBVyxXQUF3QjtRQUFsRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGdEUsZUFBVSxHQUFFLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1FBQ3hDOzs7O1NBSUM7SUFDRixDQUFDO0lBQ0QsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUMvQjs7Ozs7O1lBTUk7SUFDTixDQUFDO0lBQ0MsMENBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztRQUN2QixXQUFXLEVBQUMsZ0NBQWdDO1FBQzVDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxFQUFDLCtCQUErQixDQUFDO0tBQ3BGLENBQUM7cUNBSzZCLGVBQU0sRUFBd0IsMEJBQVc7R0FKM0Qsa0JBQWtCLENBdUM5QjtBQXZDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvcmVjdXBlcmFyL3JlY3VwZXJhci5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yZWN1cGVyYXIvcmVjdXBlcmFyLWNvbW1vbi5jc3NcIixcInBhZ2VzL3JlY3VwZXJhci9yZWN1cGVyYXIuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWN1cGVyYXJDb21wb25lbnQge1xyXG4gIHVzZXIgOiBVc2VyO1xyXG4gIGlzTG9nZ2luSW49IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyICwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2Upe1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci5lbWFpbD1cImxlb0Bnb21haWwudmVuXCI7XHJcbiAgICB0aGlzLnVzZXIuY2xhdmU9XCJjbGF2ZVwiO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCl7XHJcbiAgICBpZih0aGlzLmlzTG9nZ2luSW4pe1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxufVxyXG5sb2dpbigpe1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmljaW9TZXNpb25cIl0pXHJcbiAvKiB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgKCk9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSksXHJcbiAgICAoZXJyb3IpID0+IGFsZXJ0KFwibm8gcHVkaW1vcyBlbmNvbnRyYXIgdHUgY3VlbnRhXCIpXHJcbiAgKVxyXG4qL1xyXG59XHJcbnNpZ25VcCgpe1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKVxyXG4gIC8qdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgLnN1YnNjcmliZShcclxuICAgICgpPT57XHJcbiAgICAgIGFsZXJ0KFwidHUgY3VlbnRhIGhhIHNpZG8gY3JlYWRhIGV4aXRvc2FtZW50ZVwiKTtcclxuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICB9LCgpPT4gYWxlcnQoXCJubyBzZSBwdWRvIGNyZWFyIHR1IGN1ZW50YVwiKVxyXG4gICk7Ki9cclxufVxyXG4gIHRvZ2dsZURpc3BsYXkoKXtcclxuICAgIHRoaXMuaXNMb2dnaW5JbiA9ICF0aGlzLmlzTG9nZ2luSW47XHJcbiAgICB0aGlzLnVzZXIuY2xhdmUgPSBudWxsO1xyXG4gIH1cclxufSJdfQ==