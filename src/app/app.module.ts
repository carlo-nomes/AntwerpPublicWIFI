import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from "./app-routing.module";

import {WifiDataService} from "./services/wifi-data.service";
import {FacebookService} from "./services/facebook.service";
import {UserService} from "./services/user.service";

import {AppComponent}  from './components/app.component';
import {LoginComponent} from "./components/login.component";
import {WifiComponent} from "./components/wifi.component";
import {SearchComponent} from "./components/search.component";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, NgbModule.forRoot()],
  declarations: [AppComponent, LoginComponent, WifiComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [WifiDataService, FacebookService, UserService]
})
export class AppModule {
}
