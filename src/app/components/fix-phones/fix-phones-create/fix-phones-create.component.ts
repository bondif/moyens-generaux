import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {FixPhone} from '../../../entities/Fixphone';
import {FixPhoneService} from '../../../services/fix-phone.service';

@Component({
  selector: 'app-fix-phones-create',
  templateUrl: './fix-phones-create.component.html',
  styleUrls: ['./fix-phones-create.component.css']
})
export class FixPhonesCreateComponent implements OnInit {


  fixPhone: FixPhone = {
    ceiling: '',
    number: '',
    brand: '',
    category: {name: '', id: 0},
    id: 0,
    model: '',
    registrationNumber: '',
    state: {id: 0, name: ''}
  };
  categories: Category[];

  constructor(private categoryService: CategoryService, private fixPhoneService: FixPhoneService, private router: Router) {
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

    console.log(this.fixPhone);
    this.fixPhoneService.save(this.fixPhone).then(data => {
      this.router.navigateByUrl('/admin/fix-phones');
    }, error => {
      console.log(error);
    });
  }

}
