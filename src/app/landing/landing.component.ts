import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Constants } from './../enums';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  title = 'Magical Chairs (Adventure Game)';
  currentRoute: string = Constants.PageRegister;
  registerRoute: string = Constants.PageRegister;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentRoute = this.identifyRoute(params[Constants.QpPage]);
    });
  }

  private identifyRoute(param: any): string {
    if (param === Constants.PageLogin) {
      return Constants.PageLogin;
    }
    return Constants.PageRegister;
  }

}
