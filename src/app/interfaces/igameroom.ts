import { GameType } from './../enums';
import { IUser } from '.';

export interface IGameroom {
  id?: string;
  publicRoomId?: string;
  gameType?: GameType;
  players?: IUser[];
  isActive?: boolean;
  winnerId?: string | null;
  roundCount?: number;
  eliminated?: IUser[];
  playing?: IUser[];
}
