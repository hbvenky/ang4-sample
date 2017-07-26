import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2SocialLoginModule } from "angular2-social-login";


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { DataService } from './data.service';

let providers = {
  "google": {
    "clientId": "207020316616-45ov11m3bnepl8regcuogt31uto7lrcb.apps.googleusercontent.com"
  },
  "facebook": {
    "clientId": "1754301298158836",
    "apiVersion": "v2.10"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
	constructor(){}
}

Angular2SocialLoginModule.loadProvidersScripts(providers);