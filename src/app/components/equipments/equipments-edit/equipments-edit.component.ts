import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EquipmentService} from '../../../services/equipment.service';
import {Equipment} from '../../../entities/Equipment';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {StateTypeService} from '../../../services/state-type.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-equipments-edit',
  templateUrl: './equipments-edit.component.html',
  styleUrls: ['./equipments-edit.component.css']
})
export class EquipmentsEditComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  equipment: Equipment = {
    brand: '',
    category: {
      id: 0,
      name: ''
    },
    id: 0,
    model: '',
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

  constructor(private categoryService: CategoryService,
              private stateTypeService: StateTypeService,
              private equipmentService: EquipmentService,
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
      'category': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.equipmentService.getOne(params.get('id')).then(data => {
        this.equipment = data;

        this.form.patchValue(this.equipment);
        }, err => console.log(err.message));
      console.log(params.get('id'));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.equipmentService.update(this.form.getRawValue(), this.equipment.id).then(data => {
      this.router.navigateByUrl('/admin/equipments');
    }, err => console.log(err.message));
  }

}
