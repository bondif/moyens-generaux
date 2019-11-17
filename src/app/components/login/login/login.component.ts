import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string="admin";
  password: string="1234";

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  auth() {
    console.log("hhhhhhhhhhhhh");
    this.authenticationService.login(this.email,this.password)
  }

  logout() {
    this.authenticationService.logout()
  }
}
