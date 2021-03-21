import { Injectable } from '@angular/core';
import { CommonService } from '.';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private commonService: CommonService) { }

  log(message: any): void {
    if (this.commonService.isDevMode) {
      if (message instanceof Error) {
        console.log(message.message);
      } else {
        console.log(message);
      }
    }
  }

}
