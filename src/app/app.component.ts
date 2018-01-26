import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {InitApp} from './app.actions';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from './store/reducers';
import {Book} from './store/book/book.model';
import * as BookActions from './store/book/book.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  books$: Observable<Book[]> = this.store.select(fromRoot.selectFilteredBooks);
  bookTotal$: Observable<number> = this.store.select(fromRoot.selectBookTotal);
  hasCheckedBooks$: Observable<boolean> = this.store.select(fromRoot.hasCheckedBooks);
  checkedBooks$: Observable<Book[]> = this.store.select(fromRoot.selectCheckedBooks);

  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.dispatch(new InitApp());
  }

  handleKeyup(filter: string): void {
    this.store.dispatch(new BookActions.SearchBook(filter));
  }

  handleDeleteButtonClicked(books: Book[]): void {
    const bookIds: number[] = books.map((book: Book) => book.id);
    this.store.dispatch(new BookActions.DeleteBooks({ids: bookIds}));
  }

  handleCheckBookChange(book: Book): void {
    this.store.dispatch(new BookActions.UpdateBook(
      {
        book:
          {
            id: book.id,
            changes: {$isChecked: !book.$isChecked}
          }
      }));
  }
}
