import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  private currentUserRole: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private route: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  isAdmin(): boolean {
    return localStorage.getItem('Role')==="admin"?true:false;
  }

  login(username: string, password: string) {
    console.log('username=' + username);
    return this.http.post<any>('http://localhost:8080/api/login',
      {username, password}, {observe: 'response'}).subscribe(resp => {
      console.log(resp.headers.keys());

      console.log(jwt_decode(resp.headers.get('Authorization')).roles);
      localStorage.setItem('currentUser', JSON.stringify(resp.headers.get('Authorization')));
      let role = 'user';
      jwt_decode(resp.headers.get('Authorization')).roles.forEach(roles => {
        if (roles === 'ADMIN') {
          role = 'admin';
        }
      });
      localStorage.setItem("Role",role)
      role === 'admin' ? this.route.navigateByUrl('/admin') : this.route.navigateByUrl('/user/');
    });

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
