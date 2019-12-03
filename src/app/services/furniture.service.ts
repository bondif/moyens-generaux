import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {Furniture} from '../entities/Furniture';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService extends GenericService<Furniture> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/furnitures')
  }
}
