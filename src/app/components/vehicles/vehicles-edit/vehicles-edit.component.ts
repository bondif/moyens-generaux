import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../../entities/Vehicle';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {StateTypeService} from '../../../services/state-type.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-vehicles-edit',
  templateUrl: './vehicles-edit.component.html',
  styleUrls: ['./vehicles-edit.component.css']
})
export class VehiclesEditComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  vehicle: Vehicle = {
    id: 0,
    vin: '',
    horseCount: 0,
    model: '',
    brand: '',
    category: {
      id: 0,
      name: ''
    },
    registrationNumber: '',
    state: {
      id: 0,
      name: ''
    }
  };

  category: Category = {
    id: 0,
    name: ''
  };

  categories: Category[];

  states: StateType[];

  constructor(private vehicleService: VehicleService,
              private stateTypeService: StateTypeService,
              private categoryService: CategoryService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
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
      'vin': new FormControl('', Validators.required),
      'horseCount': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.vehicleService.getOne(params.get('id')).then(data => {
        this.vehicle = data;

        this.form.patchValue(this.vehicle);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }


  update() {
    this.vehicleService.update(this.form.getRawValue(), this.vehicle.id).then(data => {
      this.router.navigateByUrl('/admin/vehicles');
    }, err => console.log(err.message));
  }

}
