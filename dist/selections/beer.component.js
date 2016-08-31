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
var beer_service_1 = require('../beer.service');
var BeerComponent = (function () {
    function BeerComponent(beerService) {
        this.beerService = beerService;
    }
    BeerComponent.prototype.test = function () {
        this.beerService.getAllBeers().subscribe(function () {
            var beerArr = this.beerService.beers;
            console.log(beerArr);
        }.bind(this));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BeerComponent.prototype, "colorValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BeerComponent.prototype, "bitterValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BeerComponent.prototype, "alcoholValue", void 0);
    BeerComponent = __decorate([
        core_1.Component({
            selector: 'beers',
            template: "{{colorValue}} {{bitterValue}} {{alcoholValue}}\n\t\t\t<br>\n\t\t\t<h1>BeerComponent</h1>\n\t\t\t<button (click)=\"test()\">CLICK ME</button>\n\t"
        }), 
        __metadata('design:paramtypes', [beer_service_1.BeerService])
    ], BeerComponent);
    return BeerComponent;
}());
exports.BeerComponent = BeerComponent;
//# sourceMappingURL=beer.component.js.map