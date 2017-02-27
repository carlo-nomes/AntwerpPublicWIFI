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
var FacebookService = (function () {
    function FacebookService() {
        FB.init({
            appId: '725173034323064',
            xfbml: true,
            version: 'v2.8'
        });
        FB.AppEvents.logPageView();
    }
    FacebookService.prototype.login = function () {
        return new Promise(function (resolve) {
            FB.login(function (r) { return resolve(r); }, { scope: 'public_profile' });
        });
    };
    FacebookService.prototype.logout = function () {
        return new Promise(function (resolve) {
            FB.logout(function (r) { return resolve(r); });
        });
    };
    FacebookService.prototype.getLoginStatus = function () {
        return new Promise(function (resolve) {
            FB.getLoginStatus(function (r) { return resolve(r); });
        });
    };
    FacebookService.prototype.isLoggedIn = function () {
        return this.getLoginStatus().then(function (r) { return r.status === 'connected'; });
    };
    FacebookService.prototype.getMe = function (fields) {
        return new Promise(function (resolve) {
            FB.api('/me', { fields: fields }, function (r) { return resolve(r); });
        });
    };
    FacebookService.prototype.getName = function () {
        return this.getMe('').then(function (r) { return r ? r.name : null; });
    };
    FacebookService.prototype.getFirstName = function () {
        return this.getMe('first_name').then(function (r) { return r ? r.first_name : null; });
    };
    FacebookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FacebookService);
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=facebook.service.js.map