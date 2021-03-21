import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '.';
import { Constants } from './../enums';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate([''], { queryParams: { [Constants.QpPage]: Constants.PageLogin } });
      return false;
    }
    return true;
  }

}