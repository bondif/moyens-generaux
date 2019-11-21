import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FunctionService} from '../../../services/function.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-functions-create',
  templateUrl: './functions-create.component.html',
  styleUrls: ['./functions-create.component.css']
})
export class FunctionsCreateComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  constructor(private functionService: FunctionService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'name': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.functionService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/functions');
    }, err => console.log(err.message));
  }
}
