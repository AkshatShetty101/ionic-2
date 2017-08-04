import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {UserPage} from "./user/user";
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl: NavController){}
  onLoadUser(name: String){
  this.navCtrl.push(UserPage,{username: name});
  }
  ionViewCanEnter(): boolean |Promise<boolean>{
    console.log("Ion view can enter");
    const rn = Math.random();
    return rn>0.5;
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }
  ionViewCanLeave() : boolean | Promise<void>{
    console.log('ionViewCanLeave');
    const promise  = new Promise<void>((resolve,reject)=>{
      setTimeout(()=>{
        resolve()},1000);
    });
    return promise;
  }
}
