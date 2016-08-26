import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContainer }  from './main-container.component';
import { ApiService } from "./api.service";
import { HTTP_PROVIDERS } from "@angular/http";
import { provideRouter } from '@angular/router';
import { routes } from './routes';
// import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

// declarations for routes ???
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'; 
import { SelectionsComponent } from './selections/selections.component';
import { ContactComponent } from './contact/contact.component'; 
// import { AuthComponent } from './auth.component'; 

@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [
		MainContainer,
		HomeComponent,
		AboutComponent,
		SelectionsComponent,
		ContactComponent,
		// AuthComponent
	],
	bootstrap:    [ MainContainer ],
	providers:    [
		ApiService, 
		...HTTP_PROVIDERS,
		provideRouter(routes),
		// AuthService
	]
})
export class AppModule { }
