import {Component, OnInit} from '@angular/core';
import {SimCard} from '../../../entities/SimCard';
import {SimCardService} from '../../../services/sim-card.service';
import {Router} from '@angular/router';
import {ConfirmService} from '../../../services/confirm.service';

@Component({
  selector: 'app-sim-cards-index',
  templateUrl: './sim-cards-index.component.html',
  styleUrls: ['./sim-cards-index.component.css']
})
export class SimCardsIndexComponent implements OnInit {

  simCards: SimCard[];
  data: any;
  size: number = 15;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private simCardService: SimCardService,
              private confirmService: ConfirmService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.simCardService.getPage(this.currentPage, this.size).then(data => {
        this.data = data;
        this.simCards = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/sim-cards/' + id + '/edit');
  }

  showHistory(id: any) {
    this.router.navigateByUrl('/admin/tool/' + id + '/assignments');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(() => {
      this.simCardService.delete(id).then(
        success => {
          this.simCards.forEach(e => {
            if (e.id == id) {
              let i = this.simCards.indexOf(e);
              this.simCards.splice(i, 1);
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
    this.router.navigateByUrl('/admin/sim-cards/create');
  }
}
