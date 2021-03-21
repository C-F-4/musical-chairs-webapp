import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoggerService, UserService } from './../services';
import { Constants } from './../enums';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private loggerService: LoggerService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  async onLogout(evt: Event): Promise<void> {
    evt.preventDefault();
    const isLoggedOut = await this.userService.logout();
    if (!isLoggedOut) {
      this.loggerService.log('ERROR: Logout Failure');
      return;
    }
    this.router.navigate([''], { queryParams: { [Constants.QpPage]: Constants.PageLogin } });
  }

}
