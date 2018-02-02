import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {BookActions, BookActionTypes} from './book.actions';
import {Book} from './book.model';


export interface State extends EntityState<Book> {
  q: string;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: (b: Book) => {
    if (b.hasOwnProperty('isbn')) {
      return b['key'];
    }
  }
});

const initialState: State = adapter.getInitialState({
  q: ''
});

export function bookReducer(state: State = initialState, action: BookActions): State {
  switch (action.type) {
    case BookActionTypes.ADD_BOOK: {
      return adapter.addOne(action.payload.book, state);
    }

    case BookActionTypes.ADD_BOOKS: {
      return adapter.addMany(action.payload.books, state);
    }

    case BookActionTypes.UPDATE_BOOK: {
      return adapter.updateOne(action.payload.book, state);
    }

    case BookActionTypes.UPDATE_BOOKS: {
      return adapter.updateMany(action.payload.books, state);
    }

    case BookActionTypes.DELETE_BOOK: {
      return adapter.removeOne(action.payload.id, state);
    }

    case BookActionTypes.DELETE_BOOKS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case BookActionTypes.LOAD_BOOKS: {
      return adapter.addAll(action.payload.books, state);
    }

    case BookActionTypes.CLEAR_BOOKS: {
      return adapter.removeAll({...state, selectedUserId: null});
    }

    case BookActionTypes.SEARCH_BOOKS: {
      return {
        ...state,
        q: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectBookTotal
} = adapter.getSelectors();

export const searchBook = (state: State) => state.q;







