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
var platform_browser_1 = require('@angular/platform-browser');
var main_container_component_1 = require('./main-container.component');
var api_service_1 = require("./api.service");
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
var routes_1 = require('./routes');
// import { AuthService } from './auth.service';
var forms_1 = require('@angular/forms');
var beer_service_1 = require('./beer.service');
// declarations for routes ???
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var selections_component_1 = require('./selections/selections.component');
var contact_component_1 = require('./contact/contact.component');
var beer_component_1 = require('./selections/beer.component');
var social_links_component_1 = require('./social/social-links.component');
var beer_details_component_1 = require('./selections/beer-details.component');
// import { AuthComponent } from './auth.component'; 
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                beer_details_component_1.BeerDetailsComponent,
                social_links_component_1.SocialLinkComponent,
                beer_component_1.BeerComponent,
                main_container_component_1.MainContainer,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                selections_component_1.SelectionsComponent,
                contact_component_1.ContactComponent
            ],
            bootstrap: [main_container_component_1.MainContainer],
            providers: [
                api_service_1.ApiService
            ].concat(http_1.HTTP_PROVIDERS, [
                router_1.provideRouter(routes_1.routes),
                beer_service_1.BeerService
            ])
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map