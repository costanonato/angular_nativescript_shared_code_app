import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
