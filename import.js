
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
// var Snippet = require('./Snippet.js');
var BeerSchema = require('./beer.schema.js');
var Beer = mongoose.model('Beer', BeerSchema);

beer = new Beer({
	id: 1,
	name: "American Brett",
	color: 10,
	bitterness: 1, 
	alcohol: 1,
	image: "images/beer-images/american-brett.jpg",
	rating: 0,
	description: "These unique beers vary in color and can take on the hues of added fruits or other ingredients. Horsey, goaty, leathery, phenolic and some fruity acidic character derived from Brettanomyces organisms may be evident, but in balance with other components of the beer. Brett beer and sour beer are not synonymous.",
	category: "WILD/SOUR BEERS",
	comments: "TBD"
};
beer.save();

beer = new Beer({
	id: 2,
	name: "American Lager",
	color: 6,
	bitterness: 15, 
	alcohol: 4,
	image: "images/beer-images/american-lager.jpg",
	rating: 0,
	description: "American lager has little in the way of hop and malt character. A straw to gold, very clean and crisp, highly carbonated lager.",
	category: "PILSENERS AND PALE LAGERS",
	comments: "TBD"
};
beer.save();

beer = new Beer({
	id: 3,
	name: "Berliner-Style Weisse",
	color: 4,
	bitterness: 6, 
	alcohol: 3,
	image: "images/beer-images/berliner-style-weisse.jpg",
	rating: 0,
	description: "Low in alcohol and refreshingly tart, and often served with a flavored syrup like Woodruff or raspberry, this German-style wheat ale presents a harmony between yeast and lactic acid. These beers are very pale in color, and may be cloudy as they are often unfiltered. Hops are not a feature of this style, but these beers often do showcase esters. Traditional versions often showcase Brettanomyces yeast. Growing in popularity in the U.S., where many brewers are now adding traditional and exotic fruits to the recipe, resulting in flavorful finishes with striking, colorful hues. These beers are incredible when pairing. Bitterness, alcohol and residual sugar are very low, allowing the beer’s acidity, white bread and graham cracker malt flavors to shine. Carbonation is very high, adding to the refreshment factor this style delivers. Many examples of this style contain no hops and thus no bitterness at all.",
	category: "WHEAT BEERS",
	comments: "TBD"
};
beer.save();

beer = new Beer({
	id: 4,
	name: "American Sour",
	color: 10,
	bitterness: 10, 
	alcohol: 5,
	image: "images/beer-images/american-sour.jpg",
	rating: 0,
	description: "The acidity present in these beers is usually in the form of lactic, acetic and other organic acids naturally developed with acidified malt in the mash, or produced during fermentation by the use of various microorganisms. These beers may derive their sour flavor from pure cultured forms of souring agents or from the influence of barrel aging.",
	category: "WILD/SOUR BEERS",
	comments: "TBD"
};
beer.save();

beer = new Beer({
	id: 5,
	name: "Rye Beer",
	color: 10,
	bitterness: 10, 
	alcohol: 5,
	image: "images/beer-images/american-lager.jpg",
	rating: 0,
	description: "In darker versions, malt flavor can optionally include low roasted malt characters (evident as cocoa/chocolate or caramel) and/or aromatic toffee-like, caramel, or biscuit-like characters. Low-level roasted malt astringency is acceptable when balanced with low to medium malt sweetness. Hop flavor is low to medium-high. Hop bitterness is low to medium. These beers can be made using either ale or lager yeast. The addition of rye to a beer can add a spicy or pumpernickel character to the flavor and finish. Color can also be enhanced and may become more red from the use of rye. The ingredient has come into vogue in recent years in everything from stouts to lagers, but is especially popular with craft brewers in India pale ales. To be considered an example of the style, the grain bill should include sufficient rye such that rye character is evident in the beer.",
	category: "SPECIALTY BEERS ",
	comments: "TBD"
};
beer.save();

beer = new Beer({
	id: 6,
	name: "American Amber Ale",
	color: 20,
	bitterness: 45, 
	alcohol: 6,
	image: "images/beer-images/amber-ale.jpg",
	rating: 0,
	description: "American-style amber ales have medium-high to high maltiness with medium to low caramel character. They are characterized by American-variety hops, which produce medium hop bitterness, flavor and aroma. American ambers are usually darker in color, have more caramel flavor and less hop aromatics, and may have more body. This style was first made popular by brewers from California and the Pacific Northwest.",
	category: "PALE ALES",
	comments: "TBD"
};
beer.save();