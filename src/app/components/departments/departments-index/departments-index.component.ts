import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../../../services/department.service';
import {Router} from '@angular/router';
import {Department} from '../../../entities/department';
import {ConfirmService} from '../../../services/confirm.service';

@Component({
  selector: 'app-departments-index',
  templateUrl: './departments-index.component.html',
  styleUrls: ['./departments-index.component.css']
})
export class DepartmentsIndexComponent implements OnInit {

  constructor(private departmentService: DepartmentService,
              private confirmService: ConfirmService,
              private router: Router) {
  }

  departments: Department[];

  ngOnInit() {
    this.departmentService.getAll().then(departments => this.departments = departments, err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/departments/' + id + '/edit');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(() =>
    this.departmentService.delete(id).then(
      success => {
        this.departments.forEach(e => {
          if (e.id == id) {
            let i = this.departments.indexOf(e);
            this.departments.splice(i, 1);
          }
        });
      }
    ), null);
  }

  create() {
    this.router.navigateByUrl('/admin/departments/create');
  }
}
