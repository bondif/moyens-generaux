import {Component, OnInit} from '@angular/core';
import {FunctionService} from '../../../services/function.service';

@Component({
  selector: 'functions-app-index',
  templateUrl: './functions-index.component.html',
  styleUrls: ['./functions-index.component.css']
})
export class FunctionsIndexComponent implements OnInit {

  functions: Function[];

  constructor(private functionService: FunctionService) {
  }

  ngOnInit() {
    this.functionService.getAll().then(functions => this.functions = functions, err => console.log(err.message));
  }

  edit(id: any) {
    
  }

  delete(id: any) {
    
  }
}
