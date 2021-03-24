import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertType, Constants } from './../enums';
import { CommonService, LoggerService, NotificationService, UserService } from './../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly qpRegisterParams = {
    [Constants.QpPage]: Constants.PageRegister
  };
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private loggerService: LoggerService,
    private notificationService: NotificationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      pass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])]
    });
  }

  async onLogin(): Promise<void> {
    const email = this.formLogin.controls.email.value;
    const pass = this.formLogin.controls.pass.value;
    const isLoginSuccess = await this.userService.login(email, pass);
    if (!isLoginSuccess) {
      this.notificationService.addBasicNotification(AlertType.FormFailure, 'Alert: User Log In Failure!');
      this.loggerService.log('ERROR: Login Failed');
      return;
    }
    this.loggerService.log(`LOG: Login Success`);
    this.notificationService.addBasicNotification(AlertType.FormSuccess, 'Alert: User Logged In Successfully!');
    this.formLogin.reset();
    this.router.navigate(['dashboard']);
  }

}
