import {Component, OnInit} from '@angular/core';
import {quote} from "../../data/quote.interface";
import {QuotesPage} from "../quotes/quotes";
import firebase from 'firebase';
import {SettingsService} from "../../services/settings";
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  qp = QuotesPage;
  quoteCollection: { category: string, icon: string, quotes: quote[] }[]=null;
  constructor(private settingsService : SettingsService){}

  ngOnInit() {
    console.log("Ion view can enter");
    firebase.database().ref().once('value').then(snapshot =>{
      this.quoteCollection = snapshot.val();
    });
  }
  isAltBackground() {
    return this.settingsService.isAltBackground();
  }

}
