import { Injectable } from '@angular/core';

import { UserService } from '.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  public isAuthenticated(): boolean {
    if (this.userService.loggedUser?.id) {
      return true;
    }
    return false;
  }

}
