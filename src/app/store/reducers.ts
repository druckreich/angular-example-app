import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as fromBook from './book/book.reducer';
import {environment} from '../../environments/environment';

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
export const getBookSelector = fromBook.bookAdapter.getSelectors(getBookState);






