import { Component, OnInit } from '@angular/core';
import { Constants } from './../enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly qpRegisterParams = {
    [Constants.QpPage]:Constants.PageRegister
  };

  constructor() { }

  ngOnInit(): void {
  }

}
