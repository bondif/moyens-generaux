import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EquipmentService} from '../../../services/equipment.service';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-equipments-create',
  templateUrl: './equipments-create.component.html',
  styleUrls: ['./equipments-create.component.css']
})
export class EquipmentsCreateComponent implements OnInit {

  form: FormGroup;

  submitted: boolean;

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private equipmentService: EquipmentService,
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
      'category': new FormControl('', Validators.required),
    });

    this.submitted = false;
  }

  save() {
    this.submitted = true;

    this.equipmentService.save(this.form.getRawValue()).then(data => {
      this.router.navigateByUrl('/admin/equipments');
    }, error => {
      console.log(error);
    });
  }

}
