import {Component, OnInit, OnChanges, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";
import elementIsNotSelected = webdriver.until.elementIsNotSelected;
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd = true;
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) {
  }


  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    if (!this.isAdd) {
      this.sls.editItem(this.item, ingredient);
    } else {
      console.log(ingredient.name);
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
