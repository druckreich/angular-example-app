import {Component} from '@angular/core';
import {AppState} from "./app.state";
import {Store} from '@ngrx/store';
import {InitApp} from "./app.actions";
import {Observable} from "rxjs/Observable";
import './rxjs-imports';
import {BookState} from "./store/book/book.reducer";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bookState$: Observable<BookState> = this.store.select(s => s.bookState);

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new InitApp());
  }

}
