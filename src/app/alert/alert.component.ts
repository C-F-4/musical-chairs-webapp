import { Component, Input, OnInit } from '@angular/core';

import { AlertType } from './../enums';
import { IAlert } from './../interfaces';
import { LoggerService, NotificationService } from './../services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertId = '';
  public alert: IAlert = {};

  constructor(
    private loggerService: LoggerService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    try {
      this.alert = this.notificationService.getNotificationById(this.alertId);
      this.showAlert();
    } catch (err) {
      this.loggerService.log(err);
    }
  }

  showAlert(): void {
    setTimeout(() => {
      this.alert.isActive = false;
      this.notificationService.removeNotification(this.alertId);
    }, this.alert.timeoutInSeconds);
  }

  getAlertClass(): string {
    if (this.alert.type === AlertType.FormSuccess) {
      return 'alert-success';
    }
    return 'alert-error';
  }

}
