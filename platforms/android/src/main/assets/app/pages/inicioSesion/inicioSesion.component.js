"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var InicioSesionComponent = (function () {
    function InicioSesionComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "leo@gomail.ven";
        this.user.clave = "clave";
    }
    InicioSesionComponent.prototype.submit = function () {
        if (this.isLogginIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    InicioSesionComponent.prototype.login = function () {
        /* this.router.navigate(["/"])
         this.userService.login(this.user).subscribe(
           ()=> this.router.navigate(["/list"]),
           (error) => alert("no pudimos encontrar tu cuenta")
         )
       */
    };
    InicioSesionComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("tu cuenta ha sido creada exitosamente");
            _this.toggleDisplay();
        }, function () { return alert("no se pudo crear tu cuenta"); });
    };
    InicioSesionComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
        this.user.clave = null;
    };
    InicioSesionComponent.prototype.forgot = function () {
        this.router.navigate(["/recuperar"]);
    };
    return InicioSesionComponent;
}());
InicioSesionComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/inicioSesion/inicioSesion.html",
        styleUrls: ["pages/inicioSesion/inicioSesion-common.css", "pages/inicioSesion/inicioSesion.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], InicioSesionComponent);
exports.InicioSesionComponent = InicioSesionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvU2VzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpb1Nlc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBQzdDLCtEQUEyRDtBQUMzRCwwQ0FBeUM7QUFRekMsSUFBYSxxQkFBcUI7SUFJaEMsK0JBQW9CLE1BQWUsRUFBVyxXQUF3QjtRQUFsRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGdEUsZUFBVSxHQUFFLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBSyxHQUFMO1FBRUM7Ozs7O1NBS0M7SUFDRixDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ1I7WUFDRSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLGNBQUssT0FBQSxLQUFLLENBQUMsNEJBQTRCLENBQUMsRUFBbkMsQ0FBbUMsQ0FDM0MsQ0FBQztJQUNKLENBQUM7SUFDQyw2Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1kscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO1FBQ3ZCLFdBQVcsRUFBQyxzQ0FBc0M7UUFDbEQsU0FBUyxFQUFFLENBQUMsNENBQTRDLEVBQUMscUNBQXFDLENBQUM7S0FDaEcsQ0FBQztxQ0FLNkIsZUFBTSxFQUF3QiwwQkFBVztHQUozRCxxQkFBcUIsQ0EwQ2pDO0FBMUNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2luaWNpb1Nlc2lvbi9pbmljaW9TZXNpb24uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2luaWNpb1Nlc2lvbi9pbmljaW9TZXNpb24tY29tbW9uLmNzc1wiLFwicGFnZXMvaW5pY2lvU2VzaW9uL2luaWNpb1Nlc2lvbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSW5pY2lvU2VzaW9uQ29tcG9uZW50IHtcbiAgdXNlciA6IFVzZXI7XG4gIGlzTG9nZ2luSW49IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSl7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuZW1haWw9XCJsZW9AZ29tYWlsLnZlblwiO1xuICAgIHRoaXMudXNlci5jbGF2ZT1cImNsYXZlXCI7XG4gIH1cblxuICBzdWJtaXQoKXtcbiAgICBpZih0aGlzLmlzTG9nZ2luSW4pe1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG59XG5sb2dpbigpe1xuICBcbiAvKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKVxuICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICgpPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxuICAgIChlcnJvcikgPT4gYWxlcnQoXCJubyBwdWRpbW9zIGVuY29udHJhciB0dSBjdWVudGFcIilcbiAgKVxuKi9cbn1cbnNpZ25VcCgpe1xuICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgLnN1YnNjcmliZShcbiAgICAoKT0+e1xuICAgICAgYWxlcnQoXCJ0dSBjdWVudGEgaGEgc2lkbyBjcmVhZGEgZXhpdG9zYW1lbnRlXCIpO1xuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgfSwoKT0+IGFsZXJ0KFwibm8gc2UgcHVkbyBjcmVhciB0dSBjdWVudGFcIilcbiAgKTtcbn1cbiAgdG9nZ2xlRGlzcGxheSgpe1xuICAgIHRoaXMuaXNMb2dnaW5JbiA9ICF0aGlzLmlzTG9nZ2luSW47XG4gICAgdGhpcy51c2VyLmNsYXZlID0gbnVsbDtcbiAgfVxuICBmb3Jnb3QoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVjdXBlcmFyXCJdKVxuICB9XG59Il19