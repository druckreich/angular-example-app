import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {RootActionTypes} from './actions';
import {LoadBooks} from './book/book.actions';
import {Book} from './book/book.model';
import {BookService} from './book/book.service';

@Injectable()
export class AppEffects {
  @Effect()
  initApp$ = this.actions$.ofType(RootActionTypes.INIT_MODULE)
    .mergeMap(action => {
        return this.bookService.get().map((books: Book[]) => {
          return new LoadBooks({books: books});
        });
      }
    );

  constructor(private actions$: Actions, private bookService: BookService) {

  }
}
