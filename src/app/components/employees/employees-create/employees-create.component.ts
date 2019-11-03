import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../entities/employee';
import {Router} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {Function} from '../../../entities/Function';
import {FunctionService} from '../../../services/function.service';
import {Department} from '../../../entities/department';
import {DepartmentService} from '../../../services/department.service';
import {error} from 'util';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.css']
})
export class EmployeesCreateComponent implements OnInit {
  employee:Employee={
    cin: "",
    department: {id: 0, name: ""},
    email: "",
    firstName: "",
    function: {id: 0, name: ""},
    id: 0,
    lastName: "",
    registrationNumber: "",
    tel: ""
  }
  functions:Function[];
  departments:Department[]
  constructor(private departmentService:DepartmentService, private functionService: FunctionService, private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {
  }

  searchForFunction(event) {
    let query = event.query;
    this.functionService.getAll().then(functions => {
      this.functions= this.filterFunctions(query, functions);
    });
  }
  searchForDepartment(event) {
    let query = event.query;
    this.departmentService.getAll().then(departments => {
      this.departments= this.filterFunctions(query, departments);
    });
  }
  filterFunctions(query, items):any[] {
    let filtered : any[] = [];
    let item:any;
    for(let i = 0; i < items.length; i++) {
      item = items[i];
      if(item.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    return filtered;
  }
  save() {

    console.log(this.employee);
    this.employeeService.save(this.employee).then(data=>{
      // this.router.navigateByUrl("/admin/employees")
    },error=>{
      console.log(error);
    })

  }


}
