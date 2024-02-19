import { ApplicationConfig } from '@angular/core';
import { RouterLink, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';


export const appConfig: ApplicationConfig = {
 
  providers: [provideRouter(routes), provideAnimations(), // required animations providers
  provideToastr({
    timeOut:4000,
    positionClass:'toast-bottom-right',
    preventDuplicates:true,
  }), RouterLink]
  
};
