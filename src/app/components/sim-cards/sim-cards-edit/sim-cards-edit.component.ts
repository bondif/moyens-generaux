import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SimCard} from '../../../entities/SimCard';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {SimCardService} from '../../../services/sim-card.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sim-cards-edit',
  templateUrl: './sim-cards-edit.component.html',
  styleUrls: ['./sim-cards-edit.component.css']
})
export class SimCardsEditComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  simCard: SimCard = {
    callsCeiling: '',
    internetCeiling: '',
    phoneNumber: '',
    brand: '', category: {
      id: 0,
      name: ''
    },
    id: 0,
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
              private simCardService: SimCardService,
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
      'id': new FormControl(''),
      'brand': new FormControl('', Validators.required),
      'registrationNumber': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required),
      'callsCeiling': new FormControl('', Validators.required),
      'internetCeiling': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.simCardService.getOne(params.get('id')).then(data => {
        this.simCard = data;

        this.form.patchValue(this.simCard);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.simCardService.update(this.form.getRawValue(), this.simCard.id).then(data => {
      this.router.navigateByUrl('/admin/sim-cards');
    }, err => console.log(err.message));
  }

}
