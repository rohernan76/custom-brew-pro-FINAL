import { Component } from '@angular/core';

@Component({
	selector: 'contact',
	template: `
	<div class="container">  
		<form id="contact" action="" method="post">
		<h3>Quick Contact</h3>
		<h4>Contact me today, and let's get down to beer tax! Expect a reply within 24 hours!</h4>
		<fieldset>
			<input placeholder="Your name" type="text" tabindex="1" required autofocus/>
		</fieldset>
		<fieldset>
			<input placeholder="Your Email Address" type="email" tabindex="2" required/>
		</fieldset>
		<fieldset>
			<input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
		</fieldset>
		<fieldset>
			<input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required/>
		</fieldset>
		<fieldset>
			<textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
		</fieldset>
		<fieldset>
			<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
		</fieldset>
		</form>
</div>
	`,
	styleUrls: ['app/contact/contact.component.css']
})
export class ContactComponent {

}
