import { Component, OnInit } from '@angular/core';
import {quote} from "../../data/quote.interface";
import  quotes  from  '../../data/quotes';
import {QuotesPage} from "../quotes/quotes";
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  qp = QuotesPage;
  quoteCollection:{category : string, quotes : quote[], icon : string}[];
  ngOnInit(){
    this.quoteCollection = quotes;
  }
}
