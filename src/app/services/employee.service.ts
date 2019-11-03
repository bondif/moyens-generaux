import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {Employee} from '../entities/employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService<Employee>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/employees/');
  }

}
