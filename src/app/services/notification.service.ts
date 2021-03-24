import { EventEmitter, Injectable, Output } from '@angular/core';

import { AlertType } from '../enums';
import { IAlert } from '../interfaces';
import { Alert } from './../models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private alerts: IAlert[] = [];
  @Output() notify = new EventEmitter<IAlert>();

  constructor() { }

  public get alertList(): IAlert[] {
    return this.alerts;
  }

  public getNotificationById(alertId: string): IAlert {
    const alert = this.alerts.find(el => el.id === alertId);
    if (!alert) {
      throw new Error('Alert');
    }
    return alert;
  }

  public addBasicNotification(type: AlertType, text: string): void {
    this.alerts.push(new Alert(type, text));
    this.notify.emit(this.alerts[this.alerts.length - 1]);
  }

  public addNotification(alert: IAlert): void {
    this.alerts.push(alert);
  }

  public removeNotification(alertId: string): boolean {
    const elIdx = this.alerts.findIndex(el => el.id === alertId);
    const elsDeleted = this.alerts.splice(elIdx, 1);
    return !!elsDeleted?.length;
  }

}
