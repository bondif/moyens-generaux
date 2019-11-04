import {Component, OnInit} from '@angular/core';
import {FilterUtils} from 'primeng/api';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tools-index',
  templateUrl: './tools-index.component.html',
  styleUrls: ['./tools-index.component.css']
})
export class ToolsIndexComponent implements OnInit {

  cols: any[];

  categories: Category[];

  category: Category;


  constructor(private categoryService: CategoryService, private router: Router) {
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


  reload() {
    console.log("reloading ......................");
  }
}
