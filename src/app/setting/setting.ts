import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import { DayModel } from '../core/day.model'

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  public userProfile: UserModel;
  public uid: string = "";
  public day: DayModel = {
    "date": new Date()
  };

  constructor(
    public navCtrl: NavController, 
    public authService: AuthService,
  ) {
    
  }

  ionViewDidLoad() {
    this.authService.getFullProfile().subscribe((user) => {
      this.userProfile = user;
      this.uid = user.uid;
    });
  }

  goToToday() {
    this.navCtrl.push("TodayPage");
  }

  goToCalendar() {
    this.navCtrl.push("CalendarPage");
  }

  goToTips() {
    this.navCtrl.push("TipsPage");
  }

  goToList() {
    this.navCtrl.push("ListPage");
  }

  logout() {
    this.authService.signOut().then(() => this.navCtrl.setRoot('AuthPage'));
  }

}
