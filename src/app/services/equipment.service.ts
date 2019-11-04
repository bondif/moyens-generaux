import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Equipment} from '../entities/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends GenericService<Equipment>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/equipments/');
  }
}
