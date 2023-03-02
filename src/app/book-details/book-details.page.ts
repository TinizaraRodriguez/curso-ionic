import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Book } from '../model/Book';
import { Review } from '../model/Review';
import { BooksService } from '../services/books.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  book: Book = {

  };

  allReviews: Review[] = [];

  bookReviews: Review[] = [];


  constructor(private bookService: BooksService,
    private reviewService: ReviewService, 
    private route: ActivatedRoute, 
    private navCtrl: NavController) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(paco => {
      if (!!paco['book']) {
        this.book = paco['book'];
      }

      if (!!paco['reviews']) {
        this.allReviews = paco['reviews'];
        console.log(paco['reviews'])
      }
    });

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
