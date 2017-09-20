import {quote} from "../data/quote.interface";
export class QuotesService {
  private favouriteQuotes : quote[]=[];


  addQuoteToFavourites(q : quote){
    if(this.findDuplicate(q)=== false)
      this.favouriteQuotes.push(q);
    console.log(this.favouriteQuotes);
  }

  findDuplicate(q : quote){
    if(this.favouriteQuotes.length==0)
      return false;
    else {
      if (this.favouriteQuotes.findIndex((qElement: quote) => {
          if (qElement.id === q.id)
            return true;
        }) != -1)
        return true;
      else
        return false;
    }
  }

  removeQuoteDromFavourite(q : quote){
    const position = this.favouriteQuotes.findIndex((qElement : quote) => {
      if(qElement.id === q.id)
        return true;
    });
    this.favouriteQuotes.splice(position,1);
  }

  getFavouriteQuotes(){
    return this.favouriteQuotes.slice();
  }
}
