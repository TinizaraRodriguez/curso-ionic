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

  books: Book[] = [];
  constructor(private bookService : BooksService, private navCtrl : NavController) { }

  ngOnInit() {
    this.bookService.findAll().subscribe(response => { 
      this.books = response
    });
  }

  bookDetails(book : Book){
    const navExtra : NavigationExtras ={
      queryParams: {
        book
      }
    }
    this.navCtrl.navigateForward('book-details', navExtra);
  }

  addBooks(){
    const navExtra : NavigationExtras ={
    
    }
    this.navCtrl.navigateForward('add-book', navExtra);
  }

}


