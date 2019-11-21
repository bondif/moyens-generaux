import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {Function} from '../../../entities/Function';
import {FunctionService} from '../../../services/function.service';
import {Department} from '../../../entities/department';
import {DepartmentService} from '../../../services/department.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  functions: Function[];

  departments: Department[];

  constructor(private departmentService: DepartmentService,
              private functionService: FunctionService,
              private employeeService: EmployeeService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.functionService.getAll().then(functions => {
      this.functions = functions;
    });

    this.departmentService.getAll().then(departments => {
      this.departments = departments;
    });

    this.form = this.fb.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'registrationNumber': new FormControl('', Validators.required),
      'cin': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'tel': new FormControl('', Validators.required),
      'function': new FormControl('', Validators.required),
      'department': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.employeeService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/employees');
    }, error => {console.log(error);});
  }

}
