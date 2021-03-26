import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomListItemComponent } from './room-list-item/room-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { RoomViewItemComponent } from './room-view-item/room-view-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { AlertComponent } from './alert/alert.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { RoomCreateComponent } from './room-create/room-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent,
    RoomListComponent,
    RoomListItemComponent,
    ProfileComponent,
    RoomViewComponent,
    RoomViewItemComponent,
    NavigationComponent,
    DashboardComponent,
    GameHistoryComponent,
    AlertComponent,
    PopupModalComponent,
    RoomCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
