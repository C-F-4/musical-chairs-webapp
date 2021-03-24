import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RoomAction, RoomType } from './../enums';
import { GameService, LoggerService } from './../services';
import { IGameroom } from './../interfaces';

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
    if (event.type === RoomAction.CreateRoom || event.type === RoomAction.JoinRoom) {
      this.loggerService.log(`Unsupported Action`);
    } else if (event.type === RoomAction.SpectateRoom) {
      this.loggerService.log(`Spectating Game with id ${event.id}`);
      const gameRoom = this.gameService.getGameRoomById(event.id);
      this.loggerService.log(`Valid Game Room. Joining: ${gameRoom.publicRoomId}`);
      this.router.navigate([`game/${gameRoom.publicRoomId}`]);
    } else {
      this.loggerService.log(`Unsupported Action Identified: ${event.id}`);
    }
  }

}