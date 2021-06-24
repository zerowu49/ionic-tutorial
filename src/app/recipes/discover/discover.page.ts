import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
  ) { }

  ngOnInit() {
  }

    
  ionViewWillEnter(){
    this.recipes = this.recipesService.getAllRecipes();
  }

}
