import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {
  name:string
  constructor(private categoryService: CategoryService, private router:Router) { }

  ngOnInit() {
  }

  save() {
    this.categoryService.save(this.name).then(data=>{
      //redirect
      console.log(data)
      this.router.navigateByUrl("/admin/categories")
    }, err => console.log(err.message));
  }
}
