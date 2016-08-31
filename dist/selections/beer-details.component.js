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
var BeerDetailsComponent = (function () {
    function BeerDetailsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BeerDetailsComponent.prototype, "beer", void 0);
    BeerDetailsComponent = __decorate([
        core_1.Component({
            selector: 'beer-details',
            styles: ["\n\t\timg { \n\t\tmargin: auto;\n\t\tdisplay: block;\n\t\t}\n\t"],
            template: "\n\n\t<div class=\"flip-container\" ontouchstart=\"this.classList.toggle('hover');\">\n\t\t<div class=\"flipper\">\n\t\t\t<div class=\"front\">\n\t\t\t\t<div class=\"flex-item front\"><img class=\"beerImage\" src=\"{{ beer.beerImage }}\"></div>\n\t\t\t\t<div>{{beer.beerName}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"back\">\n\t\t\t\t<div class=\"flex-item info\">\n\t\t\t\t\t<p class=\"name\">{{beer.beerName}}</p>\n\t\t\t\t\t<p class=\"desc\">{{beer.beerDescrip}}</p>\n\t\t\t\t\t<p class=\"cat\">{{beer.beerCat}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"cart\">\n\t\t\t\t\t<img class=\"cart\" src='http://www.theseunitedstates.net/wp-content/uploads/2011/04/icon_shopcart.png?w=147'>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t",
            styleUrls: ['app/selections/beer-details.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());
exports.BeerDetailsComponent = BeerDetailsComponent;
//# sourceMappingURL=beer-details.component.js.map