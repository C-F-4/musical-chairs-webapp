import { v4 as uuidv4 } from 'uuid';
import ShortUniqueId from 'short-unique-id';

import { GameType } from './../enums';
import { IGameroom, IUser } from './../interfaces';

export class GameRoom implements IGameroom {
  id: string;
  publicRoomId: string;
  gameType: GameType;
  players: IUser[];
  isActive: boolean;
  winnerId: string | null;
  roundCount: number;
  eliminated: IUser[];
  playing: IUser[];

  constructor(gameType: GameType) {
    this.id = uuidv4();
    this.publicRoomId = (new ShortUniqueId())();
    this.gameType = gameType;
    this.players = [];
    this.isActive = true;
    this.winnerId = null;
    this.roundCount = 0;
    this.eliminated = [];
    this.playing = [];
  }

}
