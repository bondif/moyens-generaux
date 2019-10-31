import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  BASE_URL: string = "localhost:8080/api/admin";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.BASE_URL + '/functions/')
      .toPromise()
      .then(res => <Function[]> res)
      .then(data => { return data; });
  }
}
