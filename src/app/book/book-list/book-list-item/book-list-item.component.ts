import {Component, OnInit, Input} from '@angular/core';
import {Book} from '../../store/book/book.model';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input()
  book: Book;

  constructor() {
  }

  ngOnInit() {
  }

  getAuthorName(): string {
    return this.book.author_name ? this.book.author_name.join(',') : ' unknown';
  }
}
