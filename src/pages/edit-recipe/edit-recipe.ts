import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipe implements OnInit {
  
  mode = 'New';
  selectOptions=['Easy','Medium','Hard'];
  recipeForm : FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }

onSubmit(){
console.log(this.recipeForm);
}

  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
    });
  }

}
