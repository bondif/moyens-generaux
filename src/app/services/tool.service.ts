import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tool} from '../entities/Tool';
import {AuthenticationService} from './authentication.service';
import {Assignment} from '../entities/assignment';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  BASE_URL = 'http://localhost:8080/api/admin/tools';

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }
  assignmentsHistory(id,page, size) {
    return this.http.get(this.BASE_URL+'/' +id+ '/assignments?page=' + page + '&size=' + size, this.headers)
      .toPromise()
      .then(res => <Assignment[]> res)
      .then(data => {
        return data;
      });
  }
  token: any = 'Bearer ' + this.auth.getToken();
  headers = {headers: {'Authorization': this.token}};
  getAvailable(categoryId, startDate:Date, endDate:Date) {
    return this.http.get(this.BASE_URL + "?categoryId="+categoryId+"&startDate="+startDate.getTime()+"&endDate="+endDate.getTime(),
      this.headers)
      .toPromise()
      .then(res => <Tool[]> res)
      .then(data => {
        return data;
      });
  }
}
