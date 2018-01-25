import {HttpClient} from "@angular/common/http";
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {BookActionTypes} from "./book.actions";
import {BookService} from "./book.service";
import {Book} from "./book.model";
import {Injectable} from "@angular/core";

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookService: BookService) {
  }

  // @Effect() login$: Observable<Action> = this.actions$.ofType(BookActionTypes.LOAD_BOOKS)
  //   .mergeMap(action => this.bookService.get().map((books: Book[]) => {
  //       console.log(books);
  //     })
  //   )

}
