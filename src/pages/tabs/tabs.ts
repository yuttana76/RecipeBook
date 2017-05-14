import { Recipes } from './../recipes/recipes';
import { ShoppingList } from './../shopping-list/shopping-list';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  slPage = ShoppingList;
  recipesPage = Recipes;
}
