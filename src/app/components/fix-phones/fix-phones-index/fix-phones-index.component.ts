import {Component, OnInit} from '@angular/core';
import {ConfirmService} from '../../../services/confirm.service';
import {Router} from '@angular/router';
import {FixPhoneService} from '../../../services/fix-phone.service';
import {FixPhone} from '../../../entities/Fixphone';

@Component({
  selector: 'app-fix-phones-index',
  templateUrl: './fix-phones-index.component.html',
  styleUrls: ['./fix-phones-index.component.css']
})
export class FixPhonesIndexComponent implements OnInit {

  fixPhones: any;
  data: any;
  size: number = 15;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private fixPhoneService: FixPhoneService,
              private confirmService: ConfirmService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.fixPhoneService.getPage(this.currentPage, this.size).then(fixPhones => {
        this.data = fixPhones;
        this.fixPhones = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
      },
      err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/fix-phones/' + id + '/edit');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(() => {
      this.fixPhoneService.delete(id).then(
        success => {
          this.fixPhones.forEach(e => {
            if (e.id == id) {
              let i = this.fixPhones.indexOf(e);
              this.fixPhones.splice(i, 1);
            }
          });
        }
      );
    }, null);
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

  create() {
    this.router.navigateByUrl('/admin/fix-phones/create');
  }

}
