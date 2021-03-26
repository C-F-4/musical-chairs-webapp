import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RoomAction, RoomType } from './../enums';
import { IGameroom } from './../interfaces';
import { GameService, LoggerService } from './../services';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  gameRooms: IGameroom[] = [];

  constructor(private router: Router, private gameService: GameService, private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.gameRooms = this.gameService.GameRooms;
  }

  public get roomType(): typeof RoomType {
    return RoomType;
  }

  onClick(event: any): void {
    if (event.type === RoomAction.CreateRoom) {
      this.loggerService.log(`Creating Room`);
      this.gameService.createRoom();
    } else if (event.type === RoomAction.JoinRoom) {
      this.loggerService.log(`Unsupported Action`);
    } else if (event.type === RoomAction.SpectateRoom) {
      this.loggerService.log(`Spectating Game with id ${event.id}`);
      const gameRoom = this.gameService.getGameRoomById(event.id);
      if (gameRoom.id) {
        this.gameService.startGameById(gameRoom.id);
      }
      this.loggerService.log(`Valid Game Room. Joining: ${gameRoom.publicRoomId}`);
      this.router.navigate([`game/${gameRoom.publicRoomId}`]);
    } else {
      this.loggerService.log(`Unsupported Action Identified: ${event.id}`);
    }
  }

}
