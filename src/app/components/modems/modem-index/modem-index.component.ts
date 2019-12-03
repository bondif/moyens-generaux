import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Modem} from '../../../entities/Modem';
import {ModemService} from '../../../services/modem.service';
import {ConfirmService} from '../../../services/confirm.service';

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

  constructor(private modemService: ModemService,
              private confirmService: ConfirmService,
              private router: Router) {
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
      },
      err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/modems/' + id + '/edit');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(() => {
      this.modemService.delete(id).then(
        success => {
          this.modems.forEach(e => {
            if (e.id == id) {
              let i = this.modems.indexOf(e);
              this.modems.splice(i, 1);
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
    this.router.navigateByUrl('/admin/modems/create');
  }
}
