import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {Input} from "@angular/core/src/metadata/directives";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number;

  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private router: Router, private route: ActivatedRoute, private recipesService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);

  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

}
