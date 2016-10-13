import {NgModule} from "@angular/core";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipesComponent} from "./recipes.component";
import {recipeRouting} from "./recipes.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    SharedModule, ReactiveFormsModule, recipeRouting
  ]
})
export class RecipesModule {

}
