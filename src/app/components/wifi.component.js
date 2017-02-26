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
var wifi_data_service_1 = require("../services/wifi-data.service");
var WifiComponent = (function () {
    function WifiComponent(wifiService) {
        this.wifiService = wifiService;
    }
    WifiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wifiService.getWifis().then(function (r) {
            _this.wifis = r;
            _this.wifis.sort(function (a, b) { return a.id - b.id; });
            _this.isOrderdByIdAsc = true;
        });
    };
    WifiComponent.prototype.orderById = function () {
        if (this.isOrderdByIdAsc) {
            this.wifis.sort(function (a, b) { return b.id - a.id; });
            this.isOrderdByIdAsc = false;
            this.isOrderdByLocationAsc = false;
            this.isOrderdByStreetAsc = false;
        }
        else {
            this.wifis.sort(function (b, a) { return b.id - a.id; });
            this.isOrderdByIdAsc = true;
            this.isOrderdByLocationAsc = false;
            this.isOrderdByStreetAsc = false;
        }
    };
    WifiComponent.prototype.orderByLocation = function () {
        if (this.isOrderdByLocationAsc) {
            this.wifis.sort(function (a, b) { return b.location.name.localeCompare(a.location.name); });
            this.isOrderdByIdAsc = false;
            this.isOrderdByLocationAsc = false;
            this.isOrderdByStreetAsc = false;
        }
        else {
            this.wifis.sort(function (b, a) { return b.location.name.localeCompare(a.location.name); });
            this.isOrderdByIdAsc = false;
            this.isOrderdByLocationAsc = true;
            this.isOrderdByStreetAsc = false;
        }
    };
    WifiComponent.prototype.orderByAddress = function () {
        if (this.isOrderdByStreetAsc) {
            this.wifis.sort(function (a, b) { return b.location.city.concat(b.location.street).concat(b.location.nr).localeCompare(a.location.city.concat(a.location.street).concat(a.location.nr)); });
            this.isOrderdByIdAsc = false;
            this.isOrderdByLocationAsc = false;
            this.isOrderdByStreetAsc = false;
        }
        else {
            this.wifis.sort(function (b, a) { return b.location.city.concat(b.location.street).concat(b.location.nr).localeCompare(a.location.city.concat(a.location.street).concat(a.location.nr)); });
            this.isOrderdByIdAsc = false;
            this.isOrderdByLocationAsc = false;
            this.isOrderdByStreetAsc = true;
        }
    };
    WifiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wifi',
            templateUrl: '../partial_html/wifi.component.html'
        }), 
        __metadata('design:paramtypes', [wifi_data_service_1.WifiDataService])
    ], WifiComponent);
    return WifiComponent;
}());
exports.WifiComponent = WifiComponent;
//# sourceMappingURL=wifi.component.js.map