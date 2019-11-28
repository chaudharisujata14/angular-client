import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url =  'http://localhost:3000/student';
  constructor(private http: HttpClient) { }

  select() {
    return this.http.get(this.url);
  }
}
