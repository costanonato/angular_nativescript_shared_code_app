import { Routes } from '@angular/router';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieFormComponent } from '@src/app/pages/movie-form/movie-form.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';
import { WatchNextComponent } from '@src/app/pages/watch-next/watch-next.component';


export const routes: Routes = [
  {
      path: '',
      redirectTo: '/watch_next',
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
    path: 'watch_next',
    component: WatchNextComponent,
  },
  {    
    path: 'about',
    component: AboutComponent,
  }
];
