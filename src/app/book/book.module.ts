import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookService} from '../store/book/book.service';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookComponent} from './book.component';

export const BOOK_ROUTES: Routes = [
  {
    path: 'books',
    component: BookComponent,
    children: [
      {path: ':id', component: BookDetailComponent, outlet: 'book-details'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BOOK_ROUTES)
  ],
  providers: [
    BookService
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule {
}
