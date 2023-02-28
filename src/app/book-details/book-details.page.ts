import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Book } from '../model/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  book: Book = {

  };

  constructor(private bookService: BooksService, private route: ActivatedRoute, private navCtrl: NavController) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(paco => {
      this.book = paco['book']
    });
}

back() {
  this.navCtrl.navigateForward('book-list');
}



}
