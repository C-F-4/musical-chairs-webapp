import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService, CommonService } from '.';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuardService {

  constructor(
    private router: Router,
    private authService: AuthService,
    private commonService: CommonService
  ) { }

  public canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.commonService.showNavigation = true;
      this.router.navigate(['dashboard']);
      return false;
    }
    this.commonService.showNavigation = false;
    return true;
  }

}
