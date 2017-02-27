import {Component, OnInit} from '@angular/core';

import {UserService} from "../services/user.service";
import {FacebookService} from "../services/facebook.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../partial_html/app.component.html',

})
export class AppComponent implements OnInit {
  title = "Public wifi-hotspots in Antwerp";

  constructor(private userService: UserService, private fbService: FacebookService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onLogout(): void {
    this.fbService.logout().then(r => {
      this.statusChangeCallback(r);
      this.router.navigate(['/login']);
    });
  }

  private  statusChangeCallback(resp: any) {
    if (resp.status === 'connected') {
      console.log("User connected. id: " + resp.authResponse.userID);
    } else if (resp.status === 'not_authorized') {
      console.log("No user authorized");
    } else {
      console.log("No user logged in");
    }
    this.fbService.isLoggedIn().then(r => this.userService.setLoggedIn(r));
    this.fbService.getFirstName().then(r => this.userService.setUsername(r));
  }
}
