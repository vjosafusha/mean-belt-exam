import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesAddComponent } from './movies/movies-add/movies-add.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { MoviesReviewComponent } from './movies/movies-review/movies-review.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: MoviesListComponent,
      },
      {
        path: 'add',
        component: MoviesAddComponent
      },
      {
        path: ':id',
        component: MoviesDetailsComponent,
      },
      {
        path: ':id/review',
        component: MoviesReviewComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
