import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FixPhone} from '../../../entities/Fixphone';
import {FixPhoneService} from '../../../services/fix-phone.service';

@Component({
  selector: 'app-fix-phones-edit',
  templateUrl: './fix-phones-edit.component.html',
  styleUrls: ['./fix-phones-edit.component.css']
})
export class FixPhonesEditComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  fixPhone: FixPhone = {
    brand: '',
    category: {
      id: 0,
      name: ''
    },
    id: 0,
    model: '',
    registrationNumber: '',
    number: '',
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
              private fixPhoneService: FixPhoneService,
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
      'ceiling': new FormControl('', Validators.required),
      'number': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.fixPhoneService.getOne(params.get('id')).then(data => {
        this.fixPhone = data;

        this.form.patchValue(this.fixPhone);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.fixPhoneService.update(this.form.getRawValue(), this.fixPhone.id).then(data => {
      this.router.navigateByUrl('/admin/fix-phones');
    }, err => console.log(err.message));
  }

}
