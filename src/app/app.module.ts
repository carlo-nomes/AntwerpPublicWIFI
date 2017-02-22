import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import {AppComponent}  from './components/app.component';
import {WifiDataService} from "./services/wifi-data.service";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [WifiDataService]
})
export class AppModule {
}
