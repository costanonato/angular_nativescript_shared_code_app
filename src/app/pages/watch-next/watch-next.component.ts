import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movie } from '@src/app/shared/movie.model';
import { MovieService } from '@src/app/shared/movie.service';


@Component({
  selector: 'app-watch-next',
  templateUrl: './watch-next.component.html',
  styleUrls: ['./watch-next.component.css']
})
export class WatchNextComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private location: PlatformLocation
  ) { }


  ngOnInit() {
    this.loadMovies();
    this.location.onPopState(() => this.loadMovies());
  }


  // -------------------------------------
  // private methods
  // -------------------------------------
  private loadMovies(){
    this.movieService.getMoviesToWatchNext().subscribe(
      movies => this.movies = movies
    )
  }

}