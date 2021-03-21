import { Component, OnInit } from '@angular/core';
import { Constants } from './../enums';
import { User } from './../models';

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

  submit(evt: Event): void {
    evt.preventDefault();
    console.log(new User('john@test.com', 'password1'));
  }

}
