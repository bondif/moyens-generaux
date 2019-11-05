import { Component, OnInit } from '@angular/core';
import {FixPhone} from '../../../entities/Fixphone';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {FixPhoneService} from '../../../services/fix-phone.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Modem} from '../../../entities/Modem';
import {ModemService} from '../../../services/modem.service';

@Component({
  selector: 'app-modem-index',
  templateUrl: './modem-index.component.html',
  styleUrls: ['./modem-index.component.css']
})
export class ModemIndexComponent implements OnInit {


  private modems: Modem[];
  data: any;
  size: number = 15;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private modemService: ModemService, private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.modemService.getPage(this.currentPage, this.size).then(data => {
        this.data = data;
        this.modems = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/modems/' + id + '/edit');
  }

  delete(id) {
    this.modemService.delete(id).then(
      suceess => {
        this.modems.forEach(e => {
          if (e.id == id) {
            let i = this.modems.indexOf(e);
            this.modems.splice(i, 1);
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
