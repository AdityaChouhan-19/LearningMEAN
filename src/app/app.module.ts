import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importing forms module to use ngModel property
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    //As we are using FormsModule we have to reference it here.
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
