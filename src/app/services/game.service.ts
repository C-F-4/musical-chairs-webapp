import { Injectable } from '@angular/core';

import { GeneratorService, LoggerService, UserService } from '.';
import { GameType } from './../enums';
import { IGameroom } from './../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameRooms: IGameroom[];
  private readonly supportedGameModes = [GameType.MusicalChairs];

  constructor(
    private generatorService: GeneratorService,
    private loggerService: LoggerService,
    private userService: UserService,
  ) {
    this.generatorService.generateUsers(200);
    this.gameRooms = this.fetchGameRooms(3);
    this.populateGameRooms();
  }

  private fetchGameRooms(count: number): IGameroom[] {
    return GeneratorService.generateGameRooms(count);
  }

  private populateGameRooms(): void {
    for (let i = 0; i < this.gameRooms.length; i ++) {
      this.gameRooms[i].playing = this.gameRooms[i].players = GeneratorService.populateGameRoom(
        [...this.userService.userlist], 50, i
      );
    }
  }

  public get GameRooms(): IGameroom[] {
    return this.gameRooms;
  }

  public getGameRoomById(id: string): IGameroom {
    if (!id) {
      throw new Error(`Game Room Not Found: ${id}`);
    }
    const gameRoom = this.gameRooms.find(gameRoomEl => gameRoomEl.id === id);
    if (!gameRoom) {
      throw new Error(`Game Room Not Found: ${id}`);
    } else {
      // Create Alert Service
      // this.notificationService.addNotification(AlertType, 'Alert');
    }
    return gameRoom;
  }

  public getGameRoomByPublicId(publicId: string): IGameroom {
    const gameRoom = this.gameRooms.find(gameRoomEl => gameRoomEl.publicRoomId === publicId);
    if (!gameRoom) {
      throw new Error(`Game Room Not Found: ${publicId}`);
    } else {
      // this.notificationService.addBasicNotification(AlertType.formSuccess, 'Alert: Ingredient GET Success');
    }
    return gameRoom;
  }

  public updateGameRoomById(game: IGameroom): boolean {
    try {
      if (!game.id) {
        throw new Error(`Game Room Not Found: ${game.id}`);
      }
      const gameRoomIdx = this.gameRooms.findIndex(gameRoomEl => gameRoomEl.id === game.id);
      if (gameRoomIdx < 0) {
        throw new Error(`Game Room Not Found: ${game.id}`);
      } else {
        this.gameRooms[gameRoomIdx] = game;
        return true;
      }
    } catch (err) {
      this.loggerService.log(err);
      return false;
    }
  }

  public startGameById(gameRoomId: string): boolean {
    try {
      const game = this.getGameRoomById(gameRoomId);
      if (!this.supportedGameModes.includes(game.gameType || GameType.Unknown)) {
        throw new Error(`LOG: Game is not Supported`);
      }
      if (game.isActive) {
        throw new Error(`LOG: Game already activated`);
      }
      this.loggerService.log(`LOG: Starting Game ${game.id}`);
      game.isActive = !game.isActive;
      if (this.updateGameRoomById(game)) {
        this.startGame(game);
        return true;
      }
      return false;
    } catch (err) {
      this.loggerService.log(err);
      return false;
    }
  }

  private startGame(game: IGameroom): void {
    this.loggerService.log(`LOG: Game Started: ${game.publicRoomId}`);
    // setTimeout(()=>{},1000);
  }

}
