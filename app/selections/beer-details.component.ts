import { Component, Input, Output } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
	selector: 'beer-details',
	styles: [`
		img { 
		margin: auto;
		display: block;
		}
	`],
	template: `

	<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
		<div class="flipper">
			<div class="front">
				<div class="flex-item front"><img class="beerImage" src="{{ beer.beerImage }}"></div>
				<div>{{beer.beerName}}</div>
			</div>
			<div class="back">
				<div class="flex-item info">
					<p class="name">{{beer.beerName}}</p>
					<p class="desc">{{beer.beerDescrip}}</p>
					<p class="cat">{{beer.beerCat}}</p>
				</div>
				<div id="cart">
					<img class="cart" src='http://www.theseunitedstates.net/wp-content/uploads/2011/04/icon_shopcart.png?w=147'>
				</div>
			</div>

		</div>
	</div>

	`,
	styleUrls: ['app/selections/beer-details.component.css']
})
export class BeerDetailsComponent {

@Input() beer;




}



