import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Book } from '../model/Book';
import { Review } from '../model/Review';
import { BooksService } from '../services/books.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  books: Book[] =  [];
  book: Book = {

  };

  reviews: Review[] = [];


  constructor(private reviewsService: ReviewService ,private bookService: BooksService, private navCtrl: NavController) { }

  ngOnInit() {
    this.bookService.findAll().subscribe(response => {
      this.books = response;
    });

    this.reviewsService.findAll().subscribe(params => {
      this.reviews = params;
    })
  }

  bookDetails(book: Book): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        book,
        reviews: this.reviews
      }
    };
    this.navCtrl.navigateForward('book-details', navigationExtras)
  }


  addBooks() {
    this.navCtrl.navigateForward('add-book');
  }

}
