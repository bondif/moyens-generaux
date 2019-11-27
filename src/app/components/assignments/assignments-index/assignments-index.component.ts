import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../services/request.service';
import {Router} from '@angular/router';
import {AssignmentService} from '../../../services/assignment.service';
import {Assignment} from '../../../entities/assignment';

@Component({
  selector: 'app-assignments-index',
  templateUrl: './assignments-index.component.html',
  styleUrls: ['./assignments-index.component.css']
})
export class AssignmentsIndexComponent implements OnInit {
  assignments: Assignment[];
  data: any;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.assignmentService.getPage(this.currentPage, this.size).then(request => {
        this.data = request;
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
