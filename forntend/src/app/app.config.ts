import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterLink, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


export const appConfig: ApplicationConfig = {
 
  providers: [importProvidersFrom(CommonModule),provideHttpClient(),provideRouter(routes), provideAnimations(), // required animations providers
  provideToastr({
    timeOut:4000,
    positionClass:'toast-bottom-right',
    preventDuplicates:true,
  }), RouterLink]
  
};
