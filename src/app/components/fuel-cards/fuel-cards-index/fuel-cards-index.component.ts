import {Component, OnInit} from '@angular/core';
import {ConfirmService} from '../../../services/confirm.service';
import {FuelCardService} from '../../../services/fuel-card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fuel-cards-index',
  templateUrl: './fuel-cards-index.component.html',
  styleUrls: ['./fuel-cards-index.component.css']
})
export class FuelCardsIndexComponent implements OnInit {

  fuelCards: any;
  data: any;
  size: number = 15;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private fuelCardService: FuelCardService,
              private confirmService: ConfirmService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.fuelCardService.getPage(this.currentPage, this.size).then(fuelCards => {
        this.data = fuelCards;
        this.fuelCards = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
      },
      err => console.log(err.message)
    );
  }

  edit(id: any) {
    this.router.navigateByUrl('/admin/fuel-cards/' + id + '/edit');
  }

  delete(id: any) {
    this.confirmService.deleteConfirmation(() => {
      this.fuelCardService.delete(id).then(
        success => {
          this.fuelCards.forEach(e => {
            if (e.id == id) {
              let i = this.fuelCards.indexOf(e);
              this.fuelCards.splice(i, 1);
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
    this.router.navigateByUrl('/admin/fuel-cards/create');
  }
}
