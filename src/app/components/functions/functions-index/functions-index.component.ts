import {Component, OnInit} from '@angular/core';
import {FunctionService} from '../../../services/function.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class FunctionsIndexComponent implements OnInit {

  functions: Function[];

  constructor(private functionService: FunctionService) {
  }

  ngOnInit() {
    this.functionService.getAll().then(functions => this.functions = functions, err => console.log(err.message));
  }

}
