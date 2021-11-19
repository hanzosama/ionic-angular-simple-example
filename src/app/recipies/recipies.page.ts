import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  recipies: Recipe[];

  constructor(private recipiesService: RecipiesService) { }

  ngOnInit() {
    this.recipies = this.recipiesService.getAllRecipies();
  }

}
