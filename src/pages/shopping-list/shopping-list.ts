import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {

onAddItem(form: NgForm){
 console.log(form);
}

}
