import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPES_ROUTES} from "./recipes/recipes.routing";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(routes);
