import { Routes } from '@angular/router';
import { AboutComponent } from '@src/app/pages/about/about.component';


export const routes: Routes = [
  {
      path: '',
      redirectTo: '/about',
      pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
