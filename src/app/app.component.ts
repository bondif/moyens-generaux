import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private location: Location, private authenticationService: AuthenticationService, private router: Router) {
  }

  title = 'moyennes-genereaux-front';

  ngOnInit(): void {
    let token = this.authenticationService.currentUserValue();
    if ((this.location.path() != '/login' &&
      this.location.path() != '/user/forgot-password') && !this.location.path().startsWith('/user/change-password')) {

      if (token == null) {
        this.router.navigateByUrl('/login');
      }
    } else {
      console.log(token);
    }


  }
}
