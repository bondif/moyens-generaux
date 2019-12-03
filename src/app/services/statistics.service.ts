import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  URL: string = "http://localhost:8080/api/admin/statistics";
  token: any = 'Bearer ' + this.auth.currentUserValue();
  headers = {headers: {'Authorization': this.token}};

  constructor(private http: HttpClient,
              private auth: AuthenticationService) { }

  getAll() {
    return this.http.get(this.URL, this.headers)
      .toPromise()
      .then(res => <Statistics> res)
      .then(data => {
        return data;
      });
  }
}
