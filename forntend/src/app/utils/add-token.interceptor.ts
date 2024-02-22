import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
   // const headers = new HttpHeaders().set('authorization',`Bearer ${token}`)
   // return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`,{headers:headers})
   if(token){
    req = req.clone({setHeaders:{Autorization: `Bearer ${token}`}})
   }
  return next(req);
};
