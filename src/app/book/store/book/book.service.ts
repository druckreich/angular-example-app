import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {books} from "../book-list";
import {Book} from "./book.model";

@Injectable()
export class BookService {
  constructor(http: HttpClient) {

  }

  public get(): Observable<Book[]> {
    return Observable.of(books);
  }

  public getById(id: number = null): Observable<Book> {
    return Observable.of(books.find((book: Book) => book.id === id));
  }
}
