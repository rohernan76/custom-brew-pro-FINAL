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
var observable_1 = require("rxjs/observable");
var BeerService = (function () {
    function BeerService(apiService) {
        this.apiService = apiService;
        this.beers = [];
        this.bestBeers = [];
        this.getAllBeers().subscribe();
        // console.log("BeerService created");
    }
    BeerService.prototype.getBestBeer = function (colorValue, bitternessValue, alcoholValue) {
        this.getAllBeers().subscribe(function () {
            this.bestBeers = this.beers.map(function (beer) {
                var distance = Math.sqrt(Math.pow((beer.color - colorValue), 2) +
                    Math.pow((beer.bitterness - bitternessValue), 2) +
                    Math.pow((beer.alcohol - alcoholValue), 2));
                distance = Math.ceil(distance);
                // console.log(distance);
                return {
                    distance: distance,
                    beerName: beer.name,
                    beerImage: beer.image,
                    beerAlcohol: beer.alcohol,
                    beerColor: beer.color,
                    beerBitter: beer.bitterness,
                    beerDescrip: beer.description,
                    beerCat: beer.category,
                    beerRat: beer.rating,
                    beerComm: beer.comments
                };
            });
            this.bestBeers.sort(function (a, b) {
                return a.distance - b.distance;
            });
            this.bestBeers = this.bestBeers.slice(0, 3);
        }.bind(this));
    };
    BeerService.prototype.getAllBeers = function () {
        return new observable_1.Observable(function (observer) {
            if (this.beers.length) {
                observer.next(this.beers);
                observer.complete();
                return;
            }
            // console.log("Got beers!");
            this.apiService.get('/getbeer').subscribe(function (res) {
                // console.log(res);
                this.beers = res;
                observer.next(this.beers);
                observer.complete();
            }.bind(this));
        }.bind(this));
    };
    BeerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], BeerService);
    return BeerService;
}());
exports.BeerService = BeerService;
//# sourceMappingURL=beer.service.js.map