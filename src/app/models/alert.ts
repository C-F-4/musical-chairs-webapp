import { v4 as uuidv4 } from 'uuid';

import { AlertType } from '../enums';
import { IAlert } from './../interfaces';

export class Alert implements IAlert {
  public id: string;
  public type: AlertType;
  public text: string;
  public timeoutInSeconds: number;
  public isActive: boolean;

  constructor(type: AlertType, text: string = 'Alert', timeoutInSeconds: number = 5000) {
    this.id = uuidv4();
    this.type = type;
    this.text = text;
    this.timeoutInSeconds = timeoutInSeconds;
    this.isActive = true;
  }
}
