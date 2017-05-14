import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ShoppingListSerivce } from '../../services/shopping-list';
import { Ingredient } from '../../models/ingredient';


@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {

  listItems: Ingredient[];

  constructor(private shoppingListSerivce: ShoppingListSerivce) { };

  ionViewWillEnter() {
    this.onLoad();
  }

  onAddItem(form: NgForm) {
    this.shoppingListSerivce.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.onLoad();
  }

  onLoad() {
    this.listItems = this.shoppingListSerivce.getItems();
  }

onCheckItem(index: number){
  this.shoppingListSerivce.removeItem(index);
  this.onLoad();

}
}
