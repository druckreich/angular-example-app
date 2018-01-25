import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {books} from "./book-list";
import {Book} from "./book.model";
import {Injectable} from "@angular/core";

@Injectable()
export class BookService {
  constructor(http: HttpClient) {

  }

  public get(): Observable<Book[]> {
    return Observable.of(books);
  }
}
