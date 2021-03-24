import { v4 as uuidv4 } from 'uuid';

import { IUserGameHistory } from '../interfaces';

export class UserGameHistory implements IUserGameHistory {
  id: string;

  constructor(
    public gameRoomId: string,
    public endedAt: Date,
    public didWin: boolean = false
  ) {
    this.id = uuidv4();
  }
}
