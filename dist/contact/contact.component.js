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
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            template: "\n\t<div class=\"container\">  \n\t\t<form id=\"contact\" action=\"\" method=\"post\">\n\t\t<h3>Quick Contact</h3>\n\t\t<h4>Contact me today, and let's get down to beer tax! Expect a reply within 24 hours!</h4>\n\t\t<fieldset>\n\t\t\t<input placeholder=\"Your name\" type=\"text\" tabindex=\"1\" required autofocus/>\n\t\t</fieldset>\n\t\t<fieldset>\n\t\t\t<input placeholder=\"Your Email Address\" type=\"email\" tabindex=\"2\" required/>\n\t\t</fieldset>\n\t\t<fieldset>\n\t\t\t<input placeholder=\"Your Phone Number\" type=\"tel\" tabindex=\"3\" required/>\n\t\t</fieldset>\n\t\t<fieldset>\n\t\t\t<input placeholder=\"Your Web Site starts with http://\" type=\"url\" tabindex=\"4\" required/>\n\t\t</fieldset>\n\t\t<fieldset>\n\t\t\t<textarea placeholder=\"Type your Message Here....\" tabindex=\"5\" required></textarea>\n\t\t</fieldset>\n\t\t<fieldset>\n\t\t\t<button name=\"submit\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">Submit</button>\n\t\t</fieldset>\n\t\t</form>\n</div>\n\t",
            styleUrls: ['app/contact/contact.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map