import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {

  readonly baseUrl: string = 'http://openlibrary.org/search.json';

  constructor(private http: HttpClient) {

  }

  public search(search: string): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('title', search);
    return this.http.get(this.baseUrl, {params: params});
  }
}
