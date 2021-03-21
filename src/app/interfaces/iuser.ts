import { IUserGameHistory, IUserSettings } from '.';

export interface IUser {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  createdAt: Date;

  gameHistory: IUserGameHistory[];
  settings: IUserSettings;

  password: string;
}
