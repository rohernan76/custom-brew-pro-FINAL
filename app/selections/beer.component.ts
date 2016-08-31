import { Component, Input, Output } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
	selector: 'beers',
	template: `{{colorValue}} {{bitterValue}} {{alcoholValue}}
			<br>
			<h1>BeerComponent</h1>
			<button (click)="test()">CLICK ME</button>
	`
})
export class BeerComponent {
	@Input() colorValue;
	@Input() bitterValue;
	@Input() alcoholValue;

	constructor(private beerService: BeerService) {}

	test() {
		this.beerService.getAllBeers().subscribe(function(){
			let beerArr = this.beerService.beers;
			console.log(beerArr);
		}.bind(this));
	}

}



