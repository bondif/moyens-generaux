import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Department} from '../../../entities/department';
import {DepartmentService} from '../../../services/department.service';

@Component({
  selector: 'app-departments-edit',
  templateUrl: './departments-edit.component.html',
  styleUrls: ['./departments-edit.component.css']
})
export class DepartmentsEditComponent implements OnInit {
  department: Department = {id: 0, name: ''};

  constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.departmentService.getOne(params.get('id')).then(data => {
        this.department = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.departmentService.update(this.department, this.department.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/departments');
    }, err => console.log(err.message));
  }

}
