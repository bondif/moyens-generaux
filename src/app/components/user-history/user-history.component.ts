import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../entities/assignment';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  assignments: Assignment[];
  data: any;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;
  id: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.loadData();

  }

  loadData() {
    this.userService.getHistory(this.currentPage, this.size).then(assignments => {
        this.data = assignments;
        this.assignments = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
      },
      err => console.log(err.message));
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

}
