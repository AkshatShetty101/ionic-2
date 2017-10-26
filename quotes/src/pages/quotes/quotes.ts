import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import {quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {Storage} from '@ionic/storage';
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotegroup: { category: string, quotes: quote[], icon: string };

  constructor(private navParams: NavParams,
              private  alertCtrl: AlertController,
              private quoteService: QuotesService,
              private storage: Storage,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    console.log('here!!');
    this.quotegroup = this.navParams.data;
  }

  onRemoveFromFavourites(q: quote) {
    this.quoteService.removeQuoteDromFavourite(q);
    this.storage.remove(q.id).then((value) => {
      console.log(value);
    });
  }

  onAddToFavourites(q: quote) {
    console.log(q);
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('OKAY');
            this.quoteService.addQuoteToFavourites(q);
            this.storage.set(q.id.toString(), q).then((value) => {
              console.log(value);
            });
          }
        },
        {
          text: 'No. I changed my mind!',
          role: 'cancel',
          handler: () => {
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
  isAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
