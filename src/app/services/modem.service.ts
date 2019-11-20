import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {Function} from '../entities/Function';
import {HttpClient} from '@angular/common/http';
import {Modem} from '../entities/Modem';

@Injectable({
  providedIn: 'root'
})
export class ModemService extends GenericService<Modem> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:8080/api/admin/modems');
  }
}
