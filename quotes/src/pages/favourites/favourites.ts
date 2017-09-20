import { Component } from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {quote} from "../../data/quote.interface";
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  favquotes : quote[];
  constructor(private quoteService: QuotesService){}
  ionViewWillEnter(){
    this.favquotes = this.quoteService.getFavoutiteQuotes();
  }
}
