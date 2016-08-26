import { Component } from '@angular/core';


@Component({
	selector: 'slider',
	template: `

	
	<label for="color">Color: {{colorValue | json}}</label>
	<input type=range [(ngModel)]="colorValue" type="range" id="myRange" min="0" max="40" value="5">

	<label for="bitter">Bitterness: {{bitterValue | json}}</label>
	<input type=range  [(ngModel)]="bitterValue" type="range" id="myRange" min="0" max="100" value="5">

	<label for="abv">Alcohol By Volume (ABV): {{abvValue | json}}</label>
	<input type=range  [(ngModel)]="abvValue" type="range" id="myRange" min="0" max="20" value="5">

	<div id="slider"></div>
	<h3 class="slider">slideValue = {{colorValue | json}}</h3>
	<h3 class="slider">bitterValue = {{bitterValue | json}}</h3>
	<h3 class="slider">abvValue = {{abvValue |json}}</h3>
	<button (click)="test()">testing</button>
	`,
	styleUrls: ['app/selections/slider.component.css']
})
export class SliderComponent {
	colorValue = 0;
	bitterValue = 0;
	abvValue = 0;
	test(){
		console.log(this.colorValue, "color");
		console.log(this.bitterValue, "bitter");
		console.log(this.abvValue, "abv");
	}
	// create a new service 
	// then call the server and give it the slider value
	// 

}

// <input type="range">. 

// input[type=range]

