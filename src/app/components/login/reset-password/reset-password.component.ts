import {Component, OnInit} from '@angular/core';
import {ChangePasswordFormat} from '../../../entities/changePasswordFormat';
import {PasswordService} from '../../../services/password.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  changePasswordFormat: ChangePasswordFormat = {
    token: '',
    oldPass: '',
    newPass: '',
    confPass: ''
  };

  constructor(private passwordService: PasswordService, private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.changePasswordFormat.token = param.get('token');
      console.log(param.get('token'));
    });
  }

  save() {
    this.passwordService.resetPassword(this.changePasswordFormat).then(
      data => {
        console.log(data)
        this.router.navigateByUrl("/login");
      }
      , err => console.error(err)
    );
  }
}
