import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  
  constructor(private movieService: MovieService) { }

  ngOnInit() { 
    this.getMovies();    
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);      
  }

  add(name:string, year: number , duration:string): void {  
    console.log(name, year, duration);
      
    this.movieService.addMovie({name, year, duration} as Movie)
      .subscribe(movie => {
        console.log(movie);        
      });  
                
  }

  delete(movie: Movie): void {
    
    this.movieService.deleteMovie(movie)
      .subscribe(movies => this.movies = movies);
      console.log(this.movies);
      
  }
}
