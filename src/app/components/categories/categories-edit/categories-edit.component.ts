import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  category: Category = {
    id: 0,
    name: ""
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'id': new FormControl(),
      'name': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.categoryService.getOne(params.get('id')).then(data => {
        this.category = data;

        this.form.patchValue(this.category);
      }, err => console.log(err.message));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.categoryService.update(this.form.getRawValue(), this.category.id).then(data => {
      this.router.navigateByUrl('/admin/categories');
    }, err => console.log(err.message));
  }
}
