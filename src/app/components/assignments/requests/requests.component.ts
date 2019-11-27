import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../../services/request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-requists',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: any;
  data: any;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private requestService: RequestService, private router: Router) {
  }

  ngOnInit() {
    this.requestService.setBASE_URL('http://localhost:8080/api/admin/requests');
    this.loadData();
  }

  loadData() {
    this.requestService.getPage(this.currentPage, this.size).then(request => {
        this.data = request;
        this.requests = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }

  trait(id) {
    this.router.navigateByUrl('admin/assignments/' + id + '/create');
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

}
