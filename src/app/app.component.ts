import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {InitApp} from './app.actions';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from './store/reducers';
import {Book} from './store/book/book.model';
import * as BookActions from './store/book/book.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books$: Observable<Book[]> = this.store.select(fromRoot.selectFilteredBooks);
  bookTotal$: Observable<number> = this.store.select(fromRoot.selectBookTotal);

  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.dispatch(new InitApp());
  }

  handleKeyup(filter: string): void {
    this.store.dispatch(new BookActions.SearchBooks(filter));
  }

}
