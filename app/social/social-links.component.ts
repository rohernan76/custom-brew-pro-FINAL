import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
	selector: 'social-link',
	template: `
		<div id="social-links">
			<span>Testing social-link component
				<img src="images/fb-logo.png">
			</span>
		</div>
	`,
	styleUrls: ['app/social/social-links.component.css'],
	directives: [HomeComponent]
})
export class SocialLinkComponent {


}	
