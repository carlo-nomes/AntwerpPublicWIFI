import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";

import {WifiDataService} from "./services/wifi-data.service";
import {FacebookService} from "./services/facebook.service";
import {UserService} from "./services/user.service";

import {AppComponent}  from './components/app.component';
import {LoginComponent} from "./components/login.component";
import {MapComponent} from "./components/map.component";


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, LoginComponent, MapComponent],
  bootstrap: [AppComponent],
  providers: [WifiDataService, FacebookService, UserService]
})
export class AppModule {
}
