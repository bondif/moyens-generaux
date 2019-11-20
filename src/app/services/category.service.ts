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

}
