import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ShopppingListService} from "../../services/shopping-list";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  constructor(private slService : ShopppingListService){}
  onAddItem(form : NgForm){
    console.log(form);
    console.log(form.value.ingredientName);
    this.slService.addItem(form.value.ingredientName,form.value.amount);
    form.reset();
  }
}
