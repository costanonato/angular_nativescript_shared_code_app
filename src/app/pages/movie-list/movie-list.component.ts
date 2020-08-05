import { Component, OnInit } from '@angular/core';
import { MovieListHelper } from '@src/app/pages/movie-list/movie-list.helper';
import { Movie } from '@src/app/shared/movie.model';
import { MovieService } from '@src/app/shared/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  newMovieTitle: string = '';


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }

  createMovie() {
    if(!this.newMovieTitle) { return; }

    const movie = Movie.fromJson({title: this.newMovieTitle});

    this.movieService.create(movie).subscribe(
      movie => {
        this.movies.unshift(movie);
        this.newMovieTitle = '';
      }
    )
  }

  async deleteMovie(movie: Movie) {
    const message = `Deseja realmente excluir o filme "${movie.title}"?`;
    const mustDelete = await MovieListHelper.showDeleteMovieConfirmation(message);

    if(mustDelete){
      this.movieService.delete(movie).subscribe(
        () => this.movies = this.movies.filter(element => element != movie)
      )
    }
  }

  toggleMovieWatchNext(movie: Movie) {
    this.movieService.toggleMovieWatchNext(movie).subscribe();
  }

  showDrawer(){
    MovieListHelper.showDrawer()
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
