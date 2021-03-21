import { v4 as uuidv4 } from "uuid";
import { IGameroom, IUser } from './../interfaces';

export class GameRoom implements IGameroom {
  id: string;
  players: IUser[];
  isActive: boolean;
  winnerId: string | null;
  roundCount: number;
  eliminated: IUser[];
  playing: IUser[];
  
  constructor() {
    this.id = uuidv4();
    this.players = [];
    this.isActive = true;
    this.winnerId = null;
    this.roundCount = 0;
    this.eliminated = [];
    this.playing = [];
  }

}
