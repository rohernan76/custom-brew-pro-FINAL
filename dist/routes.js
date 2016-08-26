// describe the routes for our application
"use strict";
var about_component_1 = require('./about/about.component');
var selections_component_1 = require('./selections/selections.component');
var contact_component_1 = require('./contact/contact.component');
var home_component_1 = require('./home/home.component');
// import { AuthComponent } from './auth.component';
// import { AuthService } from './auth.service';
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    },
    {
        path: 'selections',
        component: selections_component_1.SelectionsComponent,
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent,
    },
];
//# sourceMappingURL=routes.js.map