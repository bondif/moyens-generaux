import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {Request} from '../entities/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService extends GenericService<Request> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/user/requests');
  }
}
