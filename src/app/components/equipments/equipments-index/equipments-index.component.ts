import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EquipmentService} from '../../../services/equipment.service';

@Component({
  selector: 'app-equipments-index',
  templateUrl: './equipments-index.component.html',
  styleUrls: ['./equipments-index.component.css']
})
export class EquipmentsIndexComponent implements OnInit {

  equipments: any;
  data: any;
  size: number = 15;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private equipmentService: EquipmentService, private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.equipmentService.getPage(this.currentPage, this.size).then(equipments => {
        this.data = equipments;
        this.equipments = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
        console.log(this.data);
      },
      err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/equipments/' + id + '/edit');
  }

  delete(id) {
    this.equipmentService.delete(id).then(
      suceess => {
        this.equipments.forEach(e => {
          if (e.id == id) {
            let i = this.equipments.indexOf(e);
            this.equipments.splice(i, 1);
          }
        });
      }
    );
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

}
