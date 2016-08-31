
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var BeerSchema = require('./beer.schema.js');
var Beer = mongoose.model('Beer', BeerSchema);

beer = new Beer({
	id: 1,
	name: "American Brett",
	color: 10,
	bitterness: 30, 
	alcohol: 4,
	image: "images/beer-images/american-brett.jpg",
	rating: 0,
	description: "These unique beers vary in color and can take on the hues of added fruits or other ingredients. Horsey, goaty, leathery, phenolic and some fruity acidic character derived from Brettanomyces organisms may be evident, but in balance with other components of the beer. Brett beer and sour beer are not synonymous.",
	category: "WILD/SOUR BEERS",
	comments: "TBD"
});
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
});
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
});
beer.save();

beer = new Beer({
	id: 4,
	name: "American Sour",
	color: 10,
	bitterness: 70, 
	alcohol: 6,
	image: "images/beer-images/american-sour.jpg",
	rating: 0,
	description: "The acidity present in these beers is usually in the form of lactic, acetic and other organic acids naturally developed with acidified malt in the mash, or produced during fermentation by the use of various microorganisms. These beers may derive their sour flavor from pure cultured forms of souring agents or from the influence of barrel aging.",
	category: "WILD/SOUR BEERS",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 5,
	name: "Rye Beer",
	color: 25,
	bitterness: 10, 
	alcohol: 5,
	image: "images/beer-images/rye-beer.jpg",
	rating: 0,
	description: "In darker versions, malt flavor can optionally include low roasted malt characters (evident as cocoa/chocolate or caramel) and/or aromatic toffee-like, caramel, or biscuit-like characters. Low-level roasted malt astringency is acceptable when balanced with low to medium malt sweetness. Hop flavor is low to medium-high. Hop bitterness is low to medium. These beers can be made using either ale or lager yeast. The addition of rye to a beer can add a spicy or pumpernickel character to the flavor and finish. Color can also be enhanced and may become more red from the use of rye. The ingredient has come into vogue in recent years in everything from stouts to lagers, but is especially popular with craft brewers in India pale ales. To be considered an example of the style, the grain bill should include sufficient rye such that rye character is evident in the beer.",
	category: "SPECIALTY BEERS ",
	comments: "TBD"
});
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
});
beer.save();

beer = new Beer({
	id: 7,
	name: "American Black Ale",
	color: 38,
	bitterness: 70, 
	alcohol: 7,
	image: "images/beer-images/american-black-ale.jpg",
	rating: 0,
	description: "Characterized by the perception of caramel malt and dark roasted malt flavor and aroma. Hop bitterness is perceived to be medium-high to high. Hop flavor and aroma are medium-high. Fruity, citrus, piney, floral and herbal character from hops of all origins may contribute to the overall experience. This beer is often called a black IPA or Cascadian dark ale.",
	category: "SPECIALTY BEERS",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 8,
	name: "American Brown Ale",
	color: 26,
	bitterness: 45, 
	alcohol: 6,
	image: "images/beer-images/american-brown-ale.jpg",
	rating: 0,
	description: "Roasted malt, caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American-style brown ales have evident low to medium hop flavor and aroma and medium to high hop bitterness. The history of this style dates back to U.S. homebrewers who were inspired by English-style brown ales and porters. It sits in flavor between those British styles and is more bitter than both.",
	category: "BROWN ALES",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 9,
	name: "American Imperial Porter",
	color: 40,
	bitterness: 50, 
	alcohol: 12,
	image: "images/beer-images/american-imperial-porter.jpg",
	rating: 0,
	description: "Definitively American, these porters should have no roasted barley flavors or strong burnt/black malt character. Medium caramel and cocoa-like sweetness is present, with complementing hop character and malt-derived sweetness.",
	category: "PORTERS",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 10,
	name: "American Pale Ale",
	color: 14,
	bitterness: 45, 
	alcohol: 6,
	image: "images/beer-images/american-pale-ale.jpg",
	rating: 0,
	description: "An American interpretation of a classic English style. Characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character, producing medium to medium-high hop bitterness, flavor and aroma. American-style pale ales have medium body and low to medium maltiness that may include low caramel malt character.ve more body. This style was first made popular by brewers from California and the Pacific Northwest.",
	category: "PALE ALES",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 11,
	name: "American India Pale Ale/IPA",
	color: 12,
	bitterness: 70, 
	alcohol: 7,
	image: "images/beer-images/american-india-pale-ale.jpg",
	rating: 0,
	description: "Characterized by floral, fruity, citrus-like, piney or resinous American-variety hop character, this style is all about hop flavor, aroma and bitterness. This has been the most-entered category at the Great American Beer Festival for more than a decade, and is the top-selling craft beer style in supermarkets and liquor stores across the U.S.",
	category: "INDIA PALE ALES",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 12,
	name: "American Stout",
	color: 40,
	bitterness: 60, 
	alcohol: 9,
	image: "images/beer-images/american-stout.jpg",
	rating: 0,
	description: "A coffee- and chocolate-forward ale, but with a hop aroma and flavor, often from a citrus-forward variety. American stouts are bold, with a distinctive dry-roasted bitterness in the finish. Fruity esters should be low, but head retention high. The addition of oatmeal is acceptable in this style and lends to the body and head retention.",
	category: "STOUTS",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 13,
	name: "English-style Oatmeal Stout",
	color: 50,
	bitterness: 40, 
	alcohol: 9,
	image: "images/beer-images/english-style-oatmeal-stout.jpg",
	rating: 0,
	description: "The addition of oatmeal adds a smooth, rich body to these beers. Oatmeal stouts are dark brown to black in color. Roasted malt character is caramel-like and chocolate-like, and should be smooth and not bitter. Coffee-like roasted barley and malt aromas are prominent. This low- to medium-alcohol style is packed with darker malt flavors and a rich and oily body from oatmeal.",
	category: "STOUTS",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 14,
	name: "Pumpkin Ale",
	color: 50,
	bitterness: 70, 
	alcohol: 8,
	image: "images/beer-images/pumpkin-beer.jpg",
	rating: 0,
	description: "One of the most popular seasonal beers, this is a lager or ale that is brewed with fresh or processed pumpkin or winter squash. Since the fruit does not have much of a taste by itself, many craft brewers have taken to adding spices typically found in pumpkin pie, like cinnamon and clove. However, these flavors should not overpower the final product. Pumpkin can be found in everything from stouts to pale ales and pilseners.",
	category: "SPECIALTY BEERS",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 15,
	name: "Marley the Elder Double IPA",
	color: 50,
	bitterness: 40, 
	alcohol: 9,
	image: "images/beer-images/marley-the-elder-double-ipa.jpg",
	rating: 0,
	description: "This is one of my favorite beers made by yours truly! This particular beer was brewed in honor of our dog, Marley, the greatest Weimaraner this side of the mississippi, whom we lost in February 2015. The beer recipe as an actual clone of the world-renowned Pliny the Elder made by none other than Russian River Brewing Company. I brewed this beer at my home and the amount of hops alone that were required came out to 1.5 lbs! Needless to say, one or two of these and your pallete won't have any elbow room for other beers vying for your favor.",
	category: "INDIA PALE ALES",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 16,
	name: "Imperial Trumpkin Ale",
	color: 30,
	bitterness: 20, 
	alcohol: 8,
	image: "images/beer-images/imperial-trumpkin-ale-pumkpin.jpg",
	rating: 0,
	description: "One of the most popular fall beers, a pumpkin ale is perfect for watching the season go by. I homebrewed this particular batch at a time when I thought that the idea of Trump running for the highest office of the land was absolutely ludicrous. Little did I know he would snag the nomination for the GOP a few months later. By brewing this beer, I may have jinxed the whole nation! Anyway, the title 'Imperial' conveys two things. First, 'imperial' is an indication that the beer is big, bold, and beautiful regardless of the style. The hops and malts used during brewing are doubled or even tripled, and the resulting beer can pack quite an alcoholic punch ranging from 8% to 12% ABV. Second, since Trump is such an egomaniac and imperial pig, I figured that this name was perfect! Happy drinking and here's a toast to a bright future without Drumpf has our President!",
	category: "SPECIALTY BEERS",
	comments: "TBD"
});
beer.save();

beer = new Beer({
	id: 17,
	name: "Freedom Fawn Blonde Ale",
	color: 10,
	bitterness: 15, 
	alcohol: 4,
	image: "images/beer-images/freedom-fawn-blonde-ale.jpg",
	rating: 0,
	description: "This homebrew was made in honor of our newest addition to the pack, Cody 'The Coder' Hernandez, a 9 year old weimaraner rescue. The name 'Freedom Fawn' says it all: this boy busted out of a bad situation in Utah and ended up with us. He found his freedom and now sleeps like a fawn. He deserves the best retirement. Obviously the beer is a blonde ale which is a great beer to drink in the hot days of summer. The Blonde Ale is also known as a Golden Ale--these beers are often referred to as a starter ale for those new to craft brewing because it is the closest style to a lager in the ale family. They are light yellow to deep gold in color and are clear. Overall flavor is subdued (by comparison to other ales) and usually has a mild malt sweetness. Malts can also provide a mild biscuity or toasty flavor. Low to medium hop flavor and bitterness. Overall this is a lawnmower beer that is most commonly found in American brewpubs, although English Summer Ales and other beers also fit in this category.",
	category: "SPECIALTY BEERS",
	comments: "TBD"
});
beer.save();