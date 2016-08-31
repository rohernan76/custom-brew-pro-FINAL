import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'about',
	template: `
	<div id="Container">
		<div id="Outer">
			<div id="Wrapper-Page">
				<div id="WrapperBanner"></div>
				<div class="Left Page" id="LayoutColumn1">
					<div id="Sidebar">
						<dl>
							<dt><a href="/about-brewer/">About Us</a></dt>
							<dt><a href="/hop-operation/">Operation "Hop"</a></dt>
							<dt><a href="/contact/">Contact Me</a></dt>
							<dt><a href="/visit-us/">Visit the Brewhouse</a></dt>
							<dt><a href="/where-to-get-our-beers/">Where to Get My Beers</a></dt>
							<dt><a href="/awards/">Awards (Coming soon!)</a></dt>
							<dt><a href="/frequently-asked-questions/">FAQs</a></dt>
							<dt><a href="/brew-volunteer/">Volunteer Brew Day</a></dt>
						</dl>
					</div>
				</div>
				<div class="Content Page" id="LayoutColumn2">
					<div class="Block Moveable Panel" id="PageContent">
						<h1>About Me</h1>
						<div class="BlockContent">
							<p>Blue Mancha Brewing Company (BMBC) was founded in the beautiful city of Austin, TX (go longhorns!) in the year of our lord 2008. My beautiful wife, Bonnie "Bonita" Hernandez, bought me a beginner craft brewing kit. It <strong>only</strong> too me one-and-a-half years to open the kit, but as soon as I did, I was hooked (hook-em-horns!). The first beer   When Korbel decided to get out of the beer business in 2003, they generously offered the brewmaster, Vinnie Cilurzo and his wife Natalie the rights to the brand. Russian River Brewing might be something completely different now if it weren't for this incredible opportunity.</p>
							<p>In the early days on the Korbel property, Vinnie not only brewed the beer, but made the sales calls and deliveries as well. Eventually they hired a sales/delivery guy to help with all of that so he could focus on brewing! Korbel planted a small hop field where Vinnie received a "field" education on growing and brewing with "wet" hops. It was from those amazingly fresh hops, grown just a few yards away, that he made his first wet hops brew, "Hop-Time Harvest Ale".</p>
							<p>While the brewery was still operating at Korbel, the owner of the winery bought Lake Sonoma Winery at the top of Dry Creek in Healdsburg, California. There, they let Vinnie build a second brewery (adjacent to the winery) with its own tasting room and a million dollar view. The brewery at Lake Sonoma was only open for about a year, but Vinnie gained invaluable experience building a brewery from the ground up, and it was there that he started experimenting with beer in wine barrels.</p>
							<p>On April 3, 2004, Vinnie and Natalie reopened RRBC as a brewpub in downtown Santa Rosa to great success and began self-distributing to nearby clients. In 2008, they opened a production brewery about 1 mile from their brewpub allowing them to triple production, take on more accounts locally, and distribute some beer in 4 more states.</p>
							<p>As of 2012, RRBC employs over 60 part-time and full-time employees, and gives back to their community via charitable events such as their month-long Breast Cancer Fundraiser in October. The pub has become a community gathering place as well as a beer tourism destination. They also support local bands by hosting free live shows at the pub every weekend.</p>
							<p>As it turns out, demand is still greater than the supply, but they prefer to grow their business organically while focusing on efficiencies and quality. For now, it is easier to make better beer than it is to make more beer!</p>
							<div>
							<p>The history of Russian River Brewing Company would be incomplete without a little background on the people who own it, operate it, and are passionate about their brewery and craft beer in general!</p>
							<h3>Vinnie Cilurzo - Co-Owner/Brewmaster</h3>
							<p><img class="__mce_add_custom__" style="float: right;" title="Robert Hernandez" src="./images/Head-brewmaster-blue-mancha-brewing.jpeg" alt="Your brewer, Robert Hernandez" width="250" height="375">Vinnie grew up in a winemaking family in Temecula, California, where his parents owned Cilurzo Family Vineyards from the late 1970s to the early 2000s. Vinnie and his sister, Chenin, learned all aspects of owning and operating a small family winery. By the time he was 18 years old Vinnie had taught himself to homebrew in the basement of the winery. In 1994, Vinnie, a business partner and an investor opened Blind Pig Brewing Company in Temecula, California. They owned it for about 3 years during which time Vinnie earned awards at the Great American Beer Festival and the critical acclaim of being the first brewer to make a Double I.P.A. commercially (Blind Pig Inaugural Ale in 1994).</p>
	`
})
export class AboutComponent {

}
