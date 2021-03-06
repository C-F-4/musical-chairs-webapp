import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import QRCodeStyling from 'qr-code-styling';

import { AlertType, Tabname } from '../enums';
import { IUser } from '../interfaces';
import { CommonService, NotificationService, UserService } from '../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: IUser;
  formProfile!: FormGroup;
  readonly defaultTab = Tabname.Profile;
  tabSelected = this.defaultTab;
  isViewMode = false;
  guestUser: IUser = {};
  qrCode: any;
  @ViewChild('qrCodeCanvas', { static: false }) qrCodeCanvasRef!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private commonService: CommonService,
    private notificationService: NotificationService,
    private userService: UserService,
  ) {
    this.user = this.userService.loggedUser;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      const selectedUser = params.get('userId');
      try {
        if (selectedUser && selectedUser !== this.user.username) {
          this.isViewMode = true;
          this.guestUser = this.userService.getUserByUsername(selectedUser);
          this.qrRenderer();
        } else {
          this.isViewMode = false;
          this.guestUser = {};
        }
      } catch (err) {
        this.notificationService.addBasicNotification(AlertType.FormFailure, 'User not Found. Redirecting.');
        this.router.navigate(['/profile']);
      }
    });
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

  public get avatar(): string {
    return this.user.avatar || '';
  }

  public get username(): string {
    return this.user.username || '';
  }

  public get tabname(): typeof Tabname {
    return Tabname;
  }

  private qrRenderer(): void {
    // To-Do
    this.changeDetectorRef.detectChanges();
    const qrConfig = this.commonService.globals.profileQrConfig || {};
    qrConfig.data = `${qrConfig.data}${this.guestUser.username}`;
    this.qrCode = new QRCodeStyling(qrConfig);
    this.qrCode.append(this.qrCodeCanvasRef.nativeElement);
  }

  private onFormInit(): void {
    if (this.tabSelected === this.tabname.Profile) {
      this.formProfile = this.fb.group({
        email: [this.user.email, Validators.compose([
          Validators.required,
          Validators.email
        ])],
        firstname: [this.user.firstname || '', Validators.compose([
          Validators.required
        ])],
        lastname: [this.user.lastname || '', Validators.compose([
          Validators.required
        ])],
        password: [this.user.password, Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ])]
      });
    } else {
      // To-Do Settings
    }
  }

  public async onUpdateProfile(evt: Event): Promise<void> {
    try {
      this.user.email = this.formProfile.controls.email.value;
      this.user.firstname = this.formProfile.controls.firstname.value;
      this.user.lastname = this.formProfile.controls.lastname.value;
      this.user.password = this.formProfile.controls.password.value;
      this.user = await this.userService.updateUser(this.user);
      this.notificationService.addBasicNotification(AlertType.FormSuccess, 'Alert: User Updated Successfully!');
      this.userService.loggedUser = this.user;
      this.formProfile.reset(this.user);
    } catch (err) {
      this.notificationService.addBasicNotification(AlertType.FormFailure, 'Alert: User Update Failed');
    }
  }

  ngOnDestroy(): void {
    this.qrCode = null;
  }

}
