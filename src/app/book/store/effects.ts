import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {mergeMap} from 'rxjs/operators';
import {LoadBooks, BookActionTypes, SearchBook} from './book/book.actions';
import {BookService} from './book/book.service';


@Injectable()
export class BookEffects {


  constructor(private actions$: Actions, private bookService: BookService) {

  }

  @Effect()
  searchBooks$: Observable<Action> = this.actions$.pipe(
    ofType(BookActionTypes.SEARCH_BOOKS),
    mergeMap((action: SearchBook) => {
      return this.bookService.search(action.payload)
        .map((result: any) => {
          const books: any = result.docs;
          return new LoadBooks({books: books});
        });
    })
  );
}
