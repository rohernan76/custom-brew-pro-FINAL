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
var SliderComponent = (function () {
    function SliderComponent() {
        this.colorValue = 0;
        this.bitterValue = 0;
        this.abvValue = 0;
    }
    SliderComponent.prototype.test = function () {
        console.log(this.colorValue, "color");
        console.log(this.bitterValue, "bitter");
        console.log(this.abvValue, "abv");
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            template: "\n\n\t\n\t<label for=\"color\">Color: {{colorValue | json}}</label>\n\t<input type=range [(ngModel)]=\"colorValue\" type=\"range\" id=\"myRange\" min=\"0\" max=\"40\" value=\"5\">\n\n\t<label for=\"bitter\">Bitterness: {{bitterValue | json}}</label>\n\t<input type=range  [(ngModel)]=\"bitterValue\" type=\"range\" id=\"myRange\" min=\"0\" max=\"100\" value=\"5\">\n\n\t<label for=\"abv\">Alcohol By Volume (ABV): {{abvValue | json}}</label>\n\t<input type=range  [(ngModel)]=\"abvValue\" type=\"range\" id=\"myRange\" min=\"0\" max=\"20\" value=\"5\">\n\n\t<div id=\"slider\"></div>\n\t<h3 class=\"slider\">slideValue = {{colorValue | json}}</h3>\n\t<h3 class=\"slider\">bitterValue = {{bitterValue | json}}</h3>\n\t<h3 class=\"slider\">abvValue = {{abvValue |json}}</h3>\n\t<button (click)=\"test()\">testing</button>\n\t",
            styleUrls: ['app/selections/slider.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
// <input type="range">. 
// input[type=range]
//# sourceMappingURL=slider.component.js.map