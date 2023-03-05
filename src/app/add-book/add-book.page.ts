import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {

  books: Book[] =  [];
  book: Book = {};
  mostrarDateTime: boolean = false;

  constructor(private navCtrl : NavController, private bookService : BooksService,private http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {

    
  }


  createBook() {
    this.bookService.createBook(this.book)
      .subscribe((response) => {
        console.log(response);
      });
  }

  toggleDateTime() {
    this.mostrarDateTime = !this.mostrarDateTime;
  }


  back() {
    this.navCtrl.navigateForward('book-list');
  }


  

}
