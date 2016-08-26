// describe the routes for our application

import { RouterConfig } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SelectionsComponent } from './selections/selections.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// import { AuthComponent } from './auth.component';
// import { AuthService } from './auth.service';

export const routes: RouterConfig = [
	{
		path: '',
		component: HomeComponent,
		// canActivate: [AuthService]
	},
	{
		path: 'about',
		component: AboutComponent,
		// canActivate: [AuthService]
	},
	{
		path: 'selections',
		component: SelectionsComponent,
		// canActivate: [AuthService]
	},
	{
		path: 'contact',
		component: ContactComponent,
		// canActivate: [AuthService]
	},
	// {
	// 	path: 'auth',
	// 	component: AuthComponent
	// }
];
