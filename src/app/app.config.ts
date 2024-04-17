import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes
    ), 
    provideClientHydration(),
  
    importProvidersFrom(
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    )
  ]

};
