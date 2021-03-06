import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';
import {Router} from '@angular/router';
import {ConfirmService} from '../../../services/confirm.service';
import {SidebarService} from '../../sidebar/sidebar.service';

@Component({
  selector: 'categories-app-index',
  templateUrl: './categories-index.component.html',
  styleUrls: ['./categories-index.component.css']
})
export class CategoriesIndexComponent implements OnInit {

  categories: Category[];
  displayError: boolean = false;

  constructor(private categoryService: CategoryService,
              private confirmService: ConfirmService,
              private sidebarService: SidebarService,
              private router: Router) {
    sidebarService.setAsActive(4);
  }

  ngOnInit() {
    this.categoryService.getAll().then(categories => this.categories = categories, err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/categories/' + id + '/edit');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(
      () => {
        this.categoryService.delete(id).then(
          success => {
            this.categories.forEach(e => {
              if (e.id == id) {
                let i = this.categories.indexOf(e);
                this.categories.splice(i, 1);
              }
            });
          }
        ).catch(e => {
          this.displayError = true;
        })
      }
      , null);
  }

  create() {
    this.router.navigateByUrl('/admin/categories/create');
  }
}
