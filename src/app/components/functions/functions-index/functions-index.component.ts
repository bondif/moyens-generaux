import {Component, OnInit} from '@angular/core';
import {FunctionService} from '../../../services/function.service';
import {Router} from '@angular/router';
import {Function} from '../../../entities/Function';
import {ConfirmService} from '../../../services/confirm.service';

@Component({
  selector: 'functions-app-index',
  templateUrl: './functions-index.component.html',
  styleUrls: ['./functions-index.component.css']
})
export class FunctionsIndexComponent implements OnInit {

  functions: Function[];

  constructor(private functionService: FunctionService,
              private confirmService: ConfirmService,
              private router: Router) {
  }

  ngOnInit() {
    this.functionService.getAll().then(functions => this.functions = functions, err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/functions/' + id + '/edit');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(() => {
      this.functionService.delete(id).then(
        success => {
          this.functions.forEach(e => {
            if (e.id == id) {
              let i = this.functions.indexOf(e);
              this.functions.splice(i, 1);
            }
          });
        }
      );
    }, null);
  }

  create() {
    this.router.navigateByUrl('/admin/functions/create');
  }
}
