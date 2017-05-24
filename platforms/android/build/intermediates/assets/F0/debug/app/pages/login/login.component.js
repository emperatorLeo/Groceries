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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE2QztBQUM3QywrREFBMkQ7QUFDM0QsMENBQXlDO0FBUXpDLElBQWEsY0FBYztJQUl6Qix3QkFBb0IsTUFBZSxFQUFXLFdBQXdCO1FBQWxELFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZ0RSxlQUFVLEdBQUUsSUFBSSxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3pDLGNBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLEVBQ3BDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLEVBQXZDLENBQXVDLENBQ25ELENBQUE7SUFFSCxDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ1I7WUFDRSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLGNBQUssT0FBQSxLQUFLLENBQUMsNEJBQTRCLENBQUMsRUFBbkMsQ0FBbUMsQ0FDM0MsQ0FBQztJQUNKLENBQUM7SUFDQyxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztRQUN2QixXQUFXLEVBQUMsd0JBQXdCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFDLHVCQUF1QixDQUFDO0tBQ3BFLENBQUM7cUNBSzZCLGVBQU0sRUFBd0IsMEJBQVc7R0FKM0QsY0FBYyxDQXFDMUI7QUFyQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgdXNlciA6IFVzZXI7XG4gIGlzTG9nZ2luSW49IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSl7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuZW1haWw9XCJsZW9AZ29tYWlsLnZlblwiO1xuICAgIHRoaXMudXNlci5jbGF2ZT1cImNsYXZlXCI7XG4gIH1cblxuICBzdWJtaXQoKXtcbiAgICBpZih0aGlzLmlzTG9nZ2luSW4pe1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG59XG5sb2dpbigpe1xuICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICgpPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxuICAgIChlcnJvcikgPT4gYWxlcnQoXCJubyBwdWRpbW9zIGVuY29udHJhciB0dSBjdWVudGFcIilcbiAgKVxuXG59XG5zaWduVXAoKXtcbiAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gIC5zdWJzY3JpYmUoXG4gICAgKCk9PntcbiAgICAgIGFsZXJ0KFwidHUgY3VlbnRhIGhhIHNpZG8gY3JlYWRhIGV4aXRvc2FtZW50ZVwiKTtcbiAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgIH0sKCk9PiBhbGVydChcIm5vIHNlIHB1ZG8gY3JlYXIgdHUgY3VlbnRhXCIpXG4gICk7XG59XG4gIHRvZ2dsZURpc3BsYXkoKXtcbiAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xuICAgIHRoaXMudXNlci5jbGF2ZSA9IG51bGw7XG4gIH1cbn0iXX0=