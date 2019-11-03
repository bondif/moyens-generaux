import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Function} from '../../../entities/Function';
import {FunctionService} from '../../../services/function.service';

@Component({
  selector: 'app-functions-create',
  templateUrl: './functions-create.component.html',
  styleUrls: ['./functions-create.component.css']
})
export class FunctionsCreateComponent implements OnInit {
  function: Function = {id: 0, name: ''};

  constructor(private functionService: FunctionService, private router: Router) {
  }

  ngOnInit() {

  }

  save() {
    this.functionService.save(this.function).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/functions');
    }, err => console.log(err.message));
  }
}
