import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromBook from './book/book.reducer';

// ---------------> State Interface


export interface State {
  books: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBook.bookReducer
};

// ---> selectors

export const bookFeature = createFeatureSelector<any>('book');
export const bookState = createSelector(bookFeature, (state: State) => state.books);
export const selectAllBooks = createSelector(bookState, fromBook.selectAllBooks);
export const selectBookTotal = createSelector(bookState, fromBook.selectBookTotal);













