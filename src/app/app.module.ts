import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {bookReducer} from "./store/book/book.reducer";
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from "./store/book/book.effects";
import {BookService} from "./store/book/book.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {AppEffects} from "./app.effects";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: bookReducer
    }),
    EffectsModule.forRoot([
      AppEffects,
      BookEffects
    ])

  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
