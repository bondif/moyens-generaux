import { Component, OnInit } from '@angular/core';
import {EquipmentService} from '../../../services/equipment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Equipment} from '../../../entities/Equipment';
import {FixPhoneService} from '../../../services/fix-phone.service';
import {FixPhone} from '../../../entities/Fixphone';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';

@Component({
  selector: 'app-fix-phones-edit',
  templateUrl: './fix-phones-edit.component.html',
  styleUrls: ['./fix-phones-edit.component.css']
})
export class FixPhonesEditComponent implements OnInit {

  fixPhone: FixPhone = {
    ceiling: "", number: "",
    brand: '', category: {id: 0, name: ''}, id: 0, model: '', registrationNumber: '', state: {id: 0, name: ''}

  };
  category:Category= {id: 0, name: ''}
  categories:Category[]
  states: StateType[];
  constructor(private categoryService:CategoryService,
              private stateTypeService: StateTypeService,
              private fixPhoneService: FixPhoneService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.stateTypeService.getAll().then(data=>this.states=data,error=> console.log(error))
    this.categoryService.getAll().then(categories => {
      this.categories = categories
    });
    this.route.paramMap.subscribe(params => {
      this.fixPhoneService.getOne(params.get('id')).then(data => {
        this.fixPhone = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.fixPhoneService.update(this.fixPhone,this.fixPhone.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/fix-phones');
    }, err => console.log(err.message));
  }


}
