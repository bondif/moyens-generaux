import {Component, OnInit} from '@angular/core';
import {Modem} from '../../../entities/Modem';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {ModemService} from '../../../services/modem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modem-edit',
  templateUrl: './modem-edit.component.html',
  styleUrls: ['./modem-edit.component.css']
})
export class ModemEditComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  category: Category = {
    id: 0,
    name: ''
  };

  categories: Category[];

  states: StateType[];

  modem: Modem = {
    id: undefined,
    number: '',
    brand: '',
    category: {
      id: 0,
      name: ''
    },
    model: '',
    registrationNumber: '',
    state: {
      id: 0,
      name: ''
    }
  };

  constructor(private categoryService: CategoryService,
              private stateTypeService: StateTypeService,
              private modemService: ModemService,
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
      'number': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.modemService.getOne(params.get('id')).then(data => {
        this.modem = data;

        this.form.patchValue(this.modem);
      }, err => console.log(err.message));
    });
  }

  update() {
    this.modemService.update(this.form.getRawValue(), this.modem.id).then(data => {
      this.router.navigateByUrl('/admin/modems');
    }, err => console.log(err.message));
  }

}
