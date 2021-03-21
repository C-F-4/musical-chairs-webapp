import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  showNavigation: boolean;
  isAutoLoginOnRegisterOn: boolean;
  isDevMode: boolean;
  globals: any;

  constructor() {
    this.showNavigation = false;
    this.isAutoLoginOnRegisterOn = true;
    this.isDevMode = true;
  }

}
