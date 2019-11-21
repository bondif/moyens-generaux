import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {Category} from '../../../entities/Category';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  constructor(private categoryService: CategoryService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'name': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;
    this.categoryService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/categories');
    }, err => console.log(err.message));
  }
}
