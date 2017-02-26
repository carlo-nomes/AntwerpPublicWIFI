import {Component, OnInit} from "@angular/core";

import {Wifi} from "../entities/wifi";
import {WifiDataService} from "../services/wifi-data.service";
import {map} from "rxjs/operator/map";

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: '../partial_html/map.component.html'
})
export class MapComponent implements OnInit {
  private wifis: Wifi[];

  constructor(private wifiDataService: WifiDataService) {
  }

  ngOnInit(): void {
    this.wifiDataService.getWifis().then(r => this.wifis = r);
  }
}
