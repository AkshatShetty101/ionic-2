import { Component } from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {quote} from "../../data/quote.interface";
import { ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  favquotes : quote[];
  constructor(private quoteService: QuotesService,
              private modalCtrl : ModalController,
              private settingsService : SettingsService){}
  ionViewWillEnter(){
    this.favquotes = this.quoteService.getFavouriteQuotes();
  }
  onViewQuote(q: quote){
    const modal = this.modalCtrl.create(QuotePage, q);
    modal.present();
    modal.onDidDismiss((remove : boolean)=>{
      if(remove == true) {
        this.onRemoveFromFavourites(q);
      }
      console.log(remove);
    });
  }

  onRemoveFromFavourites(q : quote){
    this.quoteService.removeQuoteDromFavourite(q);
    const position = this.favquotes.findIndex((qElement : quote) => {
      if(qElement.id === q.id)
        return true;
    });
    this.favquotes.splice(position,1);
  }

  getBackground(){
    return this.settingsService.isAltBackground()? 'altQuoteBackground' : 'quoteBackground';
  }
  isAltBackground(){
    return this.settingsService.isAltBackground();
  }
}
