import {Actions, Effect} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from "./app.state";
import {AppActionTypes} from "./app.actions";
import {LoadBooks} from "./store/book/book.actions";
import {Injectable} from "@angular/core";
import {books} from "./store/book/book-list";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private state: Store<AppState>) {

  }

  @Effect()
  initApp$ = this.actions$.ofType(AppActionTypes.INIT_APP)
    .mergeMap(action => [
      new LoadBooks({books: books})
    ]);
}
