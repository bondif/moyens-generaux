import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entities/Category';
import {FurnitureService} from '../../../services/furniture.service';
import {StateTypeService} from '../../../services/state-type.service';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-furnitures-create',
  templateUrl: './furnitures-create.component.html',
  styleUrls: ['./furnitures-create.component.css'],
})
export class FurnituresCreateComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  constructor(private furnitureService: FurnitureService,
              private stateTypeService: StateTypeService,
              private categoryService: CategoryService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.categoryService.getAll().then(categories => {
      this.categories = categories;
    });

    this.form = this.fb.group({
      'brand': new FormControl('', Validators.required),
      'registrationNumber': new FormControl('', Validators.required),
      'model': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;
    this.furnitureService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/furnitures');
    }, err => console.log(err.message));
  }
}
