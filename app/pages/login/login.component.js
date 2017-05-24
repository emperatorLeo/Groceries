"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "leo@gomail.ven";
        this.user.clave = "clave";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLogginIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user).subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("no pudimos encontrar tu cuenta"); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("tu cuenta ha sido creada exitosamente");
            _this.toggleDisplay();
        }, function () { return alert("no se pudo crear tu cuenta"); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
        this.user.clave = null;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE2QztBQUM3QywrREFBMkQ7QUFDM0QsMENBQXlDO0FBUXpDLElBQWEsY0FBYztJQUl6Qix3QkFBb0IsTUFBZSxFQUFXLFdBQXdCO1FBQWxELFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZ0RSxlQUFVLEdBQUUsSUFBSSxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3pDLGNBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLEVBQ3BDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLEVBQXZDLENBQXVDLENBQ25ELENBQUE7SUFFSCxDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ1I7WUFDRSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLGNBQUssT0FBQSxLQUFLLENBQUMsNEJBQTRCLENBQUMsRUFBbkMsQ0FBbUMsQ0FDM0MsQ0FBQztJQUNKLENBQUM7SUFDQyxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztRQUN2QixXQUFXLEVBQUMsd0JBQXdCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFDLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7cUNBSzZCLGVBQU0sRUFBd0IsMEJBQVc7R0FKM0QsY0FBYyxDQXFDMUI7QUFyQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgdXNlciA6IFVzZXI7XHJcbiAgaXNMb2dnaW5Jbj0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSl7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsPVwibGVvQGdvbWFpbC52ZW5cIjtcclxuICAgIHRoaXMudXNlci5jbGF2ZT1cImNsYXZlXCI7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKXtcclxuICAgIGlmKHRoaXMuaXNMb2dnaW5Jbil7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG59XHJcbmxvZ2luKCl7XHJcbiAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZShcclxuICAgICgpPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG4gICAgKGVycm9yKSA9PiBhbGVydChcIm5vIHB1ZGltb3MgZW5jb250cmFyIHR1IGN1ZW50YVwiKVxyXG4gIClcclxuXHJcbn1cclxuc2lnblVwKCl7XHJcbiAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgLnN1YnNjcmliZShcclxuICAgICgpPT57XHJcbiAgICAgIGFsZXJ0KFwidHUgY3VlbnRhIGhhIHNpZG8gY3JlYWRhIGV4aXRvc2FtZW50ZVwiKTtcclxuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICB9LCgpPT4gYWxlcnQoXCJubyBzZSBwdWRvIGNyZWFyIHR1IGN1ZW50YVwiKVxyXG4gICk7XHJcbn1cclxuICB0b2dnbGVEaXNwbGF5KCl7XHJcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xyXG4gICAgdGhpcy51c2VyLmNsYXZlID0gbnVsbDtcclxuICB9XHJcbn0iXX0=