import { Injectable } from '@angular/core';
import { environment } from '../environmants/environmant';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl:string
  private myApiUrl

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/';


   }

   signIn(user:User):Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user);
   }
}
