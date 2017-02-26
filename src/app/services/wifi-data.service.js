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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var WifiDataService = (function () {
    function WifiDataService(http) {
        this.http = http;
        this.localUrl = './../fakeAPI/wifiopenbaar.json';
        this.realUrl = 'http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json';
        this.url = this.localUrl;
    }
    WifiDataService.prototype.getWifis = function () {
        var _this = this;
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().data.map(function (w) { return _this.mapToWifi(w); }); })
            .catch(this.handleError);
    };
    WifiDataService.prototype.handleError = function (error) {
        console.error('An Error occurred', error);
        return Promise.reject(error.message || error);
    };
    WifiDataService.prototype.mapToWifi = function (org) {
        return {
            id: org.id,
            coordinates: {
                lat: org.point_lat,
                lng: org.point_lng
            },
            location: {
                name: org.locatie,
                street: org.straat,
                nr: org.huisnr,
                code: org.postcode,
                city: org.gemeente
            }
        };
    };
    WifiDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WifiDataService);
    return WifiDataService;
}());
exports.WifiDataService = WifiDataService;
//# sourceMappingURL=wifi-data.service.js.map