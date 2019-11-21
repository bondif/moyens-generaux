import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entities/Category';
import {SimCard} from '../../../entities/SimCard';
import {CategoryService} from '../../../services/category.service';
import {SimCardService} from '../../../services/sim-card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sim-cards-create',
  templateUrl: './sim-cards-create.component.html',
  styleUrls: ['./sim-cards-create.component.css']
})
export class SimCardsCreateComponent implements OnInit {

  simCard: SimCard = {
    callsCeiling: '',
    internetCeiling: '',
    brand: '',
    category: {name: '', id: 0},
    id: 0,
    phoneNumber: '',
    registrationNumber: '',
    state: {id: 0, name: ''}
  };
  categories: Category[];

  constructor(private categoryService: CategoryService, private simCardService: SimCardService, private router: Router) {
  }

  ngOnInit() {
  }

  searchForCategories(event) {
    let query = event.query;
    this.categoryService.getAll().then(categories => {
      this.categories = this.filter(query, categories);
    });
  }


  filter(query, items): any[] {
    let filtered: any[] = [];
    let item: any;
    for (let i = 0; i < items.length; i++) {
      item = items[i];
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    return filtered;
  }

  save() {

    console.log(this.simCard);
    this.simCardService.save(this.simCard).then(data => {
      this.router.navigateByUrl('/admin/sim-card');
    }, error => {
      console.log(error);
    });
  }

}
