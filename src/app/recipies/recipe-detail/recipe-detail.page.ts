import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';
import { Recipe } from '../recipe.module';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipiesService: RecipiesService,
    private router: Router,
    private alertCtr: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        //redirecting
        this.router.navigate(['/recipies']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipiesService.getRecipie(recipeId);
    });
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

  onDeleteRecipe() {
    this.alertCtr.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Delete', handler: () => {
          this.recipiesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipies']);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    }).then(alertElm => alertElm.present());

  }


  //LifeCycle Hooks IONIC
  ionViewDidEnter() {
    console.log('did enter');

  }

  ionViewWillEnter() {
    console.log('will enter');
  }

  ionViewWillLeave() {
    console.log('will leve');
  }

  ionViewDidLeave() {
    console.log('did leave');
  }

  //End LifeCycle Hooks IONIC

}
