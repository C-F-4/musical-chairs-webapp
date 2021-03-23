import { Component, Input, OnInit } from '@angular/core';
import { RoomType } from './../enums';

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.scss']
})
export class RoomListItemComponent implements OnInit {

  @Input() type: RoomType = RoomType.GameRoom;

  constructor() { }

  ngOnInit(): void {
  }

  public get isTypeCreateRoom(): boolean {
    return this.type === RoomType.CreateRoom;
  }

}
