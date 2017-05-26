"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var IngresarCodigoComponent = (function () {
    function IngresarCodigoComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "leo@gomail.ven";
        this.user.clave = "clave";
        page.actionBarHidden = true;
    }
    IngresarCodigoComponent.prototype.submit = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    IngresarCodigoComponent.prototype.login = function () {
    };
    IngresarCodigoComponent.prototype.signUp = function () {
    };
    IngresarCodigoComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
        this.user.clave = null;
    };
    IngresarCodigoComponent.prototype.forgot = function () {
    };
    return IngresarCodigoComponent;
}());
IngresarCodigoComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/ingresarCodigo/ingresarCodigo.html",
        styleUrls: ["pages/ingresarCodigo/ingresarCodigo-common.css", "pages/ingresarCodigo/ingresarCodigo.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], IngresarCodigoComponent);
exports.IngresarCodigoComponent = IngresarCodigoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5ncmVzYXJDb2RpZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5ncmVzYXJDb2RpZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE2QztBQUM3QywrREFBMkQ7QUFDM0QsMENBQXlDO0FBQ3pDLGdDQUE4QjtBQU85QixJQUFhLHVCQUF1QjtJQUlsQyxpQ0FBb0IsTUFBZSxFQUFHLElBQVM7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUZuQyxlQUFVLEdBQUUsSUFBSSxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ0QsdUNBQUssR0FBTDtJQUNFLENBQUM7SUFDSCx3Q0FBTSxHQUFOO0lBQ0UsQ0FBQztJQUNELCtDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELHdDQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLHVCQUF1QjtJQU5uQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztRQUN2QixXQUFXLEVBQUMsMENBQTBDO1FBQ3RELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxFQUFDLHlDQUF5QyxDQUFDO0tBQ3hHLENBQUM7cUNBSzZCLGVBQU0sRUFBUSxXQUFJO0dBSnBDLHVCQUF1QixDQXlCbkM7QUF6QlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9pbmdyZXNhckNvZGlnby9pbmdyZXNhckNvZGlnby5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvaW5ncmVzYXJDb2RpZ28vaW5ncmVzYXJDb2RpZ28tY29tbW9uLmNzc1wiLFwicGFnZXMvaW5ncmVzYXJDb2RpZ28vaW5ncmVzYXJDb2RpZ28uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEluZ3Jlc2FyQ29kaWdvQ29tcG9uZW50IHtcbiAgdXNlciA6IFVzZXI7XG4gIGlzTG9nZ2luSW49IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLCBwYWdlOlBhZ2Upe1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsPVwibGVvQGdvbWFpbC52ZW5cIjtcbiAgICB0aGlzLnVzZXIuY2xhdmU9XCJjbGF2ZVwiO1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XG4gIH1cblxuICBzdWJtaXQoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaW5pY2lvU2VzaW9uXCJdKVxufVxubG9naW4oKXtcbiAgfVxuc2lnblVwKCl7XG4gIH1cbiAgdG9nZ2xlRGlzcGxheSgpe1xuICAgIHRoaXMuaXNMb2dnaW5JbiA9ICF0aGlzLmlzTG9nZ2luSW47XG4gICAgdGhpcy51c2VyLmNsYXZlID0gbnVsbDtcbiAgfVxuICBmb3Jnb3QoKXtcbiAgICBcbiAgfVxufSJdfQ==