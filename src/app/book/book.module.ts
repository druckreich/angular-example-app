import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookFormComponent} from './book-detail/book-form/book-form.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookComponent} from './book.component';

import {BookService} from './store/book/book.service';
import {BookEffects} from './store/effects';
import {reducers} from './store/reducers';
import { BookListItemComponent } from './book-list/book-list-item/book-list-item.component';

export const BOOK_ROUTES: Routes = [
  {path: 'books', component: BookComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(BOOK_ROUTES),

    StoreModule.forFeature('book', reducers),
    EffectsModule.forFeature([
      BookEffects
    ]),

    ModalModule.forRoot()
  ],
  providers: [
    BookService
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookFormComponent,
    BookListItemComponent
  ],
  exports: [
    BookComponent
  ],
  entryComponents: [
    BookDetailComponent
  ]
})

export class BookModule {
}
