import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesAddComponent } from './movies/movies-add/movies-add.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { MoviesReviewComponent } from './movies/movies-review/movies-review.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesListComponent,
    MoviesAddComponent,
    MoviesDetailsComponent,
    MoviesReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
