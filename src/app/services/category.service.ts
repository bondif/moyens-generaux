import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../entities/Category';
import {GenericService} from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends GenericService<Category> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/categories');
  }

  getNotAvailable() {
    return this.http.get(this.BASE_URL+'/not-available', this.headers)
      .toPromise()
      .then(res => <Category[]> res)
      .then(data => {
        return data;
      });
  }

}
