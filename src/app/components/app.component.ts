import {Component, OnInit} from '@angular/core';

import {WifiDataService} from "../services/wifi-data.service";
import {Wifi} from "../entities/wifi";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../partial_html/app.component.html'
})
export class AppComponent implements OnInit {
  wifis: Wifi[] = [];

  constructor(private wifiDataService: WifiDataService) {
  }

  ngOnInit(): void {
    this.wifiDataService.getWifis().then(wifis => this.wifis = wifis);
  }
}
