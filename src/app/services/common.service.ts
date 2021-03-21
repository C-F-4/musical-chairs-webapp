import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  showNavigation: boolean;
  globals: any;

  constructor() {
    this.showNavigation = false;
  }

}
