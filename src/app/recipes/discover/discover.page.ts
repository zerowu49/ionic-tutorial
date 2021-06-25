import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  fav(recipe: Recipe, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(recipe.title, 'added to favorite');
  }

  share(recipe: Recipe, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log('Share', recipe.title, 'to social media');
  }

  onFilterUpdate(event: Event) {
    let eventDetail = (event as CustomEvent).detail
    console.log(eventDetail);
  }
}
