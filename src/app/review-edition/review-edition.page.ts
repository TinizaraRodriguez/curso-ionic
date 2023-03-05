import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../model/Review';
import { NavController } from '@ionic/angular';
import { ReviewService } from '../services/review.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-review-edition',
  templateUrl: './review-edition.page.html',
  styleUrls: ['./review-edition.page.scss'],
})
export class ReviewEditionPage implements OnInit {

  book: Book = {

  }

  allReviews: Review[] = [];

  bookReviews: Review[] = [];

  constructor(private navCtrl: NavController,private route:ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    this.viewReview();
  }
  
  viewReview() {
    this.allReviews.forEach( review=> {
      if (review.book.id === this.book.id){
        this.bookReviews.push(review)
      }
    })
  }

  back() {
    this.navCtrl.navigateForward('book-list');
  }

}
