import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Department} from '../../../entities/department';
import {DepartmentService} from '../../../services/department.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-departments-edit',
  templateUrl: './departments-edit.component.html',
  styleUrls: ['./departments-edit.component.css']
})
export class DepartmentsEditComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  department: Department = {
    id: 0,
    name: ''
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'id': new FormControl(),
      'name': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.departmentService.getOne(params.get('id')).then(data => {
        this.department = data;

        this.form.patchValue(this.department);
      }, err => console.log(err.message));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.departmentService.update(this.form.getRawValue(), this.department.id).then(data => {
      this.router.navigateByUrl('/admin/departments');
    }, err => console.log(err.message));
  }

}
