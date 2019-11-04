import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EquipmentService} from '../../../services/equipment.service';
import {Equipment} from '../../../entities/Equipment';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {StateTypeService} from '../../../services/state-type.service';
import {error, log} from 'util';

@Component({
  selector: 'app-equipments-edit',
  templateUrl: './equipments-edit.component.html',
  styleUrls: ['./equipments-edit.component.css']
})
export class EquipmentsEditComponent implements OnInit {

  equipment: Equipment = {
    brand: '', category: {id: 0, name: ''}, id: 0, model: '', registrationNumber: '', state: {id: 0, name: ''}

  };
  category:Category= {id: 0, name: ''}
  categories:Category[]
  states: StateType[];
  constructor(private categoryService:CategoryService,
    private stateTypeService: StateTypeService,
    private equipmentService: EquipmentService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.stateTypeService.getAll().then(data=>this.states=data,error=> console.log(error))
    this.categoryService.getAll().then(categories => {
      this.categories = categories
    });
    this.route.paramMap.subscribe(params => {
      this.equipmentService.getOne(params.get('id')).then(data => {
        this.equipment = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.equipmentService.save(this.equipment).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/equipments');
    }, err => console.log(err.message));
  }

}
