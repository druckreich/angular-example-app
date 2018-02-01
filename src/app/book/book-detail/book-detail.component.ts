import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Book} from '../../store/book/book.model';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> =
    Observable.combineLatest(
      this.store.select(fromRoot.selectAllBooks),
      this.route.params
    )
      .map((data: any) => {
        const {0: books, 1: params} = data;
        const id: number = +params['id'];
        return books.find((b: Book) => b.id === id);
      });


  constructor(private route: ActivatedRoute, private store: Store<any>) {
  }

  ngOnInit() {
  }

}
