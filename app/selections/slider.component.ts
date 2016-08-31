import { Component, Input, Output } from '@angular/core';
import { BeerService } from '../beer.service';
import { BeerComponent } from './beer.component';
import { BeerDetailsComponent } from './beer-details.component';
@Component({
	selector: 'slider',
	directives: [ BeerDetailsComponent ],
	template: `
		<div class="container-fluid topTitle">Pick Your Own Style</div>
		<div class="" id="sliders">
			<div class="slider-container">
				<label for="color">Color:</label>
				<input type=range [(ngModel)]="colorValue" (ngModelChange)="onChange($event)" 
				type="range" id="myRange" min="1" max="40" value="1">
				<label for="color" class="below">
					<div>
						<span>Color (SRM)</span>
						<span>{{colorValue | json}}</span>
					</div>
				</label>
			</div>

			<div class="slider-container">
				<label for="bitter">Bitterness:</label>
				<input type=range [(ngModel)]="bitterValue" (ngModelChange)="onChange($event)"  
				type="range" id="myRange" min="1" max="70" value="1">
				<label for="bitter" class="below">
					<div>
						<span>Bitteness (IBU)</span>
						<span>{{bitterValue | json}}</span>
					</div>
				</label>
			</div>

			<div class="slider-container">
				<label for="abv">Alcohol By Volume (ABV):</label>
				<input type=range [(ngModel)]="alcoholValue" (ngModelChange)="onChange($event)"  
				type="range" id="myRange" min="1" max="12" value="1">
				<label for="abv" class="below">
					<div>
						<span>Alcohol (ABV)</span>
						<span>{{alcoholValue | json}}</span>
					</div>
				</label>
			</div>
		</div>

	<div id="container-fluid">
		<beer-details
			*ngFor="let beer of beerService.bestBeers; let i = index"
			[beer]="beer"
		></beer-details>
	</div>

	`,
	styleUrls: ['app/selections/slider.component.css']
})
export class SliderComponent {

	colorValue: number;
	bitterValue: number;
	alcoholValue: number;

	constructor(private beerService: BeerService) {
	this.colorValue = 0;
	this.bitterValue = 0;
	this.alcoholValue = 0;
	}

	onChange(evt) {
		this.beerService.getBestBeer(this.colorValue, this.bitterValue, this.alcoholValue);
		// console.log("changed slider");
	}

	// 	test() {
	// 	console.log(this.colorValue, "color");
	// 	console.log(this.bitterValue, "bitter");
	// 	console.log(this.alcoholValue, "abv");
	// 	this.beerService.getBestBeer(this.colorValue, this.bitterValue, this.alcoholValue);
	// 	console.log('wrong everything');
	// }

	// getAllBeers() {
	// 	this.beerService.getAllBeers().subscribe();
	// }

	// getBestBeer() {
	// 	this.beerService.getBestBeer().subscribe();
	// }


	// TODO then call the server and give it the slider value
	// 

}




