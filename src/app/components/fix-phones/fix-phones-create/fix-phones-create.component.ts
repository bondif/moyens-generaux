import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {FixPhoneService} from '../../../services/fix-phone.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fix-phones-create',
  templateUrl: './fix-phones-create.component.html',
  styleUrls: ['./fix-phones-create.component.css']
})
export class FixPhonesCreateComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private fixPhoneService: FixPhoneService,
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
      'ceiling': new FormControl('', Validators.required),
      'number': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.fixPhoneService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/fix-phones');
    }, error => {
      console.log(error);
    });
  }

}
