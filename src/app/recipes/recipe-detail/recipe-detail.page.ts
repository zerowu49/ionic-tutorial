import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')){
          return
        }
        const recipeId = paramMap.get('recipeId')
        this.loadedRecipe = this.recipesService.getRecipe(recipeId)
      }
    )
  }

  deleteRecipe(){
    this.recipesService.deleteRecipe(this.loadedRecipe.id)
    this.router.navigate(['/recipes'])
    this.presentToast();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => this.deleteRecipe()
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Recipe deleted.',
      duration: 2000,
      color: 'dark'
    });
    await toast.present();
  }

}
