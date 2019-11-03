import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {Department} from '../entities/department';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends GenericService<Department> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/departments/');
  }
}
