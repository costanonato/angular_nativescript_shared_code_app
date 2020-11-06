import { ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "@src/app/app-routing.module"
import { AppComponent } from "@src/app/app.component"
import { InMemoryDataService } from "@src/app/in-memory-data.service"
import { AboutComponent } from "@src/app/pages/about/about.component"
import { MovieFormComponent } from "@src/app/pages/movie-form/movie-form.component"
import { MovieListComponent } from "@src/app/pages/movie-list/movie-list.component"
import { WatchNextComponent } from "@src/app/pages/watch-next/watch-next.component"
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api"

export const componentDeclarations: any[] = [
  AppComponent,
  AboutComponent,
  MovieListComponent,
  MovieFormComponent,
  WatchNextComponent,
]

export const moduleImports: any[] = [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { put204: false, dataEncapsulation: false }),
]