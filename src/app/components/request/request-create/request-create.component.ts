import {Component, OnInit} from '@angular/core';
import {Request} from '../../../entities/request';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {Category} from '../../../entities/Category';
import {RequestService} from '../../../services/request.service';
import {UserCategoryService} from '../../../services/user-category.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  sysDate: Date = new Date();
  request: Request = {
    reason: "",
    assignment: undefined,
    category: {id: 0, name: ''},
    comment: '',
    employee: undefined,
    endDate: undefined,
    id: 0,
    isAccepted: 0,
    startDate: undefined,
    requestDate: undefined

  };
  categories: Category[];

  constructor(private categoryService: UserCategoryService,
              private router: Router,
              private requestService: RequestService) {
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
    console.log(this.request);
    this.requestService.save(this.request).then(data => {
      this.router.navigateByUrl('/user/requests');
    }, error => {
      console.log(error);
    });
  }
}
