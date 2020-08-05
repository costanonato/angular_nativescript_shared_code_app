import { Component, OnInit } from '@angular/core';
import { Movie } from '@src/app/shared/movie.model';
import { MovieService } from '@src/app/shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }



  // -------------------------------------
  // private methods
  // -------------------------------------
  private loadMovies(){
    this.movieService.getAll().subscribe(
      movies => this.movies = movies
    )
  }
}
