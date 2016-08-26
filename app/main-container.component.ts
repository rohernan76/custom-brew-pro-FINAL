import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
	selector: 'main-container',
	template: `
	<div>
		<nav class='navbar navbar-default'>
			<ul class='nav navbar-nav'>
				<li [class.active]="router.isActive('/', true)">
					<a [routerLink]="['']">Home</a>
				</li>
				<li [class.active]="router.isActive('/about', true)">
					<a [routerLink]="['about']">About</a>
				</li>
				<li [class.active]="router.isActive('/', true)">
					<a href="custombrewpro.com" class="logo" title="Home"><img src="./images/homebrew-logo.jpg" /></a>
				</li>				
				<li [class.active]="router.isActive('/selections', true)">
					<a [routerLink]="['selections']">Selections</a>
				</li>
				<li [class.active]="router.isActive('/contact', true)">
					<a [routerLink]="['contact']">Contact</a>
				</li>
			</ul>
		</nav>
		<router-outlet></router-outlet>
	</div>
	`,
	directives: [ ...ROUTER_DIRECTIVES, HomeComponent]
})
export class MainContainer {

	constructor ( private router: Router) {

	} // dependency injection on the router

}



