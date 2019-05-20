import { Review } from './review.model';

export class Movie {
// tslint:disable-next-line: variable-name
  _id: string;
  movieName?: string;
  reviews: Review[];
  average?: number;
}
