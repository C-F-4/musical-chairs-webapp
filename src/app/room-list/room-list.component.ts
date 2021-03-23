import { Component, OnInit } from '@angular/core';
import { RoomType } from './../enums';
import { GameService } from './../services';
import { IGameroom } from './../interfaces';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  gameRooms: IGameroom[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameRooms = this.gameService.GameRooms;
  }

  public get roomType(): typeof RoomType {
    return RoomType;
  }

  onClick(event: any): void {
    console.log(event?.type, event?.id);
  }

}
