import {Ingredient} from "../models/ingredient";
export class ShopppingListService{
  private ingredients : Ingredient[]=[];
  addItem(name : string, amount : number){
    console.log("nasmd"+name);
  this.ingredients.push(new Ingredient(name, amount));
    console.log(this.ingredients);
  }
  addItems(items : Ingredient[]){
    this.ingredients.push(...items);
    console.log(this.ingredients);
  }
  getItems(){
    return this.ingredients.slice();
  }
  removeItem(index : number){
    this.ingredients.splice(index,1);
  }
}
