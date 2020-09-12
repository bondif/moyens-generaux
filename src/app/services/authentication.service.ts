import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private token: string;
  private role: string;

  constructor(private http: HttpClient, private route: Router) {
    this.token = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser'))).value;
    this.role = new BehaviorSubject<any>(localStorage.getItem('Role')).value;
  }

  getToken() {
    return this.token;
  }

  getRole() {
    return this.role;
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/api/login',
      {username, password}, {observe: 'response'}).subscribe(resp => {

      this.token = resp.headers.get('Authorization');
      localStorage.setItem('currentUser', JSON.stringify(resp.headers.get('Authorization')));
      this.role = 'user';
      jwt_decode(resp.headers.get('Authorization')).roles.forEach(roles => {
        if (roles === 'ADMIN') {
          this.role = 'admin';
        }
      });
      localStorage.setItem('Role', this.role);
      this.role === 'admin' ? this.route.navigateByUrl('/admin') : this.route.navigateByUrl('/user');
    });

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
