import { Component, OnInit } from '@angular/core';
import {ChangePasswordFormat} from '../../../entities/changePasswordFormat';
import {PasswordService} from '../../../services/password.service';
import {error} from 'util';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordFormat:ChangePasswordFormat={
    token: "",
    oldPass: "",
    newPass:"",
    confPass:""
  }
  constructor(private passwordService:PasswordService) { }

  ngOnInit() {
  }

  save() {
    this.passwordService.changePassword(this.changePasswordFormat).then(data=>{
      console.log(data)
    },error=>{
      console.error(error)
    })
  }
}
