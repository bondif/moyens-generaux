import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {log} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor (private authenticationService:AuthenticationService,private router:Router) { }
  title = 'moyennes-genereaux-front';

  ngOnInit(): void {
    let token=this.authenticationService.currentUserValue()
    if (token==null)
      this.router.navigateByUrl('/login');

  }
}
