import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Review } from '../model/Review';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.page.html',
  styleUrls: ['./review-list.page.scss'],
})
export class ReviewListPage implements OnInit {

  reviews: Review [] = [];
  constructor(private reviewService : ReviewService, private navCtrl : NavController) { }

  ngOnInit() {
    this.reviewService.findAll().subscribe(response => { 
      this.reviews = response
    });
  }

  save(review : Review){
    const navExtra : NavigationExtras ={
      queryParams: {
        review
      }
    }
    this.navCtrl.navigateForward('review-edition', navExtra);
  }

}
