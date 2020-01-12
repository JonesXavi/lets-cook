import { AuthService } from './../auth/auth.sevice';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  saveRecipes() {
    //const token = this.authService.getToken();

    /* return this.httpClient.put('https://lets-cook-ng7.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      observe: 'body',
      params: new HttpParams().set('auth', token)
    }); */

    //Example http progress
    /* const req = new HttpRequest('PUT', 'https://lets-cook-ng7.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true,
      params: new HttpParams().set('auth', token)
    }); */

    //Interceptors example
    const req = new HttpRequest('PUT', 'https://lets-cook-ng7.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
        (recipes) => {
          for (let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
