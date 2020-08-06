import { Location } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '@src/app/shared/movie.model';
import { MovieService } from '@src/app/shared/movie.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movieForm: FormGroup;
  movie: Movie;
  submittingForm: boolean = false;
  movieRatingOptions = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];


  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.buildMovieForm();
    this.loadMovieAndFillForm();
  }

  goBack() {
    this.location.back();
  }

  updateMovie() {
    this.submittingForm = true;

    const movie: Movie = Movie.fromJson(this.movieForm.value);

    this.movieService.update(movie).subscribe(
      movie => {
        this.movie = movie;
        this.submittingForm = false;
        alert('Filme atualizado');
      }
    )
  }


  // -------------------------
  // private methods
  // -------------------------

  private buildMovieForm(){
    this.movieForm = this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      obs: [null],
      rating: [null],
      toWatchNext: [false]
    })
  }

  private loadMovieAndFillForm(){
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.movieService.getById(+params.get('id'))
      )
    ).subscribe(
      movie => {
        this.movie = movie;
        this.movieForm.patchValue(movie);
      }
    )
  }

}
