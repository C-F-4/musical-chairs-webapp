import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces';
import { UserService } from '../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  formProfile!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.user = this.userService.loggedUser;
  }

  ngOnInit(): void {
    this.formProfile = this.fb.group({
      email: [this.user.email, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      firstname: [this.user.firstname, Validators.compose([
        Validators.required
      ])],
      lastname: [this.user.lastname, Validators.compose([
        Validators.required
      ])],
      pass: [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])]
    });
  }

  get avatar(): string {
    return this.user.avatar || '';
  }

  get username(): string {
    return this.user.username || '';
  }

  onUpdateProfile(evt: Event): void {
    // 
  }

}
