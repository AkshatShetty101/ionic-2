import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
@Component({
  selector : 'page-buyout',
  templateUrl : 'buyout.html'
})
export class BuyoutPage{
productData:{name :string, quantity :number};
  constructor(private navParams :NavParams, private navCtrl :NavController){
this.productData = this.navParams.data;
}
onPurchase(){
    this.navCtrl.popToRoot();
}
}
