import { Movie } from './Movie';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })

// Class Data representa el HttpClient con sus métodos y la información simulando que viene desde un server

export class Data {
    movies: Movie[];
    constructor() {
        this.movies = [
            // {
            //   id: 1,
            //   name: 'Terminator 2',
            //   year: 1991,
            //   duration: '135 minutes'
            // },
            // {
            //   id: 2,
            //   name: 'Troya',
            //   year: 2004,
            //   duration: '163 minutes'
            // },
            // {
            //   id: 3,
            //   name: 'Batman: the dark night',
            //   year: 2008,
            //   duration: '152 minutes'
            // },
            // {
            //   id: 4,
            //   name: 'Braveheart',
            //   year: 1995 ,
            //   duration: '177 minutes'
            // },
            // {
            //   id: 5,
            //   name: 'Dances with Wolves',
            //   year: 1990,
            //   duration: '181 minutes'
            // },
            // {
            //   id: 6,
            //   name: 'The Last Samurai',
            //   year: 2003,
            //   duration: '144 minutes'
            // },
            // {
            //   id: 7,
            //   name: 'The Patriot',
            //   year: 2000,
            //   duration: '165 minutes'
            // },
            // {
            //   id: 8,
            //   name: 'Apocalypto',
            //   year: 2006,
            //   duration: '138 minutes'
            //   }
          ];
    }
    
    genId(): number {
        return this.movies.length > 0 ? Math.max(...this.movies.map(hero => hero.id)) + 1 : 1;
    }

    get() {
        if (localStorage.getItem('movies') === null) {
          return this.movies;
        } else {
          this.movies = JSON.parse(localStorage.getItem('movies'));
          return this.movies;
        }
        
    }

    put(movie:Movie): Movie  {
        let movieValue: Movie[] = [];
        movie.id = this.genId();
        if (localStorage.getItem('movies') === null) {
          movieValue.push(movie);
          localStorage.setItem('movies', JSON.stringify(movieValue)); 
        } else {
          movieValue = JSON.parse(localStorage.getItem('movies'));
          movieValue.push(movie);
          localStorage.setItem('movies', JSON.stringify(movieValue));
        }
                
        this.movies.push(movie);
        return movie;
    }

    delete(movie: Movie): Movie[] {
        this.movies = this.movies.filter(m => m !== movie);    
        localStorage.setItem('movies', JSON.stringify(this.movies));    
        return this.movies;
    }

    update(movie: Movie) {
        for (let i = 0; i < this.movies.length; i++) {
          if (this.movies[i] === movie) {
            this.movies[i] = movie; 
          }                    
          localStorage.setItem('movies', JSON.stringify(this.movies));
        }
        return movie
    }

}