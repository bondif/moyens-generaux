import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../../entities/Vehicle';
import {VehicleService} from '../../../services/vehicle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicles-index',
  templateUrl: './vehicles-index.component.html',
  styleUrls: ['./vehicles-index.component.css']
})
export class VehiclesIndexComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService,
              private router: Router) {
  }

  ngOnInit() {
    this.vehicleService.getAll().then(vehicles => this.vehicles = vehicles, err => console.log(err.message));
  }

  edit(id) {
    this.router.navigateByUrl('/admin/vehicles/' + id + '/edit');
  }

  delete(id) {
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
  }

}
