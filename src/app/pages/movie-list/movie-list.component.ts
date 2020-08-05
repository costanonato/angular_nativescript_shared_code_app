import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = [
    { id: 1,  title: 'Bastardos Inglórios',        obs: 'Lorem ipsum dolor sit amet, consectetur adipiscing',  rating: 5,    toWatchNext: true },
    { id: 2,  title: 'Guardiões da Galáxia',       obs: 'Etiam eget ligula eu lectus lobortis condimentum',    rating: 5,    toWatchNext: true },
    { id: 3,  title: 'Um Contratempo',             obs: 'Duis aute irure dolor in reprehenderit in voluptate', rating: 4.5,  toWatchNext: false },
    { id: 4,  title: 'Cidade de Deus',             obs: 'Lorem ipsum dolor sit amet, consectetur adipiscing',  rating: 4.5,  toWatchNext: false },
    { id: 5,  title: 'Corra',                      obs: 'Etiam eget ligula eu lectus lobortis condimentum',    rating: 4,    toWatchNext: true },
    { id: 6,  title: 'Django',                     obs: 'Excepteur sint occaecat cupidatat non proident sit',  rating: 4,    toWatchNext: false },
    { id: 7,  title: 'O Resgate do Soldado Ryan',  obs: 'Ut enim ad minim veniam, quis nostrud exercitation',  rating: 4,    toWatchNext: false },
    { id: 8,  title: 'Pulp Fiction',               obs: 'Duis aute irure dolor in reprehenderit in voluptate', rating: 4,    toWatchNext: true },
    { id: 9,  title: 'O Irlandês',                 obs: 'Excepteur sint occaecat cupidatat non proident sit',  rating: null, toWatchNext: true },
    { id: 10, title: 'Onde os Fracos Não Têm Vez', obs: 'Ut enim ad minim veniam, quis nostrud exercitation',  rating: null, toWatchNext: true },
    { id: 11, title: 'Os Suspeitos',               obs: 'Duis aute irure dolor in reprehenderit in voluptate', rating: null, toWatchNext: true },
    { id: 12, title: 'Era uma vez em Hollywood',   obs: 'Etiam eget ligula eu lectus lobortis condimentum',    rating: null, toWatchNext: true },
    { id: 13, title: 'John Wick',                  obs: 'Lorem ipsum dolor sit amet, consectetur adipiscing',  rating: 3.5,  toWatchNext: false },
    { id: 14, title: 'Parasita',                   obs: 'Etiam eget ligula eu lectus lobortis condimentum',    rating: 4,    toWatchNext: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
