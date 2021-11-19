import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  private recipies: Recipe[] = [{
    id: 'r1',
    tittle: 'Schinitzel',
    imageUrl: 'https://cdn7.kiwilimon.com/recetaimagen/860/640x426/th5-640x426-12668.jpg.webp',
    ingredients: ['French fires', 'Pork', 'Salt'],
  },
  {
    id: 'r2',
    tittle: 'Ajiaco',
    imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/4a994b44-4d9c-4552-82e4-6e9964322a78.jpg',
    ingredients: ['Potato', 'Yukeichon', 'Salt', 'Avocado'],
  }];
  constructor() { }

  getAllRecipies() {
    return [...this.recipies];
  }

  getRecipie(recipeId: string) {
    return { ...this.recipies.find(recipe => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipies = this.recipies.filter(recipe => recipe.id !== recipeId);
  }

}
