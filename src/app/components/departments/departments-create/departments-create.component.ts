import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DepartmentService} from '../../../services/department.service';
import {Department} from '../../../entities/department';

@Component({
  selector: 'app-departments-create',
  templateUrl: './departments-create.component.html',
  styleUrls: ['./departments-create.component.css']
})
export class DepartmentsCreateComponent implements OnInit {
  department: Department = {id: 0, name: ''};

  constructor(private departmentService: DepartmentService, private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.departmentService.save(this.department).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/departments');
    }, err => console.log(err.message));
  }
}
