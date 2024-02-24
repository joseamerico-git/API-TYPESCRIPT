import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error)=>{
   
   if([401,403].includes(error.status)){
     console.log("Unauthorized request")

     // acountService.logout();
   }
    const e = error.error.message || error.statusText;
    console.log(e)
    return throwError(()=>error);
  }));
};
