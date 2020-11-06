import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { componentDeclarations, moduleImports } from '@src/app/app.common';
import { AppComponent } from '@src/app/app.component';
import { WebBreadCrumbComponent } from '@src/app/shared/web-bread-crumb/web-bread-crumb.component';

@NgModule({
  declarations: [
    ...componentDeclarations,
    WebBreadCrumbComponent,
  ],
  imports: [
    ...moduleImports,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
