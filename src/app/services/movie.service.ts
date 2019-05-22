import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http: HttpClient) { }
  private readonly base = '/movies';

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.base}/`);
  }

  getMovieByID(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.base}/${id}`);
  }
  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.base}/`, movie);
  }

  editMovie(editMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.base}/${editMovie._id}`, editMovie);
  }

  deleteMovie(id: string): Observable<Movie> {
    return this.http.delete<Movie>(`${this.base}/${id}`);
  }
}
