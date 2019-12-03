import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {FuelCard} from '../entities/FuelCard';

@Injectable({
  providedIn: 'root'
})
export class FuelCardService extends GenericService<FuelCard> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/fuel-cards');
  }
}
