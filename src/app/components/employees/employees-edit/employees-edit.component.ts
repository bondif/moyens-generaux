import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../entities/employee';
import {Function} from '../../../entities/Function';
import {Department} from '../../../entities/department';
import {DepartmentService} from '../../../services/department.service';
import {FunctionService} from '../../../services/function.service';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  employee: Employee = {
    cin: '',
    department: {id: 0, name: ''},
    email: '',
    firstName: '',
    function: {id: 0, name: ''},
    id: 0,
    lastName: '',
    registrationNumber: '',
    tel: ''
  };

  functions: Function[];

  departments: Department[];

  constructor(private departmentService: DepartmentService,
              private functionService: FunctionService,
              private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute,
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
      'id': new FormControl(),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'registrationNumber': new FormControl('', Validators.required),
      'cin': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'tel': new FormControl('', Validators.required),
      'function': new FormControl('', Validators.required),
      'department': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.employeeService.getOne(params.get('id')).then(data => {
        this.employee = data;

        this.form.patchValue(this.employee);

      }, err => console.log(err.message));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.employeeService.update(this.form.getRawValue(), this.employee.id).then(data => {
      this.router.navigateByUrl('/admin/employees');
    }, err => console.log(err.message));
  }
}
