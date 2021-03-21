import { Component, OnInit } from '@angular/core';
import { Constants } from './../enums';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  readonly qpLoginParams = {
    [Constants.QpPage]:Constants.PageLogin
  };

  constructor() { }

  ngOnInit(): void {
  }

}
