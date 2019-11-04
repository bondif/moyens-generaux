import {Component, OnInit} from '@angular/core';
import {FixPhone} from '../../../entities/Fixphone';
import {FixPhoneService} from '../../../services/fix-phone.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fix-phones-index',
  templateUrl: './fix-phones-index.component.html',
  styleUrls: ['./fix-phones-index.component.css']
})
export class FixPhonesIndexComponent implements OnInit {

  fixPhones: FixPhone[];
  data: any;
  size: number = 15;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private fixPhoneService: FixPhoneService, private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.fixPhoneService.getPage(this.currentPage, this.size).then(data => {
        this.data = data;
        this.fixPhones = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/fix-phones/' + id + '/edit');
  }

  delete(id) {
    this.fixPhoneService.delete(id).then(
      suceess => {
        this.fixPhones.forEach(e => {
          if (e.id == id) {
            let i = this.fixPhones.indexOf(e);
            this.fixPhones.splice(i, 1);
          }
        });
      }
    );
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }


}
