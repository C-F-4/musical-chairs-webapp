import { v4 as uuidv4 } from 'uuid';

import { UserSettings } from '.';
import { IUser, IUserGameHistory, IUserSettings } from '../interfaces';
import { GeneratorService } from './../services';

export class User implements IUser {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  createdAt: Date;
  gameHistory: IUserGameHistory[];
  settings: IUserSettings;
  password: string;
  metadata?: any;

  constructor(email: string, password: string) {
    this.id = uuidv4();
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
    this.gameHistory = [];
    this.settings = new UserSettings();
    this.avatar = GeneratorService.avatar(this.id);
    this.username = GeneratorService.username();
    this.firstname = GeneratorService.firstname();
    this.lastname = GeneratorService.lastname();
    this.metadata = {
      game: []
    };
  }

}
