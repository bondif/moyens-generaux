import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entities/Category';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';
import {ModemService} from '../../../services/modem.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modems-create',
  templateUrl: './modems-create.component.html',
  styleUrls: ['./modems-create.component.css']
})
export class ModemsCreateComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private modemService: ModemService,
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
      'number': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.modemService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/modems');
    }, error => {
      console.log(error);
    });
  }

}
