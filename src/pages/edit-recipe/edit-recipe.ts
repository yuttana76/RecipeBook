import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipe implements OnInit {

  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public actionSheetController: ActionSheetController, 
              public alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingredients':new FormArray([]),
    });
  }

  onManageIngredients() {
    const actionSheet = this.actionSheetController.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all ingredients',
          role: 'destructive',
          handler: () => {
            //
          }

        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]

    });

    actionSheet.present();
    
  }

  private createNewIngredientAlert() {

    return this.alertCtrl.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },{
          text:'Add',
          handler:data =>{

            if(data.name == null ||data.name.trim() ==''){
                return;
            }

            (<FormArray>this.recipeForm.get('ingredients'))
            .push(new FormControl(data.name,Validators.required));

          }
        }
      ]
    });
  }

}
