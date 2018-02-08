import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Book} from '../store/book/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  formValue: Book;

  constructor(public bsModalRef: BsModalRef, private store: Store<any>) {
  }

  ngOnInit() {
  }

  handleValueChanges(value: Book): void {
    this.formValue = value;
  }

  handleSave(): void {
    this.bsModalRef.hide();
  }

}