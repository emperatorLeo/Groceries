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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvU2VzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpb1Nlc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBQzdDLCtEQUEyRDtBQUMzRCwwQ0FBeUM7QUFRekMsSUFBYSxxQkFBcUI7SUFJaEMsK0JBQW9CLE1BQWUsRUFBVyxXQUF3QjtRQUFsRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGdEUsZUFBVSxHQUFFLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBSyxHQUFMO1FBRUM7Ozs7O1NBS0M7SUFDRixDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ1I7WUFDRSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLGNBQUssT0FBQSxLQUFLLENBQUMsNEJBQTRCLENBQUMsRUFBbkMsQ0FBbUMsQ0FDM0MsQ0FBQztJQUNKLENBQUM7SUFDQyw2Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1kscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO1FBQ3ZCLFdBQVcsRUFBQyxzQ0FBc0M7UUFDbEQsU0FBUyxFQUFFLENBQUMsNENBQTRDLEVBQUMscUNBQXFDLENBQUM7S0FDaEcsQ0FBQztxQ0FLNkIsZUFBTSxFQUF3QiwwQkFBVztHQUozRCxxQkFBcUIsQ0EwQ2pDO0FBMUNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOltVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9pbmljaW9TZXNpb24vaW5pY2lvU2VzaW9uLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2luaWNpb1Nlc2lvbi9pbmljaW9TZXNpb24tY29tbW9uLmNzc1wiLFwicGFnZXMvaW5pY2lvU2VzaW9uL2luaWNpb1Nlc2lvbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluaWNpb1Nlc2lvbkNvbXBvbmVudCB7XHJcbiAgdXNlciA6IFVzZXI7XHJcbiAgaXNMb2dnaW5Jbj0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSl7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsPVwibGVvQGdvbWFpbC52ZW5cIjtcclxuICAgIHRoaXMudXNlci5jbGF2ZT1cImNsYXZlXCI7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKXtcclxuICAgIGlmKHRoaXMuaXNMb2dnaW5Jbil7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG59XHJcbmxvZ2luKCl7XHJcbiAgXHJcbiAvKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKVxyXG4gIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAoKT0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuICAgIChlcnJvcikgPT4gYWxlcnQoXCJubyBwdWRpbW9zIGVuY29udHJhciB0dSBjdWVudGFcIilcclxuICApXHJcbiovXHJcbn1cclxuc2lnblVwKCl7XHJcbiAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgLnN1YnNjcmliZShcclxuICAgICgpPT57XHJcbiAgICAgIGFsZXJ0KFwidHUgY3VlbnRhIGhhIHNpZG8gY3JlYWRhIGV4aXRvc2FtZW50ZVwiKTtcclxuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICB9LCgpPT4gYWxlcnQoXCJubyBzZSBwdWRvIGNyZWFyIHR1IGN1ZW50YVwiKVxyXG4gICk7XHJcbn1cclxuICB0b2dnbGVEaXNwbGF5KCl7XHJcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xyXG4gICAgdGhpcy51c2VyLmNsYXZlID0gbnVsbDtcclxuICB9XHJcbiAgZm9yZ290KCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVjdXBlcmFyXCJdKVxyXG4gIH1cclxufSJdfQ==