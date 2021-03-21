import { Injectable } from '@angular/core';
import { LoggerService } from '.';
import { IUser } from '../interfaces';
import { User } from './../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;
  get loggedUser(): IUser {
    return this.user;
  }

  constructor(private loggerService: LoggerService) { }

  async register(email: string, pass: string): Promise<boolean> {
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

  async login(email: string, pass: string): Promise<boolean> {
    try {
      this.user = await this.serverLogin(email, pass);
      return true;
    } catch (error) {
      this.loggerService.log(error);
      return false;
    }
  }

  async logout(): Promise<boolean> {
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

  // Temporary - treat as mock dataset for server
  private users: IUser[] = [];
  private async serverLogin(email: string, pass: string): Promise<IUser> {
    const user = this.users.find(user => user.email === email && user.password === pass);
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
