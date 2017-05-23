"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        alert("acerca del registro:" + user.email);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBSXpDLElBQWEsV0FBVztJQUF4QjtJQUlBLENBQUM7SUFIRyw4QkFBUSxHQUFSLFVBQVMsSUFBUztRQUNkLEtBQUssQ0FBQyxzQkFBc0IsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBSXZCO0FBSlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XHJcbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpe1xyXG4gICAgICAgIGFsZXJ0KFwiYWNlcmNhIGRlbCByZWdpc3RybzpcIit1c2VyLmVtYWlsKTtcclxuICAgIH1cclxufSJdfQ==