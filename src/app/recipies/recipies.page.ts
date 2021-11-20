import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit, OnDestroy {

  recipies: Recipe[];

  constructor(private recipiesService: RecipiesService) { }

  //LifeCycle Hooks Angular
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  //End LifeCycle Hooks Angular

  //LifeCycle Hooks IONIC
  ionViewDidEnter() {
    console.log('did enter');

  }

  ionViewWillEnter() {
    console.log('will enter');
    this.recipies = this.recipiesService.getAllRecipies();

  }

  ionViewWillLeave() {
    console.log('will leve');
  }

  ionViewDidLeave() {
    console.log('did leave');
  }

  //End LifeCycle Hooks IONIC
}
