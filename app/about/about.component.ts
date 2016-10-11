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
							<p>Blue Mancha Brewing Company (BMBC) started in 2008 when my wife bought me a craft homebrew kit. The first beer I made was my favorite style: pale ale.</p>
							<p>In the early days, I brewed a batch only every 3 to 4 months, mainly due to space constrictions and a cumbersome technique. Today is a different story. My brewing technique has improved, and I have plenty of space to accommodate multiple batches at once. My curiosity for the scientific aspects of homebrewing led me to explore techniques that allow deeper customization: the grain bill, yeast characteristics, boil time, etc. Sometimes I am in the kitchen for 10 hours brewing, and I don't even realize how fast time is flying. We even grow our own hops now in our home garden. It's amazing to smell those amazingly fresh hops, grown just a few feet away from our wooden deck.<</p>
							<p>I admit I love beer, and I love the special craft we call homebrewing. Last summer, a very close friend approached me about brewing a custom beer their wedding. Since I had created a special brew for my own wedding, I began to imagine custom brewing for friends and family as a side business. This website, designed with the incredible support from CodeCraft instructors Erty "Pizarro" Seidol and Sarah "Strong Crutch" Huynh, is the first step in that direction. I hope you continue to explore my website and contact me if you have any questions. Cheers!</p>
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
