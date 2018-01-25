import {Actions, Effect} from '@ngrx/effects';
import {AppActionTypes} from "./app.actions";
import {Injectable} from "@angular/core";
import {BookService} from "./store/book/book.service";
import {Book} from "./store/book/book.model";
import {LoadBooks} from "./store/book/book.actions";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private bookService: BookService) {

  }

  @Effect()
  initApp$ = this.actions$.ofType(AppActionTypes.INIT_APP)
    .mergeMap(action => {
        return this.bookService.get().map((books: Book[]) => {
          return new LoadBooks({books: books});
        });
      }
    );


}
