import {Component, OnInit} from '@angular/core';

import {WifiDataService} from "../services/wifi-data.service";
import {Wifi} from "../entities/wifi";
import {FacebookService} from "../services/facebook.service";
import {UserService} from "../services/user.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../partial_html/app.component.html'
})
export class AppComponent implements OnInit {

  title = "Public WIFI Antwerp";

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

  }
}
