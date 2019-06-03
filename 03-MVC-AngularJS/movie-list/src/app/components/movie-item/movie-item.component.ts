import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { MovieService } from "../../services/movie.service";


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
    .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  save(movie: Movie) {
    this.movieService.updateMovie(movie);
  }

}
