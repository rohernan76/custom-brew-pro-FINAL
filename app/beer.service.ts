import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/observable";

@Injectable()
export class BeerService {
	public beers = [];
	public bestBeers = [];
	constructor(private apiService: ApiService) {
		this.getAllBeers().subscribe();
		// console.log("BeerService created");
	}

	getBestBeer(colorValue, bitternessValue, alcoholValue) {
		this.getAllBeers().subscribe(function() {
			this.bestBeers = this.beers.map(function(beer){
				var distance = Math.sqrt(
					Math.pow((beer.color - colorValue), 2) + 
					Math.pow((beer.bitterness - bitternessValue), 2) + 
					Math.pow((beer.alcohol - alcoholValue), 2)
				);
				distance = Math.ceil(distance);
				// console.log(distance);
				return {
					distance: distance,
					beerName: beer.name,
					beerImage: beer.image,
					beerAlcohol: beer.alcohol,
					beerColor: beer.color,
					beerBitter: beer.bitterness,
					beerDescrip: beer.description,
					beerCat: beer.category,
					beerRat: beer.rating,
					beerComm: beer.comments
				};
			});
			this.bestBeers.sort(function(a, b) {
				return a.distance - b.distance;
			});
			this.bestBeers = this.bestBeers.slice(0, 3);
		}.bind(this));
}

	getAllBeers() {
		return new Observable(function(observer) {
			if (this.beers.length) {
				observer.next(this.beers);
				observer.complete();
				return;
			}
			// console.log("Got beers!");
			this.apiService.get('/getbeer').subscribe(function(res) {
				// console.log(res);
				this.beers = res; 
				observer.next(this.beers);
				observer.complete();
			}.bind(this));
		}.bind(this));
	}
}

