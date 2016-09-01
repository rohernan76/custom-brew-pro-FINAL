import { Component } from '@angular/core';

@Component({
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
							<p>Blue Mancha Brewing Company (BMBC) was founded in the beautiful city of Austin, TX (go longhorns!) in the year of our lord 2008. My beautiful wife, Bonnie "Bonita" Hernandez, bought me a beginner craft brewing kit--she's always great at finding gifts that encourage me to explore my talents and creative side. Let's not dwell on the face that it too me <strong>only</strong> one-and-a-half years to open the kit, but as soon as I did, I was hooked (hook-em-horns!). The first beer I made was my favorite style, pale ale.</p>
							<p>In the early days, I not only brewed beer for my own personal consumption, but distributed it amongst my friends, family members, and colleagues. The feedback was exactly the kind of thing you hope to hear as a tyro brewer: "Wow, that tastes like beer!" This instant feedback get me going and soon enough I was brewing a batch every 3 or 4 months, which isn't a lot, mainly due to space contrictions. The real bottlenck (see what I did there) was the amount of beer bottles I had at my disposal, but with time I lurched over that hurdle and soon on my way to brewing case after case of beer.</p>
							<p>Today is a differently story. My brewing technique has been improving and I love every minute of it. The science side of homebrewing has really steered me away from the typical brewing operation and has me focusing on the grain bill (Mash ingredients, mash bill, or grain bill are those materials used in brewing from which a wort can be obtained for fermenting into alcohol), yeast characeteristics, boil time, etc. I could be in the kitchen for 10 hours at a time and I don't even realize how fast time is flying.</p>
							<div>
							<p>The next step that I am headed in his growing my own hops. My wife and I currently planted 6 different varieties of hops in our backyeard in Arvada. There is certainly an education to be had learning how to grow and brew with "wet" hops. It's amazing to smell those amazingly fresh hops, grown just a few feet away from our wooden deck.</p>
							<br>
							<hr>
							<h3>Robert Hernandez - Owner/Brewmaster</h3>
							<p><img class="__mce_add_custom__" style="float: right;" title="Robert Hernandez" src="./images/Head-brewmaster-blue-mancha-brewing-BEER.png" alt="Your brewer, Robert Hernandez" width="400" height="300">I grew up in Vista, California, which oddly became a brewing hub. By the time I was 27 years old, I had taught myself to homebrew with the use of a brewing kit that my wife gave me. My best, local renowned beer so far is my clone of Russian River's Pliny the Elder--except he called his "Marley the Elder" named after his first dogson, Marley. Cheers!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`,
	styleUrls: ['app/about/about.component.css']
})
export class AboutComponent {

}
