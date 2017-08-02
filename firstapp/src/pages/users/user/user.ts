import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
@Component({
  selector:'page-user',
  templateUrl:'user.html'
})
export class UserPage implements OnInit{
  constructor(private navParams : NavParams, private navCtrl: NavController){}
  name: String;
  ngOnInit(){
    this.name = this.navParams.get('username');
  }
  onGoBack(){
    //this.navCtrl.pop();
    this.navCtrl.popToRoot();
  }
}
