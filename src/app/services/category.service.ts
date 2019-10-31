import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../entities/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL: string = "localhost:8080/api/admin";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.BASE_URL + '/categories')
      .toPromise()
      .then(res => <Category[]> res)
      .then(data => { return data; });
  }
}
