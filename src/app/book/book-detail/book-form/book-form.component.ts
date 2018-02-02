import {Component, OnInit, Input, AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Book} from '../../store/book/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, AfterViewInit {

  @Input()
  book: Book;

  @ViewChild('form')
  form: NgForm;

  @Output()
  valueChanges: EventEmitter<NgForm> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe((value: any) => {
      this.valueChanges.emit(value);
    });
  }

}
