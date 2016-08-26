import { Component } from '@angular/core';
import { SliderComponent } from './slider.component';

@Component({
	selector: 'selections',
	template: `
		<slider></slider>
	`,
	directives: [SliderComponent]
})

export class SelectionsComponent {}
