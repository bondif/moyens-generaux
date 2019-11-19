import {Component, OnInit} from '@angular/core';
import {PasswordService} from '../../../services/password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;

  constructor(private passService: PasswordService) {
  }

  ngOnInit() {
  }

  save() {

    this.passService.forgotPassword(this.email).then(data => {
      console.log(data);
    }, err => {
      console.error(err);
    });
  }
}
