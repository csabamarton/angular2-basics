import { Component, OnInit } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
  }

  onStore() {
    this.recipesService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {
    this.recipesService.fetchData();
  }

}
