import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getUser(){
    return this.http.get(`${this.url}/1`);
  }
}
