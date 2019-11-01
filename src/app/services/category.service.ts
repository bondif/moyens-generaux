import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../entities/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL: string = "http://localhost:8080/api/admin";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.BASE_URL + '/categories/')
      .toPromise()
      .then(res => <Category[]> res)
      .then(data => { return data; });
  }
  getOne(id) {
    return this.http.get(this.BASE_URL + '/categories/'+id)
      .toPromise()
      .then(res => <Category> res)
      .then(data => { return data; });
  }

  save(name) {
    return this.http.post(this.BASE_URL + '/categories/',name)
      .toPromise()
      .then(data => { return data; });
  }
  update(category:Category) {
    return this.http.put(this.BASE_URL + '/categories/'+category.id,category.name)
      .toPromise()
      .then(data => { return data; });
  }

  delete(id) {
    return this.http.delete(this.BASE_URL + '/categories/'+id)
      .toPromise()
      .then(data => { return data; });
  }

}
