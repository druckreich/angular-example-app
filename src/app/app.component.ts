import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {InitApp} from './app.actions';
import * as BookActions from './store/book/book.actions';
import {Book} from './store/book/book.model';
import * as fromRoot from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  books$: Observable<Book[]> = this.store.select(fromRoot.selectFilteredBooks);
  bookTotal$: Observable<number> = this.store.select(fromRoot.selectBookTotal);

  checkedBookIds: number[] = [];

  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.dispatch(new InitApp());
  }

  handleKeyup(filter: string): void {
    this.store.dispatch(new BookActions.SearchBook(filter));
  }

  handleDeleteButtonClicked(): void {
    this.store.dispatch(new BookActions.DeleteBooks({ids: this.checkedBookIds}));
    this.checkedBookIds = [];
  }

  handleCheckBookChange(book: Book): void {
    const index: number = this.checkedBookIds.indexOf(book.id);
    if (index === -1) {
      this.checkedBookIds = [...this.checkedBookIds, book.id];
    } else {
      this.checkedBookIds = [...this.checkedBookIds.slice(0, index), ...this.checkedBookIds.slice(index + 1)];
    }
  }
}
