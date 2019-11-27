import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {Assignment} from '../entities/assignment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService extends GenericService<Assignment>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/assignments')
  }
}
