import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SimCard} from '../../../entities/SimCard';
import {Category} from '../../../entities/Category';
import {StateType} from '../../../entities/StateType';
import {CategoryService} from '../../../services/category.service';
import {StateTypeService} from '../../../services/state-type.service';
import {SimCardService} from '../../../services/sim-card.service';

@Component({
  selector: 'app-sim-cards-edit',
  templateUrl: './sim-cards-edit.component.html',
  styleUrls: ['./sim-cards-edit.component.css']
})
export class SimCardsEditComponent implements OnInit {

  simCard: SimCard = {
    callsCeiling: '', internetCeiling: '', phoneNumber: '',
    brand: '', category: {id: 0, name: ''}, id: 0, registrationNumber: '',
    state: {id: 0, name: ''}
  };

  category: Category = {id: 0, name: ''};
  categories: Category[];
  states: StateType[];

  constructor(private categoryService: CategoryService,
              private stateTypeService: StateTypeService,
              private simCardService: SimCardService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.stateTypeService.getAll().then(data => this.states = data, error => console.log(error));
    this.categoryService.getAll().then(categories => {
      this.categories = categories;
    });
    this.route.paramMap.subscribe(params => {
      this.simCardService.getOne(params.get('id')).then(data => {
        this.simCard = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }

  update() {
    this.simCardService.update(this.simCard, this.simCard.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/sim-cards');
    }, err => console.log(err.message));
  }


}
