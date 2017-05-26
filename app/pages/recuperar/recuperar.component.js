"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var RecuperarComponent = (function () {
    function RecuperarComponent(router, page) {
        this.router = router;
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "leo@gomail.ven";
        this.user.clave = "clave";
        page.actionBarHidden = true;
    }
    RecuperarComponent.prototype.login = function () {
        this.router.navigate(["/inicioSesion"]);
    };
    RecuperarComponent.prototype.ingresar = function () {
        this.router.navigate(["/ingresarCodigo"]);
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
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], RecuperarComponent);
exports.RecuperarComponent = RecuperarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXBlcmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY3VwZXJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBQzdDLCtEQUEyRDtBQUMzRCwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBUS9CLElBQWEsa0JBQWtCO0lBSTdCLDRCQUFvQixNQUFlLEVBQUUsSUFBVztRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBRm5DLGVBQVUsR0FBRSxJQUFJLENBQUM7UUFHZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDSCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRixxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUNELDBDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7UUFDdkIsV0FBVyxFQUFDLGdDQUFnQztRQUM1QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBQywrQkFBK0IsQ0FBQztLQUNwRixDQUFDO3FDQUs2QixlQUFNLEVBQVMsV0FBSTtHQUpyQyxrQkFBa0IsQ0FvQjlCO0FBcEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOltVc2VyU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvcmVjdXBlcmFyL3JlY3VwZXJhci5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvcmVjdXBlcmFyL3JlY3VwZXJhci1jb21tb24uY3NzXCIsXCJwYWdlcy9yZWN1cGVyYXIvcmVjdXBlcmFyLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBSZWN1cGVyYXJDb21wb25lbnQge1xuICB1c2VyIDogVXNlcjtcbiAgaXNMb2dnaW5Jbj0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciAscGFnZSA6IFBhZ2Upe1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsPVwibGVvQGdvbWFpbC52ZW5cIjtcbiAgICB0aGlzLnVzZXIuY2xhdmU9XCJjbGF2ZVwiO1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XG4gIH1cbmxvZ2luKCl7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pbmljaW9TZXNpb25cIl0pXG4gfVxuaW5ncmVzYXIoKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2luZ3Jlc2FyQ29kaWdvXCJdKVxuICB9XG4gIHRvZ2dsZURpc3BsYXkoKXtcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xuICAgIHRoaXMudXNlci5jbGF2ZSA9IG51bGw7XG4gIH1cbn0iXX0=