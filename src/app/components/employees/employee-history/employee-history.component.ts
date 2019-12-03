import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../entities/assignment';
import {AssignmentService} from '../../../services/assignment.service';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.css']
})
export class EmployeeHistoryComponent implements OnInit {

  assignments: Assignment[];
  data: any;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;
  id:any;
  constructor(private employeeService: EmployeeService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
      this.loadData();
      }, err => console.log(err.message));

  }

  loadData() {
    this.employeeService.assignmentsHistory(this.id,this.currentPage, this.size).then(assignments => {
        this.data = assignments;
        this.assignments = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }
  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

}
