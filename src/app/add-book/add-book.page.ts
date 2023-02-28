import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  back() {
    this.navCtrl.navigateForward('book-list');

  }

  ngOnInit() {
  }

}
