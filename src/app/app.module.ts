import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {BookModule} from './book/book.module';
import {metaReducers, reducers} from './store/reducers';

export const APP_ROUTES: Routes = [
  {path: '**', pathMatch: 'full', redirectTo: 'books'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    BookModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
