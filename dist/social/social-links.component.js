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
var home_component_1 = require('../home/home.component');
var SocialLinkComponent = (function () {
    function SocialLinkComponent() {
    }
    SocialLinkComponent = __decorate([
        core_1.Component({
            selector: 'social-link',
            template: "\n\t\t<div id=\"social-links\">\n\t\t\t<span>Testing social-link component\n\t\t\t\t<img src=\"images/fb-logo.png\">\n\t\t\t</span>\n\t\t</div>\n\t",
            styleUrls: ['app/social/social-links.component.css'],
            directives: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SocialLinkComponent);
    return SocialLinkComponent;
}());
exports.SocialLinkComponent = SocialLinkComponent;
//# sourceMappingURL=social-links.component.js.map