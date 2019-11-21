import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DepartmentService} from '../../../services/department.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-departments-create',
  templateUrl: './departments-create.component.html',
  styleUrls: ['./departments-create.component.css']
})
export class DepartmentsCreateComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  constructor(private departmentService: DepartmentService,
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
    this.departmentService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/departments');
    }, err => console.log(err.message));
  }
}
