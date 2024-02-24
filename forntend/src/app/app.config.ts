import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterLink, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { addTokenInterceptor } from './utils/add-token.interceptor';
import { errorInterceptorInterceptor } from './utils/error-interceptor.interceptor';


export const appConfig: ApplicationConfig = {
 
 
  providers: [importProvidersFrom(CommonModule),provideHttpClient(),provideRouter(routes), provideAnimations(), provideHttpClient(withInterceptors([addTokenInterceptor,errorInterceptorInterceptor])), // required animations providers
  provideToastr({
    timeOut:4000,
    positionClass:'toast-bottom-right',
    preventDuplicates:true,
  }), RouterLink]
  
};
