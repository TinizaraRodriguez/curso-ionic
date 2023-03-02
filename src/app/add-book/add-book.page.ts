import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  createBook() {
    
    this.navCtrl.navigateForward('book-list');

  }

  back() {
    this.navCtrl.navigateForward('book-list');
  }

  

}
