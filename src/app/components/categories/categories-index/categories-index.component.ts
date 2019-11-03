import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';
import {Router} from '@angular/router';

@Component({
  selector: 'categories-app-index',
  templateUrl: './categories-index.component.html',
  styleUrls: ['./categories-index.component.css']
})
export class CategoriesIndexComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getAll().then(categories => this.categories = categories, err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/categories/' + id + '/edit');
  }

  delete(id) {
    this.categoryService.delete(id).then(
      suceess => {
        this.categories.forEach(e => {
          if (e.id == id) {
            let i = this.categories.indexOf(e);
            this.categories.splice(i, 1);
          }
        });
      }
    );
  }
}
