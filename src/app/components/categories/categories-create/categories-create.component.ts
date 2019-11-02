import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {Category} from '../../../entities/Category';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {
  category:Category={id: 0, name: ""}
  constructor(private categoryService: CategoryService, private router:Router) { }

  ngOnInit() {
  }

  save() {
    this.categoryService.save(this.category).then(data=>{
      console.log(data)
      this.router.navigateByUrl("/admin/categories")
    }, err => console.log(err.message));
  }
}
