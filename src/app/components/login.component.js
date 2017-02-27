"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var facebook_service_1 = require("../services/facebook.service");
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, fbService, userService) {
        this.router = router;
        this.fbService = fbService;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.getLoginStatus().then(function (r) { return _this.statusChangeCallback(r); });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.fbService.login().then(function (r) {
            _this.statusChangeCallback(r);
            _this.fbService.isLoggedIn().then(function (r) {
                _this.statusChangeCallback(r);
                _this.router.navigate(['/table']);
            });
        });
    };
    LoginComponent.prototype.onLogout = function () {
        var _this = this;
        this.fbService.logout().then(function (r) {
            _this.statusChangeCallback(r);
        });
    };
    LoginComponent.prototype.statusChangeCallback = function (resp) {
        var _this = this;
        if (resp.status === 'connected') {
            console.log("User connected. id: " + resp.authResponse.userID);
        }
        else if (resp.status === 'not_authorized') {
            console.log("No user authorized");
        }
        else {
            console.log("No user logged in");
        }
        this.fbService.isLoggedIn().then(function (r) { return _this.userService.setLoggedIn(r); });
        this.fbService.getFirstName().then(function (r) { return _this.userService.setUsername(r); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: '../partial_html/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, facebook_service_1.FacebookService, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map