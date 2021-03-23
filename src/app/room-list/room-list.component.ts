import { Component, OnInit } from '@angular/core';
import { RoomType } from './../enums';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public get roomType(): typeof RoomType {
    return RoomType;
  }

}
