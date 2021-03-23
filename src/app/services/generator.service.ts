import { Injectable } from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
import * as rug from "random-username-generator";
import * as ing from "indian-name-generator";
import { GameType } from './../enums';
import { IGameroom } from './../interfaces';
import { GameRoom } from './../models';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

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

}
