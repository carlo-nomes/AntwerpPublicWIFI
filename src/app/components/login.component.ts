import {Component, OnInit} from "@angular/core";
import {FacebookService} from "../services/facebook.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

declare const FB: any;

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: '../partial_html/login.component.html'
})


export class LoginComponent implements OnInit {
  constructor(private router: Router, private fbService: FacebookService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.fbService.getLoginStatus().then(r => this.statusChangeCallback(r));
  }

  onLogin(): void {
    this.fbService.login().then(r => {
      this.statusChangeCallback(r);
      this.fbService.isLoggedIn().then(r => {
        this.statusChangeCallback(r);
        this.router.navigate(['/table']);
      });

    });
  }

  onLogout(): void {
    this.fbService.logout().then(r => {
      this.statusChangeCallback(r);
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
