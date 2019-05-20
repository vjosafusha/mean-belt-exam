import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie, Review } from 'src/app/models';
import { ReviewService } from 'src/app/services/review.service';
import { getParentInjectorViewOffset } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private readonly movieService: MovieService, private readonly reviewService: ReviewService) { }
  movies: Movie[];
  openForm = false;

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies()
      .subscribe((response: Movie[]) => {
        this.movies = response;
        if (this.movies !== null) {
          this.movies.forEach((movie) => {
            this.reviewService.getReviewsByMovieId(movie._id).subscribe((reviews: Review[]) => {
              movie.reviews = reviews;
              movie.average = this.getAverage(movie.reviews);
            });
          });
        }
    });
  }

  getAverage(reviews: Review[]){
    let sum = 0;
    reviews.forEach((review) => {
      sum += review.rating;
    });
    return sum / reviews.length;
  }

  onClick() {
    this.openForm = true;
  }

  onAdded(movie: Movie) {
      this.openForm = false;
      this.ngOnInit();
  }

}
