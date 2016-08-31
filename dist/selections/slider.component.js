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
var beer_details_component_1 = require('./beer-details.component');
var SliderComponent = (function () {
    function SliderComponent(beerService) {
        this.beerService = beerService;
        this.colorValue = 0;
        this.bitterValue = 0;
        this.alcoholValue = 0;
    }
    SliderComponent.prototype.onChange = function (evt) {
        this.beerService.getBestBeer(this.colorValue, this.bitterValue, this.alcoholValue);
        // console.log("changed slider");
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            directives: [beer_details_component_1.BeerDetailsComponent],
            template: "\n\t\t<div class=\"container-fluid topTitle\">Pick Your Own Style</div>\n\t\t<div class=\"\" id=\"sliders\">\n\t\t\t<div class=\"slider-container\">\n\t\t\t\t<label for=\"color\">Color:</label>\n\t\t\t\t<input type=range [(ngModel)]=\"colorValue\" (ngModelChange)=\"onChange($event)\" \n\t\t\t\ttype=\"range\" id=\"myRange\" min=\"1\" max=\"40\" value=\"1\">\n\t\t\t\t<label for=\"color\" class=\"below\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>Color (SRM)</span>\n\t\t\t\t\t\t<span>{{colorValue | json}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"slider-container\">\n\t\t\t\t<label for=\"bitter\">Bitterness:</label>\n\t\t\t\t<input type=range [(ngModel)]=\"bitterValue\" (ngModelChange)=\"onChange($event)\"  \n\t\t\t\ttype=\"range\" id=\"myRange\" min=\"1\" max=\"70\" value=\"1\">\n\t\t\t\t<label for=\"bitter\" class=\"below\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>Bitteness (IBU)</span>\n\t\t\t\t\t\t<span>{{bitterValue | json}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"slider-container\">\n\t\t\t\t<label for=\"abv\">Alcohol By Volume (ABV):</label>\n\t\t\t\t<input type=range [(ngModel)]=\"alcoholValue\" (ngModelChange)=\"onChange($event)\"  \n\t\t\t\ttype=\"range\" id=\"myRange\" min=\"1\" max=\"12\" value=\"1\">\n\t\t\t\t<label for=\"abv\" class=\"below\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>Alcohol (ABV)</span>\n\t\t\t\t\t\t<span>{{alcoholValue | json}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\n\t<div id=\"container-fluid\">\n\t\t<beer-details\n\t\t\t*ngFor=\"let beer of beerService.bestBeers; let i = index\"\n\t\t\t[beer]=\"beer\"\n\t\t></beer-details>\n\t</div>\n\n\t",
            styleUrls: ['app/selections/slider.component.css']
        }), 
        __metadata('design:paramtypes', [beer_service_1.BeerService])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map