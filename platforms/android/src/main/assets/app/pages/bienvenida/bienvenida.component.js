"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var BienvenidaComponent = (function () {
    function BienvenidaComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "leo@gomail.ven";
        this.user.clave = "clave";
        page.actionBarHidden = true;
    }
    BienvenidaComponent.prototype.submit = function () {
    };
    BienvenidaComponent.prototype.okButton = function () {
    };
    BienvenidaComponent.prototype.signUp = function () {
    };
    BienvenidaComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
        this.user.clave = null;
    };
    BienvenidaComponent.prototype.forgot = function () {
        this.router.navigate(["/recuperar"]);
    };
    return BienvenidaComponent;
}());
BienvenidaComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/bienvenida/bienvenida.html",
        styleUrls: ["pages/bienvenida/bienvenida-common.css", "pages/bienvenida/bienvenida.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], BienvenidaComponent);
exports.BienvenidaComponent = BienvenidaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmllbnZlbmlkYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaWVudmVuaWRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywrQ0FBNkM7QUFDN0MsK0RBQTJEO0FBQzNELDBDQUF5QztBQUN6QyxnQ0FBNkI7QUFRN0IsSUFBYSxtQkFBbUI7SUFHOUIsNkJBQW9CLE1BQWUsRUFBQyxJQUFTO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFEbkMsZUFBVSxHQUFFLElBQUksQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELG9DQUFNLEdBQU47SUFDRSxDQUFDO0lBQ0wsc0NBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCxvQ0FBTSxHQUFOO0lBQ0UsQ0FBQztJQUNELDJDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7UUFDdkIsV0FBVyxFQUFDLGtDQUFrQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBQyxpQ0FBaUMsQ0FBQztLQUN4RixDQUFDO3FDQUk2QixlQUFNLEVBQU0sV0FBSTtHQUhsQyxtQkFBbUIsQ0F3Qi9CO0FBeEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2JpZW52ZW5pZGEvYmllbnZlbmlkYS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvYmllbnZlbmlkYS9iaWVudmVuaWRhLWNvbW1vbi5jc3NcIixcInBhZ2VzL2JpZW52ZW5pZGEvYmllbnZlbmlkYS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQmllbnZlbmlkYUNvbXBvbmVudCB7XG4gIHVzZXIgOiBVc2VyO1xuICBpc0xvZ2dpbkluPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcixwYWdlOlBhZ2Upe1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsPVwibGVvQGdvbWFpbC52ZW5cIjtcbiAgICB0aGlzLnVzZXIuY2xhdmU9XCJjbGF2ZVwiO1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHN1Ym1pdCgpe1xuICAgIH1cbm9rQnV0dG9uKCl7XG4gIFxufVxuc2lnblVwKCl7XG4gIH1cbiAgdG9nZ2xlRGlzcGxheSgpe1xuICAgIHRoaXMuaXNMb2dnaW5JbiA9ICF0aGlzLmlzTG9nZ2luSW47XG4gICAgdGhpcy51c2VyLmNsYXZlID0gbnVsbDtcbiAgfVxuICBmb3Jnb3QoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVjdXBlcmFyXCJdKVxuICB9XG59Il19