import {Update} from '@ngrx/entity';
import {Action} from '@ngrx/store';
import {Book} from './book.model';

export enum BookActionTypes {
  LOAD_BOOKS = '[Book] Load Books',
  ADD_BOOK = '[Book] Add Book',
  ADD_BOOKS = '[Book] Add Books',
  UPDATE_BOOK = '[Book] Update Book',
  UPDATE_BOOKS = '[Book] Update Books',
  DELETE_BOOK = '[Book] Delete Book',
  DELETE_BOOKS = '[Book] Delete Books',
  CLEAR_BOOKS = '[Book] Clear Books',
  SEARCH_BOOKS = '[Book] Search Books',
  SELECT_BOOK = '[Book] Select Book'
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS;

  constructor(public payload: { books: Book[] }) {
  }
}

export class AddBook implements Action {
  readonly type = BookActionTypes.ADD_BOOK;

  constructor(public payload: { book: Book }) {
  }
}

export class AddBooks implements Action {
  readonly type = BookActionTypes.ADD_BOOKS;

  constructor(public payload: { books: Book[] }) {
  }
}

export class UpdateBook implements Action {
  readonly type = BookActionTypes.UPDATE_BOOK;

  constructor(public payload: { book: Update<Book> }) {
  }
}

export class UpdateBooks implements Action {
  readonly type = BookActionTypes.UPDATE_BOOKS;

  constructor(public payload: { books: Update<Book>[] }) {
  }
}

export class DeleteBook implements Action {
  readonly type = BookActionTypes.DELETE_BOOK;

  constructor(public payload: { id: number }) {
  }
}

export class DeleteBooks implements Action {
  readonly type = BookActionTypes.DELETE_BOOKS;

  constructor(public payload: { ids: number[] }) {
  }
}

export class ClearBooks implements Action {
  readonly type = BookActionTypes.CLEAR_BOOKS;
}

export class SearchBook implements Action {
  readonly type = BookActionTypes.SEARCH_BOOKS;

  constructor(public payload: string) {
  }
}

export class SelectBook implements Action {
  readonly type = BookActionTypes.SELECT_BOOK;

  constructor(public payload: number) {
  }
}

export type BookActions =
  LoadBooks
  | AddBook
  | AddBooks
  | UpdateBook
  | UpdateBooks
  | DeleteBook
  | DeleteBooks
  | ClearBooks
  | SearchBook
  | SelectBook;

