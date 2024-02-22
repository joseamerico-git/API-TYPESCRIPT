import { Injectable } from '@angular/core';
import { environment } from '../environmants/environmant';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   myAppUrl:string;
   myApiUrl:string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/';


   }

   signIn(user:User):Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user);
   }

   //login(user:User):Observable<string>{
      //return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`,user);
  // }
}