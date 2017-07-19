import{EventEmitter,Injectable} from '@angular/core'
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppinglist.service'

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
private   recipes :Recipe[]=
  [
    new Recipe('Omlette','Lets Have Some Tasty Breakfast','https://www.lekue.com/media/attachments/Omelette_3402700_R10_Inspirate01.jpg',[
      new Ingredient('Egg',2),
        new Ingredient('Salt',1)
    ]),
    new Recipe('Chicken Burger','Tasty Burger','http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg',[
      new Ingredient('Buns',2),
        new Ingredient('Meat',1)
    ])
  ];

  constructor(private slService :ShoppingListService)
  {

  }


  getRecipes()
  {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);

  }
}
