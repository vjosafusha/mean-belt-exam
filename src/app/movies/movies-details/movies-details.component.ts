import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Review } from 'src/app/models';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie: Movie;
  reviews: Review[];
  review: Review = new Review();
  id: string;

  constructor(private readonly movieService: MovieService,
              private readonly reviewService: ReviewService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => (this.id = params.id));
    this.getReviewsByMovieId(this.id);
    this.movieService.getMovieByID(this.id).subscribe(
      (response: Movie) => {
        this.movie = response;
      }
    );
  }

  getReviewsByMovieId(id: string) {
    this.reviewService.getReviewsByMovieId(this.id).subscribe(
      (response: Review[]) => {
        this.reviews = response;
      }
    );
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this Movie?') === true) {
      this.reviewService
        .getReviewsByMovieId(id)
        .subscribe((response: any) => {
          this.movieService.deleteMovie(id).subscribe((movie: Movie) => {
              this.router.navigateByUrl('/movies');
            });
        });
    }
  }

  onDeleteReview(reviewId: string) {
    this.reviewService.deleteReview(this.id, reviewId).subscribe(
      (repsonse: Review) => {
        this.getReviewsByMovieId(this.id);
    });
  }
}
