import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'book-list',
    pathMatch: 'full'
  },
  {
    path: 'review-list',
    loadChildren: () => import('./review-list/review-list.module').then( m => m.ReviewListPageModule)
  },
  {
    path: 'review-edition',
    loadChildren: () => import('./review-edition/review-edition.module').then( m => m.ReviewEditionPageModule)
  },
  {
    path: 'book-list',
    loadChildren: () => import('./book-list/book-list.module').then( m => m.BookListPageModule)
  },
  {
    path: 'book-details',
    loadChildren: () => import('./book-details/book-details.module').then( m => m.BookDetailsPageModule)
  },
  {
    path: 'add-book',
    loadChildren: () => import('./add-book/add-book.module').then( m => m.AddBookPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
