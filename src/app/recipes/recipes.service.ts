import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: 'https://akcdn.detik.net.id/community/media/visual/2020/08/18/nasi-goreng-pedas_43.jpeg?w=700&q=90',
      ingredients: ['Nasi', 'Bawang Putih', 'Kecap', 'Cabai']
    },
    {
      id: 'r2',
      title: 'Gado-gado',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gado-gado-salad-876c31a.jpg?quality=90&resize=440,400',
      ingredients: ['Lontong', 'Tempe', 'Tahu', 'Timun']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
}
