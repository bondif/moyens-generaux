import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {Vehicle} from '../entities/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends GenericService<Vehicle> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/vehicles/')
  }
}
