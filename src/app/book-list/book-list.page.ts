import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  books: Book[] =  [];
  book: Book = {

  };

  constructor(private bookService: BooksService, private navCtrl: NavController) { }

  ngOnInit() {
    this.bookService.findAll().subscribe(response => {
      this.books = response;
    });
  }

  bookDetails(book: Book): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        book
      }
    };
    this.navCtrl.navigateForward('book-details', navigationExtras)
  }

  addBooks() {
    this.navCtrl.navigateForward('add-book');
  }

}
