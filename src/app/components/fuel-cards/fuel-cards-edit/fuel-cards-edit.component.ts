import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {FuelCard} from '../../../entities/FuelCard';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FuelCardService} from '../../../services/fuel-card.service';

@Component({
  selector: 'app-fuel-cards-edit',
  templateUrl: './fuel-cards-edit.component.html',
  styleUrls: ['./fuel-cards-edit.component.css']
})
export class FuelCardsEditComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  fuelCard: FuelCard = {
    id: 0,
    brand: '',
    category: {
      id: 0,
      name: ''
    },
    registrationNumber: '',
    ceiling: '',
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
              private fuelCardService: FuelCardService,
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
      'ceiling': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.fuelCardService.getOne(params.get('id')).then(data => {
        this.fuelCard = data;

        this.form.patchValue(this.fuelCard);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.fuelCardService.update(this.form.getRawValue(), this.fuelCard.id).then(data => {
      this.router.navigateByUrl('/admin/fuel-cards');
    }, err => console.log(err.message));
  }
}
