import {ActionReducer, ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import * as fromBook from './book/book.reducer';
import {environment} from '../../environments/environment';
import {Book} from './book/book.model';

// ---------------> Logger and Metareducer

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

// ---------------> State Interface


export interface State {
  books: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBook.bookReducer
};

// ---------------> Selectors

export const getBookState = (state: State) => state.books;


export const selectAllBooks = createSelector(getBookState, fromBook.selectAllBooks);
export const selectBookTotal = createSelector(getBookState, fromBook.selectBookTotal);

export const searchBook = createSelector(getBookState, fromBook.searchBook);

export const selectFilteredBooks = createSelector(selectAllBooks, searchBook, (books, filter) => {
  if (filter) {
    return books.filter((book: Book) => book.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
  return books;
});














