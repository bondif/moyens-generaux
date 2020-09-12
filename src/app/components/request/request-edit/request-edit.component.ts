import {Component, OnInit} from '@angular/core';
import {Request} from '../../../entities/request';
import {RequestService} from '../../../services/request.service';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserCategoryService} from '../../../services/user-category.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = {
    reason: "",
    assignment: undefined,
    category: {id: 0, name: ''},
    comment: '',
    employee: undefined,
    endDate: undefined,
    id: 0,
    isAccepted: 0,
    requestDate: undefined,
    startDate: undefined
  };

  category: Category = {id: 0, name: ''};
  categories: Category[];
  sysDate: Date = new Date();

  constructor(private categoryService: UserCategoryService,
              private stateTypeService: StateTypeService,
              private router: Router,
              private requestService: RequestService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.categoryService.getAll().then(categories => {
      this.categories = categories;
    });
    this.route.paramMap.subscribe(params => {
      this.requestService.getOne(params.get('id')).then(data => {
        this.request = data;
        this.request.startDate = new Date(this.request.startDate);
        this.request.endDate = new Date(this.request.endDate);
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
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

  update() {
    this.requestService.update(this.request, this.request.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/user/requests');
    }, err => console.log(err.message));
  }

}
