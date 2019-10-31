import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';

@Component({
  selector: 'app-index',
  templateUrl: './categories-index.component.html',
  styleUrls: ['./categories-index.component.css']
})
export class CategoriesIndexComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().then(categories => this.categories = categories, err => console.log(err.message));
  }

}
