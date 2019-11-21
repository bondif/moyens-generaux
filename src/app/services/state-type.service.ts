import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {StateType} from '../entities/StateType';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateTypeService extends GenericService<StateType>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/state-types');
  }
}
