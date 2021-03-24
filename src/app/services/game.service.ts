import { Injectable } from '@angular/core';

import { GeneratorService, LoggerService, UserService } from '.';
import { GameType } from './../enums';
import { IGameroom, IUser } from './../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameRooms: IGameroom[];
  private readonly supportedGameModes = [GameType.MusicalChairs];
  private gameRoomIntervals: {[key: string]: any} = {};

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
      this.gameRooms[i].playing = [...this.gameRooms[i].players] = GeneratorService.populateGameRoom(
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
      if (game.playing?.length === 1 && game.winnerId) {
        throw new Error(`LOG: Game already won by ${game.playing[0].username}`);
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

  private eliminate(game: IGameroom, player: IUser, playerIdx: number): IGameroom {
    if (game.playing && game.playing[playerIdx].id === player.id) {
      const eliminatedPlayer = game.playing.splice(playerIdx, 1);
      this.loggerService.log(`Eliminated ${eliminatedPlayer[0].username}`);
      if (!game.eliminated) {
        game.eliminated = [];
      }
      game.eliminated.push(eliminatedPlayer[0]);
    }
    return game;
  }

  private startGame(game: IGameroom): void {
    this.loggerService.log(`LOG: Game Started: ${game.publicRoomId}`);
    let ctr = 0;
    let playerIdx = 0;
    const idx = game.publicRoomId;
    if (idx) {
      if (typeof game.roundCount === 'number') {
        game.roundCount += 1;
      }
      this.gameRoomIntervals[idx] = setInterval(() => {
        if (game.playing && game.playing.length > 1 && playerIdx < game.playing.length && game.playing[playerIdx]) {
          this.loggerService.log(`Eliminating ${playerIdx}, ${game.playing[playerIdx].username}`);
          game = this.eliminate(game, game.playing[playerIdx], playerIdx);
          ctr += 1;
          playerIdx += ctr;
        } else {
          if (game.playing?.length === 1) {
            game.winnerId = game.playing[0].id;
          }
          game.isActive = !game.isActive;
          clearInterval(this.gameRoomIntervals[game.publicRoomId || 'unknown']);
        }
      }, 1000);
    }
  }

}
