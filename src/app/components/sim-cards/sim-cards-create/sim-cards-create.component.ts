import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {SimCardService} from '../../../services/sim-card.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sim-cards-create',
  templateUrl: './sim-cards-create.component.html',
  styleUrls: ['./sim-cards-create.component.css']
})
export class SimCardsCreateComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private simCardService: SimCardService,
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
      'phoneNumber': new FormControl('', Validators.required),
      'callsCeiling': new FormControl('', Validators.required),
      'internetCeiling': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.simCardService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/sim-cards');
    }, error => {
      console.log(error);
    });
  }

}
