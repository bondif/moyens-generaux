import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {SimCard} from '../entities/SimCard';


@Injectable({
  providedIn: 'root'
})
export class SimCardService extends GenericService<SimCard> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/sim-cards');
  }
}
