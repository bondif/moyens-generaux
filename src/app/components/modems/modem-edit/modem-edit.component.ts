import { Component, OnInit } from '@angular/core';
import {Modem} from '../../../entities/Modem';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {ModemService} from '../../../services/modem.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modem-edit',
  templateUrl: './modem-edit.component.html',
  styleUrls: ['./modem-edit.component.css']
})
export class ModemEditComponent implements OnInit {

  modem: Modem = {
    number: "",
    brand: '', category: {id: 0, name: ''}, id: 0, model: '', registrationNumber: '', state: {id: 0, name: ''}

  };
  category:Category= {id: 0, name: ''}
  categories:Category[]
  states: StateType[];
  constructor(private categoryService:CategoryService,
              private stateTypeService: StateTypeService,
              private modemService: ModemService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.stateTypeService.getAll().then(data=>this.states=data,error=> console.log(error))
    this.categoryService.getAll().then(categories => {
      this.categories = categories
    });
    this.route.paramMap.subscribe(params => {
      this.modemService.getOne(params.get('id')).then(data => {
        this.modem = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.modemService.update(this.modem,this.modem.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/modems');
    }, err => console.log(err.message));
  }

}
