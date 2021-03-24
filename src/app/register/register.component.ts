import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Constants } from './../enums';
import { CommonService, LoggerService, UserService } from './../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  readonly qpLoginParams = {
    [Constants.QpPage]: Constants.PageLogin
  };
  formRegister!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private loggerService: LoggerService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
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

  async onRegister(): Promise<void> {
    const email = this.formRegister.controls.email.value;
    const pass = this.formRegister.controls.pass.value;
    const isRegisterSuccess = await this.userService.register(email, pass);
    if (!isRegisterSuccess) {
      this.loggerService.log('ERROR: Register Failure');
      return;
    }
    this.loggerService.log('LOG: User Created');
    this.formRegister.reset();
    if (!this.commonService.isAutoLoginOnRegisterOn) {
      this.loggerService.log('LOG: Login via form');
      return;
    }
    this.loggerService.log('LOG: Trying to login');
    const isLoginSuccess = await this.userService.login(email, pass);
    if (!isLoginSuccess) {
      this.loggerService.log('ERROR: Auto-login Failed');
      return;
    }
    this.loggerService.log(`LOG: Login Success`);
    this.router.navigate(['dashboard']);
  }

}
