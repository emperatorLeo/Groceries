"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var InicioSesionComponent = (function () {
    function InicioSesionComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "leo@gomail.ven";
        this.user.clave = "clave";
        page.actionBarHidden = true;
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
        this.router.navigate(["/bienvenida"]);
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
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], InicioSesionComponent);
exports.InicioSesionComponent = InicioSesionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvU2VzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpb1Nlc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBQzdDLCtEQUEyRDtBQUMzRCwwQ0FBeUM7QUFDekMsZ0NBQTZCO0FBUTdCLElBQWEscUJBQXFCO0lBR2hDLCtCQUFvQixNQUFlLEVBQUMsSUFBUztRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBRG5DLGVBQVUsR0FBRSxJQUFJLENBQUM7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBQ0QscUNBQUssR0FBTDtRQUVDOzs7OztTQUtDO0lBQ0YsQ0FBQztJQUNELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDZDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7UUFDdkIsV0FBVyxFQUFDLHNDQUFzQztRQUNsRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBQyxxQ0FBcUMsQ0FBQztLQUNoRyxDQUFDO3FDQUk2QixlQUFNLEVBQU0sV0FBSTtHQUhsQyxxQkFBcUIsQ0FvQ2pDO0FBcENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2luaWNpb1Nlc2lvbi9pbmljaW9TZXNpb24uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2luaWNpb1Nlc2lvbi9pbmljaW9TZXNpb24tY29tbW9uLmNzc1wiLFwicGFnZXMvaW5pY2lvU2VzaW9uL2luaWNpb1Nlc2lvbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSW5pY2lvU2VzaW9uQ29tcG9uZW50IHtcbiAgdXNlciA6IFVzZXI7XG4gIGlzTG9nZ2luSW49IHRydWU7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLHBhZ2U6UGFnZSl7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuZW1haWw9XCJsZW9AZ29tYWlsLnZlblwiO1xuICAgIHRoaXMudXNlci5jbGF2ZT1cImNsYXZlXCI7XG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgc3VibWl0KCl7XG4gICAgaWYodGhpcy5pc0xvZ2dpbkluKXtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxufVxubG9naW4oKXtcbiAgXG4gLyogdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSlcbiAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAoKT0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcbiAgICAoZXJyb3IpID0+IGFsZXJ0KFwibm8gcHVkaW1vcyBlbmNvbnRyYXIgdHUgY3VlbnRhXCIpXG4gIClcbiovXG59XG5zaWduVXAoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JpZW52ZW5pZGFcIl0pO1xuICB9XG4gIHRvZ2dsZURpc3BsYXkoKXtcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xuICAgIHRoaXMudXNlci5jbGF2ZSA9IG51bGw7XG4gIH1cbiAgZm9yZ290KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlY3VwZXJhclwiXSlcbiAgfVxufSJdfQ==