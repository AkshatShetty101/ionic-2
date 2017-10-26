import {Component, OnInit} from '@angular/core';
import {quote} from "../../data/quote.interface";
import {QuotesPage} from "../quotes/quotes";
import firebase from 'firebase';
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  qp = QuotesPage;
  quoteCollection: { category: string, icon: string, quotes: quote[] }[]=null;


  ngOnInit() {
    console.log("Ion view can enter");
    firebase.database().ref().once('value').then(snapshot =>{
      this.quoteCollection = snapshot.val();
    });
  }
}
