import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../store/book/book.model';
import {BookService} from '../../store/book/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      bookService.getById(params['id']).subscribe((book: Book) => {
        this.book = book;
      });
    });
  }

  ngOnInit() {
  }

}
