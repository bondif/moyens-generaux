import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  name: string;
  category: Category = new class implements Category {
    id: number;
    name: string;
  };

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryService.getOne(params.get('id')).then(data => {
        this.category = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.categoryService.update(this.category, this.category.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/categories');
    }, err => console.log(err.message));
  }
}
