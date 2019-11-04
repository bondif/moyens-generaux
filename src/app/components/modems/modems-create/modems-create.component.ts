import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {Modem} from '../../../entities/Modem';
import {ModemService} from '../../../services/modem.service';

@Component({
  selector: 'app-modems-create',
  templateUrl: './modems-create.component.html',
  styleUrls: ['./modems-create.component.css']
})
export class ModemsCreateComponent implements OnInit {


  modem: Modem = {
    number: '',
    brand: '',
    category: {name: '', id: 0},
    id: 0,
    model: '',
    registrationNumber: '',
    state: {id: 0, name: ''}
  };
  categories: Category[];

  constructor(private categoryService: CategoryService, private modemService: ModemService, private router: Router) {
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

    console.log(this.modem);
    this.modemService.save(this.modem).then(data => {
      // this.router.navigateByUrl('/admin/equipments');
    }, error => {
      console.log(error);
    });
  }


}
