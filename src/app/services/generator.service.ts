import { Injectable } from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
import * as rug from 'random-username-generator';
import * as ing from 'indian-name-generator';

import { UserService, LoggerService } from '.';
import { GameType } from './../enums';
import { IGameroom, IUser } from './../interfaces';
import { GameRoom, User } from './../models';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private userService: UserService, private loggerService: LoggerService) { }

  public static avatar(id: string): string {
    return new AvatarGenerator().generateRandomAvatar(id);
  }

  public static username(): string {
    return rug.generate();
  }

  public static fullname(): string {
    return ing.randomPunjabi();
  }

  public static firstname(): string {
    return ing.randomPunjabi();
  }

  public static lastname(): string {
    return 'Singh';
  }

  public static generateGameRoom(): IGameroom {
    return new GameRoom(GameType.MusicalChairs);
  }

  public static generateGameRooms(count: number): IGameroom[] {
    const gameRooms = [];
    for (let i = 0; i < count; i++) {
      gameRooms.push(new GameRoom(GameType.MusicalChairs));
    }
    return gameRooms;
  }

  public static populateGameRoom(users: IUser[], upperLimit: number, roomCount: number): IUser[] {
    if (upperLimit * roomCount < users.length && upperLimit * roomCount + upperLimit + Math.floor(Math.random() * 10) + 1 < users.length) {
      return [...users].slice(upperLimit * roomCount, upperLimit * roomCount + upperLimit + Math.floor(Math.random() * 10) + 1);
    } else if (upperLimit < users.length) {
      return [...users].slice(roomCount, upperLimit);
    } else {
      return [...users];
    }
  }

  public generateUsers(count: number): void {
    const emailRoot = 'Abhimanyu.Test';
    const emailDomain = '@gmail.com';
    const password = 'Password123#';
    const failedUsers = 0;
    for (let i = 0; i < count; i ++) {
      this.userService.userlist = [new User(`${emailRoot}${i}${emailDomain}`, password)];
    }
    this.loggerService.log(`Mock Data Generated: ${failedUsers} of ${count} failed`);
  }

}
