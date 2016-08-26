import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/observable";

@Injectable()
export class BeerService {
	private beers = [];
	constructor(private apiService: ApiService) {

	}

	getBestBeer(color, bitterness, alcohol) {
		var beers = this.getAllBeers();
		var scores = beers.map(function(beer){
			distance = Math.sqrt((beer.color - color) + (beer.bitterness - bitterness) + (beer.alcohol - alcohol));

			// distance function in 3 dminensions 
			// return distance between beer and color, bitterness and abv
			// Math.sqrt((beer.color - color)2 + (beer.bitterness - bitterness)2 + (beer.alcohol - alcohol)2
		};

		return scores; // scores is an observable -- we have to subscribe to it in order to get values
	}
		this.apiService.get('/:id').subscribe(function(res){

			}); 

	getAllBeers() {
		return new Observable(function(observer) {
			if (this.beers) {
				observer.next(this.beers);
				observer.complete();
				return;
			}

			this.apiService.get('/getbeer').subscribe(function(res)  {
				this.beers = res; 
				observer.next(this.beers);
				observer.complete();
			}.bind(this));
		}.bind(this));
	}
} 

