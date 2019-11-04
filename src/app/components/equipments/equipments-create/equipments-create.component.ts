import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EquipmentService} from '../../../services/equipment.service';
import {CategoryService} from '../../../services/category.service';
import {Equipment} from '../../../entities/Equipment';
import {Category} from '../../../entities/Category';

@Component({
  selector: 'app-equipments-create',
  templateUrl: './equipments-create.component.html',
  styleUrls: ['./equipments-create.component.css']
})
export class EquipmentsCreateComponent implements OnInit {

  equipment: Equipment = {
    brand: '', category: {name: '', id: 0}, id: 0, model: '', registrationNumber: '', state: {id: 0, name: ''}
  };
  categories: Category[];

  constructor(private categoryService: CategoryService, private equipmentService: EquipmentService, private router: Router) {
  }

  ngOnInit() {
  }

  searchForCategories(event) {
    let query = event.query;
    this.categoryService.getAll().then(categories => {
      this.categories = this.filter(query, categories);
    });
  }


  filter(query, items): any[] {
    let filtered: any[] = [];
    let item: any;
    for (let i = 0; i < items.length; i++) {
      item = items[i];
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    return filtered;
  }

  save() {

    console.log(this.equipment);
    this.equipmentService.save(this.equipment).then(data => {
      // this.router.navigateByUrl('/admin/equipments');
    }, error => {
      console.log(error);
    });

  }


}
