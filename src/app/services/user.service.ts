import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {HttpClient} from '@angular/common/http';
import {Assignment} from '../entities/assignment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string="http://localhost:8080/api/user/employee";
  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }
  token: any = 'Bearer ' + this.auth.currentUserValue();
  headers = {headers: {'Authorization': this.token}};
  getHistory(page, size) {
    return this.http.get(this.BASE_URL + '/assignments?page=' + page + '&size=' + size, this.headers)
      .toPromise()
      .then(res => <Assignment[]> res)
      .then(data => {
        return data;
      });
  }
}
