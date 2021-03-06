import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

export class ShoppingListService{

  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredients :Ingredient[]=[
    new Ingredient('Apple',100),
    new Ingredient('Mango',200)
  ];

  getIngredients()
  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient :Ingredient)
  {
this.ingredients.push(ingredient);
this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[])
  {
this.ingredients.push(...ingredients);
this.ingredientChanged.emit(this.ingredients.slice())
  }
}
