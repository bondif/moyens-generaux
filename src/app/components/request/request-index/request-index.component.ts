import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RequestService} from '../../../services/request.service';

@Component({
  selector: 'app-request-index',
  templateUrl: './request-index.component.html',
  styleUrls: ['./request-index.component.css']
})
export class RequestIndexComponent implements OnInit {
  requests: any;
  data: any;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private requestService: RequestService, private router: Router) {
  }

  ngOnInit() {
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

  edit(id) {
    this.router.navigateByUrl('user/requests/' + id + '/edit');
  }

  delete(id) {
    this.requestService.delete(id).then(
      success => {
        this.requests.forEach(e => {
          if (e.id == id) {
            let i = this.requests.indexOf(e);
            this.requests.splice(i, 1);
          }
        });
      }
    );
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

  create() {
    this.router.navigateByUrl('user/requests/create');
  }
}
