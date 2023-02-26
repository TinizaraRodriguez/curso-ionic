import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  books: Book[] = [];
  constructor(private bookService : BooksService) { }

  ngOnInit() {
    this.bookService.findAll().subscribe(response => { 
      this.books = response
    });
  }

}


