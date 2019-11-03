import {Component, OnInit} from '@angular/core';
import {Function} from '../../../entities/Function';
import {ActivatedRoute, Router} from '@angular/router';
import {FunctionService} from '../../../services/function.service';

@Component({
  selector: 'app-functions-edit',
  templateUrl: './functions-edit.component.html',
  styleUrls: ['./functions-edit.component.css']
})
export class FunctionsEditComponent implements OnInit {
  function: Function = {id: 0, name: ''};

  constructor(private route: ActivatedRoute, private router: Router, private functionService: FunctionService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.functionService.getOne(params.get('id')).then(data => {
        this.function = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.functionService.update(this.function, this.function.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/functions');
    }, err => console.log(err.message));
  }
}
