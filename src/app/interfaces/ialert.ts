import { AlertType } from './../enums';

export interface IAlert {
  id?: string;
  type?: AlertType;
  text?: string;
  timeoutInSeconds?: number;
  isActive?: boolean;
}
