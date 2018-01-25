import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Book} from "./book.model";
import {BookActions, BookActionTypes} from "./book.actions";

export interface State extends EntityState<Book> {
  selectedBook: Book;
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

const initialState: State = bookAdapter.getInitialState({
  selectedBook: null
});

export function bookReducer(state: State = initialState, action: BookActions): State {
  switch (action.type) {
    case BookActionTypes.ADD_BOOK: {
      return bookAdapter.addOne(action.payload.book, state);
    }

    case BookActionTypes.ADD_BOOKS: {
      return bookAdapter.addMany(action.payload.books, state);
    }

    case BookActionTypes.UPDATE_BOOK: {
      return bookAdapter.updateOne(action.payload.book, state);
    }

    case BookActionTypes.UPDATE_BOOKS: {
      return bookAdapter.updateMany(action.payload.books, state);
    }

    case BookActionTypes.DELETE_BOOK: {
      return bookAdapter.removeOne(action.payload.id, state);
    }

    case BookActionTypes.DELETE_BOOKS: {
      return bookAdapter.removeMany(action.payload.ids, state);
    }

    case BookActionTypes.LOAD_BOOKS: {
      return bookAdapter.addAll(action.payload.books, state);
    }

    case BookActionTypes.CLEAR_BOOKS: {
      return bookAdapter.removeAll({...state, selectedUserId: null});
    }

    default: {
      return state;
    }
  }
}





