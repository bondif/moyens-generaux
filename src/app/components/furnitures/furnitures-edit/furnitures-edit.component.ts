import {Component, OnInit} from '@angular/core';
import {Furniture} from '../../../entities/Furniture';
import {FurnitureService} from '../../../services/furniture.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {StateTypeService} from '../../../services/state-type.service';
import {CategoryService} from '../../../services/category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-furnitures-edit',
  templateUrl: './furnitures-edit.component.html',
  styleUrls: ['./furnitures-edit.component.css']
})
export class FurnituresEditComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  furniture: Furniture = {
    id: 0,
    model: '',
    brand: '',
    registrationNumber: '',
    category: {
      id: 0,
      name: ''
    },
    state: {
      id: 0,
      name: ''
    }
  };

  states: StateType[];

  constructor(private furnitureService: FurnitureService,
              private stateTypeService: StateTypeService,
              private categoryService: CategoryService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.stateTypeService.getAll().then(data => this.states = data, error => console.log(error));
    this.categoryService.getAll().then(categories => {
      this.categories = categories;
    });

    this.form = this.fb.group({
      'id': new FormControl(),
      'brand': new FormControl('', Validators.required),
      'registrationNumber': new FormControl('', Validators.required),
      'model': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.furnitureService.getOne(params.get('id')).then(data => {
        this.furniture = data;

        this.form.patchValue(this.furniture);

      }, err => console.log(err.message));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.furnitureService.update(this.form.getRawValue(), this.furniture.id).then(data => {
      this.router.navigateByUrl('/admin/furnitures');
    }, err => console.log(err.message));
  }
}
