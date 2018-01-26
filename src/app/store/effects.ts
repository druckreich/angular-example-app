import {Actions, Effect} from '@ngrx/effects';
import {AppActionTypes} from '../app.actions';
import {Injectable} from '@angular/core';
import {BookService} from './book/book.service';
import {Book} from './book/book.model';
import {LoadBooks} from './book/book.actions';

@Injectable()
export class AppEffects {
  @Effect()
  initApp$ = this.actions$.ofType(AppActionTypes.INIT_APP)
    .mergeMap(action => {
        return this.bookService.get().map((books: Book[]) => {
          return new LoadBooks({books: books});
        });
      }
    );

  constructor(private actions$: Actions, private bookService: BookService) {

  }
}
