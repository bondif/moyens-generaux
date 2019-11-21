import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';

@Component({
  selector: 'app-vehicles-create',
  templateUrl: './vehicles-create.component.html',
  styleUrls: ['./vehicles-create.component.css']
})
export class VehiclesCreateComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  constructor(private vehicleService: VehicleService,
              private categoryService: CategoryService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getAll().then(categories => {
      this.categories = categories;
    });

    this.form = this.fb.group({
      'brand': new FormControl('', Validators.required),
      'registrationNumber': new FormControl('', Validators.required),
      'model': new FormControl('', Validators.required),
      'vin': new FormControl('', Validators.required),
      'horseCount': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.vehicleService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/vehicles');
    }, err => console.log(err.message));
  }
}
