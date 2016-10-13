import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import 'rxjs/add/operator/map'
import {Headers, Http, Response} from "@angular/http";

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Fisherman', 'Fisherman\'s Bastion is a terrace in neo-Gothic and neo-Romanesque style situated on the Buda bank of the Danube, on the Castle hill in Budapest, around Matthias Church', 'http://img2.hvg.hu/image.aspx?id=892666f4-64f5-4fa7-a075-a5cc07fbd362&view=b2dea50f-cee1-4f6e-b810-034566fbfb2e', [
      new Ingredient('Salmon', 2),
      new Ingredient('Blue pen', 1)
    ]),
    new Recipe('Wire', 'Iron Curtain', 'http://kep.cdn.indexvas.hu/1/0/1282/12826/128263/12826376_3c72a337b541df89e1a16129b3227e3d_wm.jpg', [])
  ]

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(recipeIndex: number) {
    return this.recipes[recipeIndex];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put('https://angular-http-e8749.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://angular-http-e8749.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      )
  }
}

