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
var core_1 = require('@angular/core');
var user_service_1 = require("../services/user.service");
var facebook_service_1 = require("../services/facebook.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(userService, fbService, router) {
        this.userService = userService;
        this.fbService = fbService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.fbService.logout().then(function (r) {
            _this.statusChangeCallback(r);
            _this.router.navigate(['/login']);
        });
    };
    AppComponent.prototype.statusChangeCallback = function (resp) {
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
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: '../partial_html/app.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, facebook_service_1.FacebookService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map