import { Component, OnInit } from '@angular/core';

import { IAlert } from './interfaces';
import { CommonService, LoggerService, NotificationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'musical-chairs-game';
  // public alert: IAlert = {};

  constructor(
    private commonService: CommonService,
    private loggerService: LoggerService,
    public notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.notificationService.notify.subscribe((alert: IAlert) => {
      this.loggerService.log(`Alert Added: ${alert.id}`);
      // Use this to show one notification at a time. Overwrite at global level timeout too
      // this.alert = alert;
    });
  }

  showNav(): boolean {
    return this.commonService.showNavigation;
  }

}
