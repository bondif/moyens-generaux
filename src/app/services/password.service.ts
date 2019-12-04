import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {ChangePasswordFormat} from '../entities/changePasswordFormat';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  token: any = 'Bearer ' + this.auth.getToken();
  headers = {headers: {'Authorization': this.token}};
  BASE_URL = 'http://localhost:8080/api/user';

  changePassword(changePasswordFormat: ChangePasswordFormat) {
    return this.http.post(this.BASE_URL + '/update-password', changePasswordFormat, this.headers)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  forgotPassword(email: string) {
    return this.http.get(this.BASE_URL + '/forgot-password?email='+ email)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  resetPassword(changePasswordFormat: ChangePasswordFormat) {
    return this.http.post(this.BASE_URL + '/reset-password', changePasswordFormat)
      .toPromise()
      .then(data => {
        return data;
      });
  }
}
