import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {FixPhone} from '../entities/Fixphone';

@Injectable({
  providedIn: 'root'
})
export class FixPhoneService extends GenericService<FixPhone> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/equipments/');
  }
}
