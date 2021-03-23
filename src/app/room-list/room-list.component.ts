import { Component, OnInit } from '@angular/core';
import { RoomType } from './../enums';
import { GameService, LoggerService } from './../services';
import { IGameroom } from './../interfaces';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  gameRooms: IGameroom[] = [];

  constructor(private gameService: GameService, private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.gameRooms = this.gameService.GameRooms;
  }

  public get roomType(): typeof RoomType {
    return RoomType;
  }

  onClick(event: any): void {
    this.loggerService.log(`${event?.type}, ${event?.id}`);
  }

}
