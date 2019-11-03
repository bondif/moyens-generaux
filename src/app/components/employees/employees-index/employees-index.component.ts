import {Component, OnInit} from '@angular/core';
import {Function} from '../../../entities/Function';
import {FunctionService} from '../../../services/function.service';
import {Router} from '@angular/router';
import {Employee} from '../../../entities/employee';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-employees-index',
  templateUrl: './employees-index.component.html',
  styleUrls: ['./employees-index.component.css']
})
export class EmployeesIndexComponent implements OnInit {
  employees: any;
  data: any;
  size: number = 15;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.loadData()
  }
  loadData(){
    this.employeeService.getPage(this.currentPage, this.size).then(employees => {
        this.data = employees;
        this.employees = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }
  edit(id) {
    this.router.navigateByUrl('/admin/employees/' + id + '/edit');
  }

  delete(id) {
    this.employeeService.delete(id).then(
      suceess => {
        this.employees.forEach(e => {
          if (e.id == id) {
            let i = this.employees.indexOf(e);
            this.employees.splice(i, 1);
          }
        });
      }
    );
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData()
  }
}
