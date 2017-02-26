import {Component, OnInit} from '@angular/core';

import {UserService} from "../services/user.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../partial_html/app.component.html',

})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

  }
}
