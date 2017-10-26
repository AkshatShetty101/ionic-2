import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import firebase from 'firebase';
import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  settingsPage: any = SettingsPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    firebase.initializeApp({
        apiKey: "AIzaSyCAsejYYKRa27mmnLgDKD78GpPbVJefls0",
        authDomain: "quotodian.firebaseapp.com",
        databaseURL: "https://quotodian.firebaseio.com",
        projectId: "quotodian",
        storageBucket: "quotodian.appspot.com",
        messagingSenderId: "94107274583"
      }
    );
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    console.log(page);
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

