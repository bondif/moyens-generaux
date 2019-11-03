import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../entities/employee';
import {Function} from '../../../entities/Function';
import {Department} from '../../../entities/department';
import {DepartmentService} from '../../../services/department.service';
import {FunctionService} from '../../../services/function.service';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {

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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeService.getOne(params.get('id')).then(data => {
        this.employee = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  searchForFunction(event) {
    let query = event.query;
    this.functionService.getAll().then(functions => {
      this.functions = this.filterFunctions(query, functions);
    });
  }

  searchForDepartment(event) {
    let query = event.query;
    this.departmentService.getAll().then(departments => {
      this.departments = this.filterFunctions(query, departments);
    });
  }

  filterFunctions(query, items): any[] {
    let filtered: any[] = [];
    let item: any;
    for (let i = 0; i < items.length; i++) {
      item = items[i];
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    return filtered;
  }

  update() {
    this.employeeService.save(this.employee).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/employees');
    }, err => console.log(err.message));
  }
}
