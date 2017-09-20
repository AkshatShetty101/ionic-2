import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {QuotesService} from "../../services/quotes";
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  author : string;
  text : string;
  constructor(private viewCtrl : ViewController,
    private navParams : NavParams){}
  onClose(remove = false){
    this.viewCtrl.dismiss(remove);
  }
  ionViewDidLoad(){
    this.author = this.navParams.get('person');
    this.text = this.navParams.get('text');
    console.log(this.author+this.text);
  }
}
