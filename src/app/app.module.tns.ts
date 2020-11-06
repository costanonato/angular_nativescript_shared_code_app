import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { componentDeclarations, moduleImports } from '@src/app/app.common';
import { AppComponent } from '@src/app/app.component';
import { MobMovieRatingPickerComponent } from '@src/app/pages/movie-form/mob-movie-rating-picker/mob-movie-rating-picker.component';
import { MobActionBarComponent } from '@src/app/shared/mob-action-bar/mob-action-bar.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

@NgModule({
  declarations: [
    ...componentDeclarations,
    MobActionBarComponent,
    MobMovieRatingPickerComponent,
  ],
  imports: [
    ...moduleImports,
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
