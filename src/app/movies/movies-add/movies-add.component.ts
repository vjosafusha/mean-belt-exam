import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { ReviewService } from 'src/app/services/review.service';
import { Movie, Review } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  @Output() added = new EventEmitter<Movie>();

  movieReviewForm: FormGroup;
  movie: Movie = new Movie();
  review: Review = new Review();

  constructor(private readonly movieService: MovieService,
              private readonly reviewService: ReviewService,
              private router: Router) { }

  ngOnInit() {
    this.intiForm();
  }

  intiForm() {
    this.movieReviewForm = new FormGroup({
      movieName: new FormControl(''),
      reviewName: new FormControl(''),
      rating: new FormControl(),
      content: new FormControl('')
    });
  }

  get movieName() { return this.movieReviewForm.get('movieName'); }

  get name() { return this.movieReviewForm.get('reviewName'); }

  get rating() { return this.movieReviewForm.get('rating'); }

  get content() { return this.movieReviewForm.get('content'); }


  onSubmit(data) {
    this.movie.movieName = data.movieName;
    this.review.reviewName = data.reviewName;
    this.review.rating = data.rating;
    this.review.content = data.content;

    this.movieService.createMovie(this.movie).subscribe(
      (movie: Movie) => {
        console.log(movie);
        this.reviewService.createReview(movie._id, this.review).subscribe(
          (review: Review) => {
            console.log('Done');
          });
        this.added.emit(this.movie);
      });
    this.movieReviewForm.reset();
  }

  onCancel() {
    this.movieReviewForm.reset();
    this.added.emit(this.movie);
  }
}
