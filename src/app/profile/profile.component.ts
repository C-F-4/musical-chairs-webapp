import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Tabname } from '../enums';
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
  readonly defaultTab = Tabname.Profile;
  tabSelected = this.defaultTab;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user = this.userService.loggedUser;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: Params) => {
      const selectedTab = (params.get('tab'));
      if (selectedTab) {
        switch (selectedTab) {
          case Tabname.Profile: {
            this.tabSelected = Tabname.Profile;
            break;
          }
          case Tabname.Settings: {
            this.tabSelected = Tabname.Settings;
            break;
          }
          default: {
            this.tabSelected = this.defaultTab;
            break;
          }
        }
      } else {
        this.tabSelected = this.defaultTab;
      }
      this.onFormInit();
    });
  }

  get avatar(): string {
    return this.user.avatar || '';
  }

  get username(): string {
    return this.user.username || '';
  }

  get tabname(): typeof Tabname {
    return Tabname;
  }

  onFormInit(): void {
    if (this.tabSelected === this.tabname.Profile) {
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
    } else {
      // To-Do Settings
    }
  }

  onUpdateProfile(evt: Event): void {
    // To-Do
  }

}
