import {Component, OnInit} from "@angular/core";
import {WifiDataService} from "../services/wifi-data.service";
import {Wifi} from "../entities/wifi";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
@Component({
  moduleId: module.id,
  selector: 'wifi',
  templateUrl: '../partial_html/wifi.component.html'
})

export class WifiComponent implements OnInit {
  private wifis: Wifi[];
  private isOrderdByIdAsc: boolean;
  private isOrderdByLocationAsc: boolean;
  private isOrderdByStreetAsc: boolean;

  constructor(private wifiService: WifiDataService, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    if (!this.userService.isLoggedIn()) this.router.navigate(['/login']);

    this.wifiService.getWifis().then(r => {
      this.wifis = r;
      this.wifis.sort((a, b) => a.id - b.id);
      this.isOrderdByIdAsc = true;
    });
  }

  orderById(): void {
    if (this.isOrderdByIdAsc) {
      this.wifis.sort((a, b) => b.id - a.id);

      this.isOrderdByIdAsc = false;
      this.isOrderdByLocationAsc = false;
      this.isOrderdByStreetAsc = false;
    } else {
      this.wifis.sort((b, a) => b.id - a.id);

      this.isOrderdByIdAsc = true;
      this.isOrderdByLocationAsc = false;
      this.isOrderdByStreetAsc = false;
    }
  }

  orderByLocation(): void {
    if (this.isOrderdByLocationAsc) {
      this.wifis.sort((a, b) => b.location.name.localeCompare(a.location.name));

      this.isOrderdByIdAsc = false;
      this.isOrderdByLocationAsc = false;
      this.isOrderdByStreetAsc = false;
    } else {
      this.wifis.sort((b, a) => b.location.name.localeCompare(a.location.name));

      this.isOrderdByIdAsc = false;
      this.isOrderdByLocationAsc = true;
      this.isOrderdByStreetAsc = false;
    }
  }

  orderByAddress(): void {
    if (this.isOrderdByStreetAsc) {
      this.wifis.sort((a, b) => b.location.city.concat(b.location.street).concat(b.location.nr).localeCompare(a.location.city.concat(a.location.street).concat(a.location.nr)));

      this.isOrderdByIdAsc = false;
      this.isOrderdByLocationAsc = false;
      this.isOrderdByStreetAsc = false;
    } else {
      this.wifis.sort((b, a) => b.location.city.concat(b.location.street).concat(b.location.nr).localeCompare(a.location.city.concat(a.location.street).concat(a.location.nr)));

      this.isOrderdByIdAsc = false;
      this.isOrderdByLocationAsc = false;
      this.isOrderdByStreetAsc = true;
    }
  }
}
