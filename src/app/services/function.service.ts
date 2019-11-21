import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Function} from '../entities/Function';
import {GenericService} from './generic.service';


@Injectable({
  providedIn: 'root'
})
export class FunctionService extends GenericService<Function> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/functions');
  }

}
