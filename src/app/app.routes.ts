import { Routes } from '@angular/router';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieFormComponent } from '@src/app/pages/movie-form/movie-form.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';


export const routes: Routes = [
  {
      path: '',
      redirectTo: '/movies/2/edit', // ROTA PADRAO TEMPORARIA ENQUANTO O TEMPLATE <MOVIE-FORM> EH CONSTRUIDO
      pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/:id/edit',
    component: MovieFormComponent
  },
  {    
    path: 'about',
    component: AboutComponent,
  }
];
