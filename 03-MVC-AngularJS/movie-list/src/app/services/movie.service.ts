import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { Observable, of } from "rxjs";
import { Data } from "../models/data";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private data: Data) { }

  getMovies(): Observable<Movie[]> {
    return of(this.data.get());
  }

  getMovie(id:number): Observable<Movie> {
    return of(this.data.get().find(movie => movie.id === id));
  }

  addMovie(movie:Movie): Observable<Movie> {
    return of(this.data.put(movie));
  }
  
  deleteMovie(movie: Movie): Observable<Movie[]> {
    return of(this.data.delete(movie));
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return of(this.data.update(movie));
  }
}
