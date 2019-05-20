import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review, Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private readonly http: HttpClient) { }

  private readonly base = 'http://localhost:8000/movies';

  getReviewsByMovieId(movieId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.base}/${movieId}/reviews`);
  }
  getReviewsById(id: string): Observable<Review> {
    return this.http.get<Review>(`${this.base}/${id}`);
  }

  createReview(movieId: string, review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.base}/${movieId}/reviews`, review);
  }

  deleteReview(movieId: string, reviewId: string): Observable<Review> {
    return this.http.delete<Review>(`${this.base}/${movieId}/reviews/${reviewId}`);
  }

}
