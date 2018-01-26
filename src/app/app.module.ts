import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {metaReducers, reducers} from "./store/reducers";
import {EffectsModule} from '@ngrx/effects';
import {BookService} from "./store/book/book.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {AppEffects} from "./store/effects";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([
      AppEffects
    ])

  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
