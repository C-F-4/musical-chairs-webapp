import { Injectable } from '@angular/core';

import { LoggerService } from '.';
import { IUser } from '../interfaces';
import { User } from './../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public get loggedUser(): IUser {
    return this.user;
  }

  // Temporary - treat as mock dataset for server
  private user: any;
  private users: IUser[] = [];
  public get userlist(): IUser[] { return this.users; }
  public set userlist(users: IUser[]) { this.users.push(...users); }

  constructor(private loggerService: LoggerService) { }

  public async register(email: string, pass: string): Promise<boolean> {
    try {
      const doesUserExist = await this.checkIfExists(email);
      if (!doesUserExist) {
        this.user = new User(email, pass);
        return !!(this.users.push(this.user));
      } else {
        return false;
      }
    } catch (error) {
      this.loggerService.log(error);
      return false;
    }
  }

  public async login(email: string, pass: string): Promise<boolean> {
    try {
      this.user = await this.serverLogin(email, pass);
      return true;
    } catch (error) {
      this.loggerService.log(error);
      return false;
    }
  }

  public async logout(): Promise<boolean> {
    try {
      if (!this.user) {
        this.loggerService.log('ERROR: Already Logged Out!');
        return true;
      }
      const isLoggedOut = await this.serverLogout(this.user.id);
      if (isLoggedOut) {
        this.user = undefined;
      }
      return isLoggedOut;
    } catch (error) {
      this.loggerService.log(error);
      return false;
    }
  }

  private async serverLogin(email: string, pass: string): Promise<IUser> {
    const user = this.users.find(userEl => userEl.email === email && userEl.password === pass);
    if (!user) {
      throw new Error('User Not Found');
    }
    return user;
  }

  private async serverLogout(userId: string): Promise<boolean> {
    return true;
  }

  private async checkIfExists(email: string): Promise<boolean> {
    return !!this.users.find(user => user.email === email);
  }

}
