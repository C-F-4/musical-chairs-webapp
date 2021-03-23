import { Injectable } from '@angular/core';
import { GeneratorService } from '.';
import { IGameroom } from './../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameRooms: IGameroom[];

  constructor() {
    this.gameRooms = this.fetchGameRooms(15);
  }

  fetchGameRooms(count: number): IGameroom[] {
    return GeneratorService.generateGameRooms(count);
  }

  public get GameRooms(): IGameroom[] {
    return this.gameRooms;
  }

  public getGameRoomById(id: string): IGameroom {
    const gameRoom = this.gameRooms.find(gameRoom => gameRoom.id === id);
    if (!gameRoom) {
      throw new Error(`Game Room Not Found: ${id}`);
    } else {
      // Create Alert Service
      // this.notificationService.addNotification(AlertType, 'Alert');
    }
    return gameRoom;
  }

  public getGameRoomByPublicId(publicId: string): IGameroom {
    const gameRoom = this.gameRooms.find(gameRoom => gameRoom.publicRoomId === publicId);
    if (!gameRoom) {
      throw new Error(`Game Room Not Found: ${publicId}`);
    } else {
      // this.notificationService.addBasicNotification(AlertType.formSuccess, 'Alert: Ingredient GET Success');
    }
    return gameRoom;
  }

}
