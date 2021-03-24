import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, CommonService } from '.';
import { Constants } from './../enums';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authService: AuthService, private commonService: CommonService) { }

  public canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.commonService.showNavigation = false;
      this.router.navigate([''], { queryParams: { [Constants.QpPage]: Constants.PageLogin } });
      return false;
    }
    this.commonService.showNavigation = true;
    return true;
  }

}
