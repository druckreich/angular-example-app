import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {InitModule} from './store/actions';
import {Book} from './store/book/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private store: Store<any>, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.store.dispatch(new InitModule());
  }

  handleShowDetails(book: Book) {
    const initialState = {
      book: book
    };
    this.modalRef = this.modalService.show(BookDetailComponent, {initialState: initialState});
  }

}
