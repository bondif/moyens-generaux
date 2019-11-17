import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log('username=' + username);
    return this.http.post<any>('http://localhost:8080/api/login',
      {username, password}, {observe: 'response'}).subscribe(resp => {
      console.log(resp.headers.get('Authorization'));
      localStorage.setItem('currentUser', JSON.stringify(resp.headers.get('Authorization')));
      // this.currentUserSubject.next(resp.headers.get('Authorization'));
    });


    //  .pipe(map(user => {
    //   console.log("user="+user);
    //   // store user details and jwt token in local storage to keep user logged in between page refreshes
    //   localStorage.setItem('currentUser', JSON.stringify(user));
    //   this.currentUserSubject.next(user);
    // },error=>{
    //   console.log(error);
    // }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
