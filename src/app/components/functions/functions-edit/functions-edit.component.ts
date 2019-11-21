import {Component, OnInit} from '@angular/core';
import {Function} from '../../../entities/Function';
import {ActivatedRoute, Router} from '@angular/router';
import {FunctionService} from '../../../services/function.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-functions-edit',
  templateUrl: './functions-edit.component.html',
  styleUrls: ['./functions-edit.component.css']
})
export class FunctionsEditComponent implements OnInit {
  form: FormGroup;

  submitted: boolean;

  function: Function = {
    id: 0,
    name: ''
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private functionService: FunctionService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'id': new FormControl(),
      'name': new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe(params => {
      this.functionService.getOne(params.get('id')).then(data => {
        this.function = data;

        this.form.patchValue(this.function);
      }, err => console.log(err.message));
    });

    this.submitted = false;
  }

  update() {
    this.submitted = true;

    this.functionService.update(this.form.getRawValue(), this.function.id).then(data => {
      this.router.navigateByUrl('/admin/functions');
    }, err => console.log(err.message));
  }
}
