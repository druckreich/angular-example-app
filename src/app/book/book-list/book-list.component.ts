import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as BookActions from '../../store/book/book.actions';
import {Book} from '../../store/book/book.model';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]> = this.store.select(fromRoot.selectFilteredBooks);
  bookTotal$: Observable<number> = this.store.select(fromRoot.selectBookTotal);

  checkedBookIds: number[] = [];

  constructor(private store: Store<any>, private router: Router) {
  }

  ngOnInit() {
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

  handleListGroupItemClick(book: Book): void {
    this.router.navigate(['/books', {outlets: {'book-details': [book.id]}}]);
  }

}
