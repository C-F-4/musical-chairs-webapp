import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RoomType, RoomAction } from './../enums';
import { IGameroom } from './../interfaces';
import { CommonService, GameService } from './../services';

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {

  @Input() type: RoomType = RoomType.GameRoom;
  @Input() id = '';
  @Output() onClick = new EventEmitter<any>();
  public gameRoom: IGameroom = {};

  constructor(public commonService: CommonService, private gameService: GameService) { }

  ngOnInit(): void {
    if (this.id) {
      this.gameRoom = this.gameService.getGameRoomById(this.id);
    }
  }

  public get action(): typeof RoomAction {
    return RoomAction;
  }

  public get roomType(): typeof RoomType {
    return RoomType;
  }

  public onRoomAction(action: RoomAction): void {
    this.onClick.emit({ type: action, id: this.id });
  }

  // public createRoom(): void {
  //   this.onClick.emit({ type: RoomAction.CreateRoom, id: this.id });
  // }

  // public joinRoom(): void {
  //   this.onClick.emit({ type: RoomAction.JoinRoom, id: this.id });
  // }

  // public spectateRoom(): void {
  //   this.onClick.emit({ type: RoomAction.SpectateRoom, id: this.id });
  // }

}
