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
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var MainContainer = (function () {
    function MainContainer(router) {
        this.router = router;
    } // dependency injection on the router
    MainContainer = __decorate([
        core_1.Component({
            selector: 'main-container',
            template: "\n\t<div>\n\t\t<nav class='navbar navbar-default'>\n\t\t\t<ul class='nav navbar-nav'>\n\t\t\t\t<li [class.active]=\"router.isActive('/', true)\">\n\t\t\t\t\t<a [routerLink]=\"['']\">Home</a>\n\t\t\t\t</li>\n\t\t\t\t<li [class.active]=\"router.isActive('/about', true)\">\n\t\t\t\t\t<a [routerLink]=\"['about']\">About</a>\n\t\t\t\t</li>\n\t\t\t\t<li [class.active]=\"router.isActive('/', true)\">\n\t\t\t\t\t<a href=\"custombrewpro.com\" class=\"logo\" title=\"Home\"><img src=\"./images/homebrew-logo.jpg\" /></a>\n\t\t\t\t</li>\t\t\t\t\n\t\t\t\t<li [class.active]=\"router.isActive('/selections', true)\">\n\t\t\t\t\t<a [routerLink]=\"['selections']\">Selections</a>\n\t\t\t\t</li>\n\t\t\t\t<li [class.active]=\"router.isActive('/contact', true)\">\n\t\t\t\t\t<a [routerLink]=\"['contact']\">Contact</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t",
            directives: router_1.ROUTER_DIRECTIVES.concat([home_component_1.HomeComponent])
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MainContainer);
    return MainContainer;
}());
exports.MainContainer = MainContainer;
//# sourceMappingURL=main-container.component.js.map