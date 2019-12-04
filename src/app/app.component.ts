import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Event as NavigationEvent, NavigationStart, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SidebarService} from './components/sidebar/sidebar.service';
import {filter} from 'rxjs/operators';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private displaySidebar: boolean = false;

  constructor(private location: Location,
              private authenticationService: AuthenticationService,
              private sidebarService: SidebarService,
              private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe(
        (event: NavigationEvent) => {
          console.log(this.location.path());
          if (!this.authenticationService.getToken()) {
            this.displaySidebar = false;
            console.log("sideabar : false");
          } else {
            this.displaySidebar = true;
            console.log("sideabar : true");
          }
        }
      );
  }

  title = 'moyennes-genereaux-front';

  ngOnInit(): void {
    let token = this.authenticationService.getToken();

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
