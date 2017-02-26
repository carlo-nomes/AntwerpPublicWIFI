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

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  constructor(private wifiDataService: WifiDataService) {
  }

  ngOnInit(): void {
    this.wifiDataService.getWifis().then(r => this.wifis = r);
  }
}
