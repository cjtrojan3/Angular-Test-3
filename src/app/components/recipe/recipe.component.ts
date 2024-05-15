import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  @Input() recipe: Recipe;
  isHighlighted: boolean = false;

  onClick(): void {
    this.isHighlighted = !this.isHighlighted;
  }
}
