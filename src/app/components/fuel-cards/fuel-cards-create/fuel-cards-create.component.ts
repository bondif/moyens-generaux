import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {FuelCardService} from '../../../services/fuel-card.service';

@Component({
  selector: 'app-fuel-cards-create',
  templateUrl: './fuel-cards-create.component.html',
  styleUrls: ['./fuel-cards-create.component.css']
})
export class FuelCardsCreateComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private fuelCardService: FuelCardService,
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
      'ceiling': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.fuelCardService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/fuel-cards');
    }, error => {
      console.log(error);
    });
  }
}
