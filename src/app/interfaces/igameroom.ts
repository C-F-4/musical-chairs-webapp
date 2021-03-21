import { IUser } from ".";

export interface IGameroom {
  id: string;

  players: IUser[];
  isActive: boolean;
  winnerId: string | null;
  roundCount: number;
  eliminated: IUser[];
  playing: IUser[];
}
