import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IGameroom } from './../interfaces';
import { GameService } from './../services';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {

  private gameData: IGameroom = {};
  public get gameRoomData(): IGameroom {
    return this.gameData;
  }

  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.gameData = this.gameService.getGameRoomByPublicId(params.get('id'));
    });
  }

}
