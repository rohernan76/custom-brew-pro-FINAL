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
var api_service_1 = require("./api.service");
var BeerService = (function () {
    function BeerService(apiService) {
        this.apiService = apiService;
        this.beers = [];
    }
    BeerService.prototype.getBestBeer = function (color, bitterness, alcohol) {
        var beers = this.getAllBeers();
        var scores = beers.map(function (beer) {
            distance = Math.sqrt((beer.color - color) + (beer.bitterness - bitterness) + (beer.alcohol - alcohol));
            // distance function in 3 dminensions 
            // return distance between beer and color, bitterness and abv
            // Math.sqrt((beer.color - color)2 + (beer.bitterness - bitterness)2 + (beer.alcohol - alcohol)2
        });
        return scores; // scores is an observable -- we have to subscribe to it in order to get values
    };
    BeerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], BeerService);
    return BeerService;
}());
exports.BeerService = BeerService;
this.apiService.get('/:id').subscribe(function (res) {
});
getAllBeers();
{
    return new observable_1.Observable(function (observer) {
        if (this.beers) {
            observer.next(this.beers);
            observer.complete();
            return;
        }
        this.apiService.get('/getbeer').subscribe(function (res) {
            this.beers = res;
            observer.next(this.beers);
            observer.complete();
        }.bind(this));
    }.bind(this));
}
//# sourceMappingURL=beer.service.js.map