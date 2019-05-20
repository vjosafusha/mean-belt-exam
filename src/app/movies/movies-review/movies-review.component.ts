import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Movie, Review } from 'src/app/models';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-review',
  templateUrl: './movies-review.component.html',
  styleUrls: ['./movies-review.component.css']
})
export class MoviesReviewComponent implements OnInit {
  reviewForm: FormGroup;
  movie: Movie;
  review: Review = new Review();
  id: string;

  constructor(private readonly reviewService: ReviewService,
              private readonly movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.intiForm();
    this.route.params.subscribe(params => (this.id = params.id));
    this.movieService.getMovieByID(this.id).subscribe(
      (response: Movie) => {
        this.movie = response;
      }
    );
  }

  intiForm() {
    this.reviewForm = new FormGroup({
      reviewName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rating: new FormControl([Validators.required, Validators.min(1), Validators.max(5)]),
      content: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  get name() { return this.reviewForm.get('reviewName'); }

  get rating() { return this.reviewForm.get('rating'); }

  get content() { return this.reviewForm.get('content'); }

  onSubmit(data) {
    if (this.reviewForm.invalid) {
      return;
    } else {
      this.review.reviewName = data.reviewName;
      this.review.rating = data.rating;
      this.review.content = data.content;

      this.reviewService.createReview(this.id, this.review).subscribe(
        (review: Review) => {
          this.router.navigate(['/movies', this.id]);
        });
    }
  }
}
