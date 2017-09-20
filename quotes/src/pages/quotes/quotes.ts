import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import {quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quotegroup:{category : string, quotes : quote[], icon : string};
  constructor(private navParams : NavParams,
              private  alertCtrl : AlertController,
              private quoteService : QuotesService){
  }
  ngOnInit(){
    this.quotegroup = this.navParams.data;
  }
  onAddToFavourite(q:quote){
    console.log(q);
    const alert = this.alertCtrl.create({
      title : 'Add Quote',
      subTitle : 'Are you sure?',
      message : 'Are you sure you want to add this quote?',
      buttons : [
        {
          text : 'Okay',
          handler : () =>{
            console.log('OKAY');
            this.quoteService.addQuoteToFavourites(q);
          }
        },
        {
          text : 'No. I changed my mind!',
          role : 'cancel',
          handler : ()=>{
            console.log('Cancelled!');
          }
        }]
    });
    alert.present();
  }
  // ionViewDidLoad(){
  //   this.quotegroup = this.navParams.data;
  // to use this apporach use the elvis operator(?)
  // }
}
