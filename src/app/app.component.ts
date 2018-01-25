import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {InitApp} from "./app.actions";
import {Observable} from "rxjs/Observable";
import './rxjs-imports';
import {getAllBooks, getBookSelector} from "./store/reducers";
import {Book} from "./store/book/book.model";
import {selectAll} from './store/reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books$: Observable<Book[]> = this.store.select(getBookSelector.selectAll);


  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.dispatch(new InitApp());
  }

}
