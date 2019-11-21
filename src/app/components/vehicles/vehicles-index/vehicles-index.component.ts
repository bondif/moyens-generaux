import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import {Router} from '@angular/router';
import {ConfirmService} from '../../../services/confirm.service';

@Component({
  selector: 'app-vehicles-index',
  templateUrl: './vehicles-index.component.html',
  styleUrls: ['./vehicles-index.component.css']
})
export class VehiclesIndexComponent implements OnInit {

  vehicles: any;
  data: any;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number;
  totalElements: number;

  constructor(private vehicleService: VehicleService,
              private confirmService: ConfirmService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.vehicleService.getPage(this.currentPage, this.size).then(vehicles => {
        this.data = vehicles;
        this.vehicles = this.data.content;
        this.totalPages = this.data.totalPages;
        this.totalElements = this.data.totalElements;
      },
      err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/vehicles/' + id + '/edit');
  }

  delete(id) {
    this.confirmService.deleteConfirmation(() => {
      this.vehicleService.delete(id).then(
        success => {
          this.vehicles.forEach(e => {
            if (e.id == id) {
              let i = this.vehicles.indexOf(e);
              this.vehicles.splice(i, 1);
            }
          });
        }
      );
    }, null);
  }

  paginate(event) {
    this.currentPage = event.page;
    this.loadData();
  }

  create() {
    this.router.navigateByUrl('/admin/vehicles/create');
  }
}
