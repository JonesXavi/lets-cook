import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Veg Pasta',
      'This is veg spicy pasta!',
      'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',
      [
        new Ingredient('Pasta', 3),
        new Ingredient('Chill Sauce', 1)
      ]),
    new Recipe('Spagetti',
      'This is chicken sausage spagetti',
      'https://amp.thisisinsider.com/images/5ad792ffbd967146008b45d9-750-562.jpg',
      [
        new Ingredient('Rava', 1),
        new Ingredient('Ghee', 1),
        new Ingredient('Cashew nuts', 5)
      ])
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.updateAndSendRecipesCopy();
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateAndSendRecipesCopy();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.updateAndSendRecipesCopy();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updateAndSendRecipesCopy();
  }

  updateAndSendRecipesCopy() {
    this.recipesChanged.next(this.recipes.slice());
  }
}
