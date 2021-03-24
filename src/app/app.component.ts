import { Component } from '@angular/core';
import { CommonService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'musical-chairs-game';

  constructor(private commonService: CommonService) { }

  showNav(): boolean {
    return this.commonService.showNavigation;
  }

}
